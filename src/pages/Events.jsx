import { useEffect, useState } from "react";
import { getFunction } from "../services/events/events";

const filterEvents = (events, searchObj) => {
  console.log("Inside Use Effect 2 - Filtering");

  console.log("so", searchObj);
  return events.filter((event) => {
    if (
      !searchObj ||
      ((!searchObj.genre || event.Genres === searchObj.genre) &&
        (!searchObj.language || event.Language.includes(searchObj.language)))
    )
      return true;
    return false;
  });
};

const Events = ({ searchObj, listUpdatedCount }) => {
  const [events, setEvents] = useState(null);
  const [filteredEvents, setFilteredEvents] = useState(null);
  console.log("Inside Events Component 1");

  useEffect(() => {
    console.log("Inside Use Effect 1 - 1");

    getFunction().then((events) => {
      console.log("Inside Use Effect 1 - get Promise");
      setEvents(events);
    });
    console.log("Inside Use Effect 1 - 2");
  }, [listUpdatedCount]);

  //console.log("list", events);

  useEffect(() => {
    //console.log("render");
    console.log("Inside Use Effect 2 - 1");
    if (searchObj && events) {
      let filteredEvents = filterEvents(events, searchObj);
      // console.log(searchObj);
      console.log("fl", filteredEvents);
      setFilteredEvents(filteredEvents);
    }
    console.log("Inside Use Effect 2 - 2");
  }, [events, searchObj]);

  console.log("Inside Events Component 2");

  return (
    <>
      {filteredEvents &&
        filteredEvents.map((event, index) => (
          <Event key={event.eventId} event={event} index={index} />
        ))}
    </>
  );
};

const Event = ({ event, index }) => {
  return (
    <>
      <h1>{event.eventName}</h1>
      <img src={event.eventPoster} alt="Event poster" />
      <h3>{event.Genre}</h3>
    </>
  );
};

export default Events;
