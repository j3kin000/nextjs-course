import { NextApiRequest, NextApiResponse } from "next";
import { buildFeedbackPath, extractFeedback } from "./feedback";

function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = req.query.id;
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);
  const filteredData = data.find((item: any) => item.id === id);
  res.status(200).json({
    feedback: filteredData,
  });
}
export default handler;
