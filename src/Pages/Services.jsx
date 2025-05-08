import React from "react";
import { Helmet } from "react-helmet-async";

const Services = () => {
  return (
    <div className="bg-base-200 my-16">
      <Helmet>
        <title>EventNest | Service</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center pt-10">What We Do</h1>
      <p className="text-center px-5 py-3 md:px-52 ">
        Explore our core services designed to make event discovery, attendance,
        and engagement seamless and exciting—for both attendees and organizers.
      </p>
      <div className="p-5 md:p-10 ">
        <h1 className="text-2xl font-bold">Event Discovery</h1>
        <p>
          Find events that match your interests in seconds. <br /> Whether
          you're into tech conferences, art exhibitions, sports events, or live
          concerts, our platform lets you:
        </p>
        <p className="text-gray-500 pt-5">
          1. Search by location, category, or date. <br />
          2. Filter by event type (online/offline), price (free/paid), or
          popularity. <br />
          3. Save events to your wishlist for later.
        </p>
      </div>
      <div className="p-5 md:p-10 ">
        <h1 className="text-2xl font-bold">For Event Organizers</h1>
        <p>We don't just serve attendees—we empower creators too:</p>
        <p className="text-gray-500 pt-5">
          1. Create and promote your events in minutes. <br />
          2. Manage registrations, attendees, and feedback. <br />
          3. Access analytics for performance and engagement insights.
        </p>
      </div>
    </div>
  );
};

export default Services;
