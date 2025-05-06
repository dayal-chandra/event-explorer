import React from "react";
import { Link } from "react-router";

const EventCard = ({ singleEvent }) => {
  const { id, name, thumbnail, category, date, location, entry_fee } =
    singleEvent;
  return (
    <div>
      <div className="card bg-base-100 shadow-sm p-5 rounded-2xl">
        <figure className="h-60 rounded-2xl">
          <img src={thumbnail} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-[20px]">{name}</h2>
          <div className="text-[18px] text-gray-500">
            <p>
              <span className="text-black">Category:</span> {category}
            </p>
            <p>
              <span className="text-black">Date:</span> {date}
            </p>
            <p>
              {" "}
              <span className="text-black">Location:</span> {location}
            </p>
            <p>
              {" "}
              <span className="text-black">Entry Fee:</span> {entry_fee}
            </p>
          </div>

          <div className="card-actions justify-end">
            <Link to={`/event-details/${id}`} className="btn btn-primary">
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
