import React from "react";

const ForgotPassword = () => {
  return (
    <div className=" mb-28 flex justify-center items-center pb-10">
      <form className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm mx-auto border py-10 px-5 my-5">
        <h1 className="text-2xl font-bold text-center pb-5">
          Reset Your Password
        </h1>

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
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
