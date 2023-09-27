import { FC } from "react";
import classes from "./event-summary.module.css";

export type EventSummaryType = {
  title: string;
};
const EventSummary: FC<EventSummaryType> = ({ title }) => {
  return (
    <section className={classes.summary}>
      <h1>{title}</h1>
    </section>
  );
};

export default EventSummary;
