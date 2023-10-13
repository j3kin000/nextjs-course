import React, { FC, FormEvent, useState } from "react";
import classess from "./contact-form.module.css";
import Notification from "../ui/notification";

const contactData = async (newMessage: any) => {
  const response = await fetch("/api/contact", {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(newMessage),
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data.message || "something wrong");
  }
};
const ContactForm: FC = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [name, setName] = useState("");
  const [notif, setNotif] = useState("");
  const sendMessageHandler = async (event: FormEvent) => {
    event.preventDefault();
    const newMessage = {
      email,
      name,
      message,
    };
    try {
      setNotif("pending");
      await contactData(newMessage);
      setNotif("success");
    } catch (error) {
      setNotif("error");
    }
  };

  let notificationData;
  if (notif === "pending") {
    notificationData = {
      status: "pending",
      title: "pending message",
      message: "on peindnig message",
    };
  }
  if (notif === "success") {
    notificationData = {
      status: "success",
      title: "success message",
      message: "on success message",
    };
  }

  if (notif === "error") {
    notificationData = {
      status: "error",
      title: "error message",
      message: "on peindnig error",
    };
  }
  return (
    <section className={classess.contact}>
      <h1>How can I help you</h1>
      <form onSubmit={sendMessageHandler}>
        <div className={classess.controls}>
          <div className={classess.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>

          <div className={classess.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              id="name"
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
        </div>

        <div className={classess.control}>
          <label htmlFor="message"> Your message</label>
          <textarea
            name="message"
            id="message"
            rows={5}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          ></textarea>
        </div>

        <div className={classess.actions}>
          <button type="submit">Submit</button>
        </div>
      </form>
      {notificationData && (
        <Notification
          status={notificationData.status}
          title={notificationData.title}
          message={notificationData.message}
        />
      )}
    </section>
  );
};

export default ContactForm;
