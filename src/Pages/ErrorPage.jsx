import React from "react";
import { Link } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-5 h-screen">
      <h1 className="text-5xl font-bold text-center">
        <span className="text-red-500">404</span> <br /> Page not found.
      </h1>
      <Link to="/" className="btn bg-green-500 text-white">
        Go to Home
      </Link>
    </div>
  );
};

export default ErrorPage;
