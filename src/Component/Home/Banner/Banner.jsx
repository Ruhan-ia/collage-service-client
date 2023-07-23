import React from "react";
import bg from "../../../assets/images/banner.jpg";

const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${bg})`,

        backgroundSize: "cover",
        height: "700px",
      }}
    >
      <div>
        
        <h2 className="font-bold text-6xl pt-20 text-white text-center">
          Find Your Destination
        </h2>
      </div>
      <div className="text-center pt-64 ">
        <input
          type="text"
          placeholder="Search here"
          className="  input input-bordered w-full max-w-xs"
        />
      </div>
    </div>
  );
};

export default Banner;
