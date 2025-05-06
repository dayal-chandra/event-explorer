import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const EventDetails = () => {
  const { events } = use(AuthContext);
  const { id } = useParams();
  const singleEvent = events.find((eve) => eve.id === parseInt(id));

  if (!singleEvent) {
    return (
      <div className="text-center mt-10">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  const {
    eventName,
    thumbnail,
    category,
    date,
    location,
    entry_fee,
    description,
  } = singleEvent;

  const handleAlert = (e) => {
    e.preventDefault();
    const name = e.target.name.value;

    Swal.fire({
      title: "Reservation Succeeded",
      text: `${name} reserved a seat for ${eventName} `,
      icon: "success",
    });
  };

  return (
    <div>
      <div className="hero bg-base-200 h-full md:py-36">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src={thumbnail}
            className="w-full md:max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">{eventName}</h1>
            <p className="py-2">{description}</p>
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
          </div>
        </div>
      </div>

      <div className="bg-base-200 mb-28 flex justify-center items-center pb-10">
        <form
          onSubmit={handleAlert}
          className="fieldset bg-green-100 border-base-300 rounded-box w-xs border p-10"
        >
          <h1 className="text-[20px] font-bold">Reserve a seat</h1>

          <label className="label">Name</label>
          <input
            type="text"
            className="input"
            name="name"
            placeholder="Your Name"
            required
          />

          <label className="label">Email</label>
          <input
            type="email"
            className="input"
            placeholder="Your Email"
            required
          />

          <button type="submit" className="btn btn-primary shadow-none mt-4:">
            Reserve seat
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetails;
