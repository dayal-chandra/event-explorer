import React, { use } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useParams } from "react-router";
import Swal from "sweetalert2";

const EventDetails = () => {
  const { events } = use(AuthContext);
  const { id } = useParams();
  const singleEvent = events.find((eve) => eve.id === parseInt(id));

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

      <div className=" mb-28 flex justify-center items-center pb-10">
        <form
          onSubmit={handleAlert}
          className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm mx-auto border py-10 px-5 my-5"
        >
          <h1 className="text-2xl font-bold text-center pb-5">
            Reserve a Seat
          </h1>
          <label className="label text-[16px] text-black">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Your Name"
            required
          />

          <label className="label text-[16px] text-black">Email</label>
          <input
            type="email"
            className="input w-full"
            placeholder="Email"
            required
          />

          <button
            type="submit"
            className="w-full px-8 py-3 mt-5 font-semibold rounded-md border text-[16px]"
          >
            Reserve Seat
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventDetails;
