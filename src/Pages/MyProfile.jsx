import React, { use } from "react";
import { Helmet } from "react-helmet-async";
import { AuthContext } from "../Provider/AuthProvider";

const MyProfile = () => {
  const { user } = use(AuthContext);
  return (
    <div>
      <Helmet>
        <title>EventNest | MyProfile</title>
      </Helmet>
      <h1 className="text-4xl font-bold text-center pt-10 pb-5">
        My information
      </h1>
      <div className="w-1/2 mx-auto border bg-base-200 rounded-2xl p-10">
        <p>
          <span className="font-bold">Name:</span> {user.displayName}
        </p>
        <p>
          <span className="font-bold">Email:</span> {user.email}
        </p>
        <p>
          <span className="font-bold">Photo URL:</span> {user.photoURL}
        </p>
      </div>

      <div className=" mb-28 flex justify-center items-center pb-10">
        <form className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm mx-auto border py-10 px-5 my-5">
          <h1 className="text-2xl font-bold text-center pb-5">
            Customize Your Info
          </h1>
          <label className="label text-[16px] text-black">Name</label>
          <input
            type="text"
            name="name"
            className="input w-full"
            placeholder="Your Name"
            required
          />

          <label className="label text-[16px] text-black">Photo URL</label>
          <input
            type="text"
            className="input w-full"
            placeholder="Photo URL"
            required
          />

          <button
            type="submit"
            className="w-full px-8 py-3 mt-5 font-semibold rounded-md border text-[16px]"
          >
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default MyProfile;
