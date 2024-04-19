import { useState, useEffect } from "react";
import { getFunction } from "../../services/events/events";

const ShowEvents = ({
  payload,
  updatedCount,
  showCreateUpdateForm,
  initFormData,
}) => {
  const [events, setEvents] = useState(null);
  console.log("events", events);
  useEffect(() => {
    getFunction().then((events) => setEvents(events));
  }, [updatedCount]);

  const initCreateUpdate = (id) => {
    if (id === undefined) {
      payload.current.operation = "ADD";
      payload.current.data = {};
      showCreateUpdateForm();
    } else {
      payload.current.operation = "UPDATE";
      payload.current.data = {
        eventId: id,
      };

      const eventObj = events?.find(
        (event) => event.eventId === payload.current.data.eventId
      );
      payload.current.data = eventObj;
      initFormData();
      showCreateUpdateForm();
    }
  };

  return (
    <>
      <button onClick={() => initCreateUpdate()}>Add Events</button>
      {events?.map((event) => {
        return (
          <>
            <h1>{event.eventName}</h1>
            <h2>{event.Duration}</h2>
            <h3>{event.Price}</h3>
            <button onClick={() => initCreateUpdate(event.eventId)}>
              Edit
            </button>
          </>
        );
      })}
    </>
  );
};

export default ShowEvents;
