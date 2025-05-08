import React, { useState } from "react";
import Swal from "sweetalert2";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const handleSubscribe = (e) => {
    e.preventDefault();

    Swal.fire({
      title: "Subscription Added.",
      text: `${email} Subscription Added successfully on EventNest.`,
      icon: "success",
    });

    setEmail("");
  };

  return (
    <div className="bg-base-200 my-20 py-20 px-5 md:px-0">
      <h1 className="text-4xl text-center font-bold pb-4">
        Subscribe Newsletter
      </h1>
      <p className="text-center md:px-40">
        Don't miss out on the latest events happening around you. Subscribe to
        our newsletter and get handpicked recommendations, exclusive updates,
        and early access to trending events—delivered straight to your inbox.
      </p>

      <form
        onSubmit={handleSubscribe}
        className="flex flex-col md:flex-row justify-center items-center gap-5 mt-16"
      >
        <input
          className="py-3 px-6 border outline-none rounded-full bg-base-100 md:w-1/3"
          type="email"
          name="email"
          value={email}
          placeholder="Enter Your Email"
          required
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <button
          type="submit"
          className="py-3 px-6 border rounded-full bg-indigo-500 text-white"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Newsletter;
