import { use } from "react";
import EventCard from "./EventCard";
import { AuthContext } from "../Provider/AuthProvider";

const Events = () => {
  const { events } = use(AuthContext);
  return (
    <div className="py-20">
      <h1 className="text-center text-4xl font-bold">Upcoming Events</h1>
      <p className="text-center pt-5 pb-10">
        In these upcoming events let's connect together. To know more visit view
        more section.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {events.map((singleEvent) => (
          <EventCard key={singleEvent.id} singleEvent={singleEvent}></EventCard>
        ))}
      </div>
    </div>
  );
};

export default Events;
