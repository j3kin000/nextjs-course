import { NextApiRequest, NextApiResponse } from "next";
import { MongoClient } from "mongodb";
const url = `mongodb+srv://${process.env.mongodb_username}:${process.env.mongodb_password}@${process.env.mongodb_clustername}.p6s8enb.mongodb.net/${process.env.mongodb_database}?retryWrites=true&w=majority`;
async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const {
      email,
      name,
      message,
    }: { name: string; email: string; message: string } = req.body;
    if (
      !email ||
      !email.includes("@") ||
      name.trim() === "" || // Corrected this line
      message.trim() === "" // Corrected this line
    ) {
      res.status(422).json({ message: "Fields is not valid" });
      return;
    }

    let client: MongoClient;

    try {
      client = await MongoClient.connect(url);
    } catch (error) {
      res.status(500).json({ message: "Error connecting  is not valid" });
      return;
    }

    try {
      const newMessage: {
        email: string;
        name: string;
        message: string;
        id?: any;
      } = {
        email,
        name,
        message,
      };
      const db = client.db();
      const result = await db.collection("messages").insertOne(newMessage);
      newMessage.id = result.insertedId;
      setTimeout(() => {
        client.close();
      }, 1500);
      res.status(201).json({ message: "FSuccess stored message" });
    } catch (error) {
      res.status(500).json({ message: "Error connecting  is not valid" });
      return;
    }
  }
}

export default handler;
