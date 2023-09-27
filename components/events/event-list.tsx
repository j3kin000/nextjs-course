import { DUMMY_EVENTS_TYPE } from "@/events/dumy-data";
import { FC } from "react";
import EventItem from "./event-item";
import classes from "./event-list.module.css";
export type EventListType = {
  events: DUMMY_EVENTS_TYPE[];
};
const EventList: FC<EventListType> = ({ events }) => {
  return (
    <ul className={classes.list}>
      {events.map((event) => (
        <EventItem key={event.id} event={event} />
      ))}
    </ul>
  );
};

export default EventList;
