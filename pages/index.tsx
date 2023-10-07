import { FormEvent, Fragment, useRef, useState } from "react";

export default () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const feedbackRef = useRef<HTMLTextAreaElement>(null);
  const [feedback, setFeedback] = useState([]);
  function submitHandler(event: FormEvent) {
    event.preventDefault();
    const email = emailRef?.current?.value;
    const feedback = feedbackRef?.current?.value;
    const reqBody = {
      email: email,
      feedback: feedback,
    };
    fetch("/api/feedback", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(reqBody),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }

  function loadFeedbackHandler() {
    fetch("/api/feedback", {
      method: "GET",
      headers: {
        "Content-type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data", data);
        setFeedback(data.feedback);
      });
  }
  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" ref={emailRef} />
        </div>
        <div>
          <label htmlFor="feedback">Your Feedback</label>
          <textarea name="feedback" id="" rows={5} ref={feedbackRef}></textarea>
        </div>
        <button type="submit">send feedback</button>
      </form>
      <hr />
      <button onClick={loadFeedbackHandler}>load feedback</button>
      {feedback.length !== 1 &&
        feedback.map((data: any) => (
          <Fragment>
            <div>
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" value={data.email} />
            </div>
            <div>
              <label htmlFor="feedback">Your Feedback</label>
              <textarea
                name="feedback"
                id=""
                rows={5}
                value={data.feedback}
              ></textarea>
            </div>
          </Fragment>
        ))}
    </div>
  );
};
