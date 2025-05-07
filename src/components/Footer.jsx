import React from "react";
import { NavLink } from "react-router";
import fb from "/facebook.jpg";
import tw from "/twitter.jpg";
import ld from "/linkedin.jpg";
import yt from "/youtube.png";
const Footer = () => {
  return (
    <footer className="flex flex-col justify-center items-center gap-5 bg-base-200 text-base-content rounded p-10">
      <nav>
        <ul className="grid grid-flow-col gap-4 text-[18px]">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/my-profile">My Profile</NavLink>
          </li>
          <li>
            <NavLink to="/services">Services</NavLink>
          </li>
        </ul>
      </nav>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <a href="https://facebook.com/" target="_blank">
            <img className="w-9 rounded-full" src={fb} alt="" />
          </a>
          <a href="https://linkedin.com/" target="_blank">
            <img className="w-9 rounded-full" src={ld} alt="" />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <img className="w-9 rounded-full" src={tw} alt="" />
          </a>
          <a href="https://youtube.com/" target="_blank">
            <img className="w-9 rounded-full" src={yt} alt="" />
          </a>
        </div>
      </nav>
      <div className="flex flex-col md:flex-row justify-center items-center gap-5">
        <NavLink to="/terms"> Terms and Conditions</NavLink>
        <NavLink to="/privacy">Privacy Policy</NavLink>
      </div>
      <aside>
        <p className="text-center">
          Copyright © {new Date().getFullYear()} - All right reserved by
          EventNest Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
