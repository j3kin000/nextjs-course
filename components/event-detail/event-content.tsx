import { FC, ReactNode } from "react";
import classes from "./event-content.module.css";

export type EventContentType = {
  children: ReactNode;
};
const EventContent: FC<EventContentType> = ({ children }) => {
  return <section className={classes.content}>{children}</section>;
};

export default EventContent;
