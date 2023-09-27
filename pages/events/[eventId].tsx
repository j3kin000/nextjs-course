import EventContent from "@/components/event-detail/event-content";
import EventLogistics from "@/components/event-detail/event-logistics";
import EventSummary from "@/components/event-detail/event-summary";
import { getEventById } from "@/events/dumy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";
export default () => {
  const router = useRouter();
  const eventId = router.query.eventId;
  let event;
  if (eventId && !Array.isArray(eventId)) {
    event = getEventById(eventId);
  }
  if (!event) {
    return <p>No event found!</p>;
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        imageAlt={event.title}
        date={event.date}
        image={event.image}
        address={event.location}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
};
