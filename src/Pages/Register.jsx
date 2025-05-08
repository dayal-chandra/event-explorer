import React, { use } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet-async";

const Register = () => {
  const { createUser, setUser } = use(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

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
        navigate(`${location.state ? location.state : "/"}`);
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
      <Helmet>
        <title>EventNest | Register</title>
      </Helmet>

      <form
        onSubmit={handleRegister}
        className="fieldset bg-base-200 border-base-300 rounded-box w-full max-w-sm mx-auto border py-10 px-5 my-5"
      >
        <h1 className="text-2xl font-bold text-center pb-5">Please Register</h1>

        <button
          aria-label="Login with Google"
          type="button"
          className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-5 h-5 fill-current"
          >
            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
          </svg>
          <p className="text-[16px]">Register with Google</p>
        </button>

        <div className="flex items-center w-full my-4">
          <hr className="w-full dark:text-gray-600" />
          <p className="px-3 dark:text-gray-600">OR</p>
          <hr className="w-full dark:text-gray-600" />
        </div>
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
