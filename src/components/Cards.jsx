import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";

const Cards = () => {
  return (
    <div>
      <div className="max-w-[1240px] mx-5 mt-12 grid md:grid-cols-2 md:mx-auto lg:grid-cols-4 gap-8 ">
        <div className="w-full shadow-xl bg-[#f0fbfc] flex flex-col  hover:bg-[#06BBCC] rounded-lg hover:text-white hover:scale-105 duration-300">
          <FaGraduationCap className="text-6xl text-[#06BBCC] my-4 mx-auto hover:text-white" />
          <h2 className="text-2xl font-bold text-center py-2">
            Skilled Instructor
          </h2>
          <p className="text-center m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            similique quasi.
          </p>
        </div>
        <div className="w-full shadow-xl bg-[#f0fbfc] flex flex-col  hover:bg-[#06BBCC] rounded-lg hover:text-white hover:scale-105 duration-300">
          <FaGlobe className="text-6xl text-[#06BBCC] my-4 mx-auto hover:text-white" />
          <h2 className="text-2xl font-bold text-center py-2">
            Online Classes
          </h2>
          <p className="text-center m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            similique quasi.
          </p>
        </div>
        <div className="w-full shadow-xl bg-[#f0fbfc] flex flex-col  hover:bg-[#06BBCC] rounded-lg hover:text-white hover:scale-105 duration-300">
          <FaHome className="text-6xl text-[#06BBCC] my-4 mx-auto hover:text-white" />
          <h2 className="text-2xl font-bold text-center py-2">Home Projects</h2>
          <p className="text-center m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            similique quasi.
          </p>
        </div>
        <div className="w-full shadow-xl bg-[#f0fbfc] flex flex-col hover:bg-[#06BBCC] rounded-lg hover:text-white hover:scale-105 duration-300">
          <FaBookOpen className="text-6xl text-[#06BBCC] my-4 mx-auto hover:text-white" />
          <h2 className="text-2xl font-bold text-center py-2">Book Library</h2>
          <p className="text-center m-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel,
            similique quasi.
          </p>
        </div>
      </div>
      
    </div>
  );
};

export default Cards;
