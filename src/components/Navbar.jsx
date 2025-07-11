import React, { use } from "react";
import { Link, NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Log Out successful.",
          icon: "success",
        });
      })
      .catch((error) => {
        Swal.fire({
          title: `${error}`,

          icon: "error",
        });
      });
  };

  return (
    <div className="navbar bg-base-100 px-0 py-5 ">
      <div className="flex-1">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost md:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-24 p-2 shadow"
          >
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/my-profile">My Profile</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            {user ? (
              <Link>
                <li>
                  <button onClick={handleLogout}>Logout</button>
                </li>
              </Link>
            ) : (
              <NavLink to="/login">
                <li>
                  <button>Login</button>
                </li>
              </NavLink>
            )}
          </ul>
        </div>
        <a className="text-3xl font-bold">EventNest</a>
      </div>
      <div className="flex justify-center items-center gap-5">
        <ul className="text-[18px] hidden md:flex justify-center items-center gap-5">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/my-profile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>

          {user ? (
            <Link>
              <button className="btn" onClick={handleLogout}>
                Logout
              </button>
            </Link>
          ) : (
            <NavLink to="/login">
              <button className="btn">Login</button>
            </NavLink>
          )}
        </ul>

        <div className="w-10 rounded-full">
          {user ? (
            <img
              className="rounded-full w-10 h-10 bg-red-500"
              alt={user.displayName}
              title={user.displayName}
              src={user.photoURL}
            />
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
