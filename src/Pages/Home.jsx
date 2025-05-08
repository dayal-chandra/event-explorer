import React from "react";
import Slider from "../components/Slider";
import Events from "../components/Events";
import Reviews from "../components/Reviews";
import Newsletter from "../components/Newsletter";

const Home = () => {
  return (
    <div>
      <Slider></Slider>
      <Events></Events>
      <Reviews></Reviews>
      <Newsletter></Newsletter>
    </div>
  );
};

export default Home;
