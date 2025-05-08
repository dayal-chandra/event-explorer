import React from "react";
import reviewa from "/review-1.jpg";
import reviewb from "/review-2.jpg";
import reviewc from "/review-3.png";
import { FaStar } from "react-icons/fa";

const Reviews = () => {
  return (
    <div className="my-10 md:px-5">
      <h1 className="text-4xl font-bold text-center pt-5">
        What our client says
      </h1>
      <p className="text-center pt-2">
        Thousands of happy clients and their honest reviews.
      </p>
      <div className="review-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center items-center gap-5 py-20">
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img
              className="w-full h-[280px] object-cover"
              src={reviewa}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Ana De Armas</h2>
            <p>
              Incredible service by EventNest. I have attended three of tech
              events. It was very exciting and enjoyable.
            </p>
            <div className="flex items-center gap-1">
              <div className="flex gap-1 text-yellow-400">
                <FaStar size={20} />
                <FaStar size={20} />
                <FaStar size={20} />
                <FaStar size={20} />
                <FaStar size={20} />
              </div>
              <p className="text-[16px]">(5.0)</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100  shadow-sm">
          <figure>
            <img
              className="w-full h-[280px] object-cover"
              src={reviewb}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Jhankar Mahbub</h2>
            <p>
              Incredible service by EventNest. I have attended three of tech
              events. It was very exciting and enjoyable.
            </p>
            <div className="flex items-center gap-1">
              <div className="flex gap-1 text-yellow-400">
                <FaStar size={20} />
                <FaStar size={20} />
                <FaStar size={20} />
                <FaStar size={20} />
                <FaStar size={20} />
              </div>
              <p className="text-[16px]">(5.0)</p>
            </div>
          </div>
        </div>
        <div className="card bg-base-100 shadow-sm">
          <figure>
            <img
              className="w-full h-[280px] object-cover"
              src={reviewc}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Farzana Sithi</h2>
            <p>
              Incredible service by EventNest. I have attended three of tech
              events. It was very exciting and enjoyable.
            </p>
            <div className="flex items-center gap-1">
              <div className="flex gap-1 text-yellow-400">
                <FaStar size={20} />
                <FaStar size={20} />
                <FaStar size={20} />
                <FaStar size={20} />
                <FaStar size={20} />
              </div>
              <p className="text-[16px]">(5.0)</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
