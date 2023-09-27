import EventList from "@/components/events/event-list";
import { getFeaturedEvents } from "@/events/dumy-data";

export default () => {
  const featuredEvents = getFeaturedEvents();
  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  );
};
