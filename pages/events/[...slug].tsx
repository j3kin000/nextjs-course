import EventList from "@/components/events/event-list";
import ResultsTitle from "@/components/events/results-title";
import Button from "@/components/ui/button";
import ErrorAlert from "@/components/ui/error-alert";
import { getFilteredEvents } from "@/events/dumy-data";
import { useRouter } from "next/router";
import { Fragment } from "react";

export default () => {
  const router = useRouter();
  const filterData = router.query.slug;

  if (!filterData) {
    return <p className={"center"}>Loading...</p>;
  }
  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numYear < 2021 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className={"center"}>Invalid Filter...</p>
        </ErrorAlert>
        <Button link="/events">
          <span>Show All Event</span>
        </Button>
      </Fragment>
    );
  }
  const filteredEvents = getFilteredEvents({ year: numYear, month: numMonth });

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p className={"center"}>No Event Founds on Filters...</p>
        </ErrorAlert>
        <Button link="/events">
          <span>Show All Event</span>
        </Button>
      </Fragment>
    );
  }
  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList events={filteredEvents} />
    </Fragment>
  );
};
