import { GetStaticPropsContext } from "next";
import React, { FC, Fragment, useState } from "react";
import { buildFeedbackPath, extractFeedback } from "../api/feedback";

export type FeedbackPageProps = {
  feedback: any;
};
const FeedbackPage: FC<FeedbackPageProps> = (props) => {
  const { feedback } = props;
  const [text, setText] = useState<any>();
  const loadFeedbackHandler = async (id: string) => {
    fetch(`/api/${id}`)
      .then((res) => res.json())
      .then((data) => setText(data.feedback));
  };
  return (
    <Fragment>
      {text && <p>{text?.email}</p>}
      <ul>
        {feedback.map((data: any) => (
          <li key={data.id}>
            {data.feedback}
            <button onClick={loadFeedbackHandler.bind(null, data.id)}>
              Show
            </button>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export async function getStaticProps(context: GetStaticPropsContext) {
  const filePath = buildFeedbackPath();
  const data = extractFeedback(filePath);

  return {
    props: {
      feedback: data,
    },
  };
}
export default FeedbackPage;
