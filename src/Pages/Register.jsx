import React, { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Register successful.",
          text: `${name} registered successfully on EventNest.`,
          icon: "success",
        });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          title: `${errorCode}`,
          text: `${errorMessage} `,
          icon: "error",
        });
      });
  };

  return (
    <div>
      <form
        onSubmit={handleRegister}
        className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm mx-auto border py-10 px-5 my-5"
      >
        <h1 className="text-2xl font-bold text-center pb-5">Please Register</h1>
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
          name="photo"
          className="input w-full"
          placeholder="Photo URL"
          required
        />
        <label className="label text-[16px] text-black">Email</label>
        <input
          type="email"
          name="email"
          className="input w-full"
          placeholder="Email"
          required
        />

        <label className="label text-[16px] text-black">Password</label>
        <input
          type="password"
          name="password"
          className="input w-full"
          placeholder="Password"
          required
        />

        <button
          type="submit"
          className="w-full px-8 py-3 mt-5 font-semibold rounded-md border text-[16px]"
        >
          Register
        </button>
        <p className="text-[16px]">
          Already have an account?{" "}
          <Link className="text-indigo-400" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
