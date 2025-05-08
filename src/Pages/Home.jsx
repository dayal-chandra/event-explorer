import React from "react";
import Slider from "../components/Slider";
import Events from "../components/Events";
import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>EventNest | Home</title>
      </Helmet>
      <Slider></Slider>
      <Events></Events>
      <Reviews></Reviews>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
