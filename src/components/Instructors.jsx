import React from "react";
import Team1 from "../images/team-1.jpg";
import Team2 from "../images/team-2.jpg";
import Team3 from "../images/team-3.jpg";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Instructors = () => {
  return (
    <div className="mx-5 py-6">
      <div className="flex flex-col items-center pb-12 ">
        <h1 className="text-xl font-bold text-[#06BBCC] pb-1">
          Instructors
        </h1>
        <p className="text-2xl">Expert Instructors</p>
      </div>
      <div className="mb-6">
        <div className="relative overflow-hidden cursor-pointer">
          <div
            style={{ backgroundImage: `url(${Team1})` }}
            className="bg-cover bg-center h-72 w-full hover:scale-105 duration-300"
          ></div>
          <div className="flex justify-between items-center absolute bottom-[-12px] left-0 right-0 px-12 py-4 bg-opacity-60 bg-white">
            <button className="relative flex items-center justify-center">
              <span className="absolute w-5 h-8 bg-white rounded-full"></span>
              <FaFacebookSquare className="text-4xl text-[#06BBCC] relative z-10" />
            </button>
            <button className="relative flex items-center justify-center">
              <span className="absolute w-5 h-7 bg-white rounded-full"></span>
              <FaTwitterSquare className="text-4xl text-[#06BBCC] relative z-10" />
            </button>
            <button className="relative flex items-center justify-center">
              <span className="absolute w-6 h-6 bg-white rounded-full"></span>
              <RiInstagramFill className="text-4xl text-[#06BBCC] relative z-10" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#f0fbfc] shadow-xl ">
          <h1 className="font-semibold mt-6 text-2xl">Instructor Name</h1>
          <p className="font-serif text-[#000000af] mt-2 mb-6">Designation</p>
        </div>
      </div>
      <div className="mb-6">
        <div className="relative overflow-hidden cursor-pointer">
          <div
            style={{ backgroundImage: `url(${Team2})` }}
            className="bg-cover bg-center h-72 w-full hover:scale-105 duration-300"
          ></div>
          <div className="flex justify-between items-center absolute bottom-[-12px] left-0 right-0 px-12 py-4 bg-opacity-60 bg-white">
            <button className="relative flex items-center justify-center">
              <span className="absolute w-5 h-8 bg-white rounded-full"></span>
              <FaFacebookSquare className="text-4xl text-[#06BBCC] relative z-10" />
            </button>
            <button className="relative flex items-center justify-center">
              <span className="absolute w-5 h-7 bg-white rounded-full"></span>
              <FaTwitterSquare className="text-4xl text-[#06BBCC] relative z-10" />
            </button>
            <button className="relative flex items-center justify-center">
              <span className="absolute w-6 h-6 bg-white rounded-full"></span>
              <RiInstagramFill className="text-4xl text-[#06BBCC] relative z-10" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#f0fbfc] shadow-xl ">
          <h1 className="font-semibold mt-6 text-2xl">Instructor Name</h1>
          <p className="font-serif text-[#000000af] mt-2 mb-6">Designation</p>
        </div>
      </div>
      <div className="mb-6">
        <div className="relative overflow-hidden cursor-pointer">
          <div
            style={{ backgroundImage: `url(${Team3})` }}
            className="bg-cover bg-center h-72 w-full hover:scale-105 duration-300"
          ></div>
          <div className="flex justify-between items-center absolute bottom-[-12px] left-0 right-0 px-12 py-4 bg-opacity-60 bg-white">
            <button className="relative flex items-center justify-center">
              <span className="absolute w-5 h-8 bg-white rounded-full"></span>
              <FaFacebookSquare className="text-4xl text-[#06BBCC] relative z-10" />
            </button>
            <button className="relative flex items-center justify-center">
              <span className="absolute w-5 h-7 bg-white rounded-full"></span>
              <FaTwitterSquare className="text-4xl text-[#06BBCC] relative z-10" />
            </button>
            <button className="relative flex items-center justify-center">
              <span className="absolute w-6 h-6 bg-white rounded-full"></span>
              <RiInstagramFill className="text-4xl text-[#06BBCC] relative z-10" />
            </button>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center bg-[#f0fbfc] shadow-xl ">
          <h1 className="font-semibold mt-6 text-2xl">Instructor Name</h1>
          <p className="font-serif text-[#000000af] mt-2 mb-6">Designation</p>
        </div>
      </div>
    </div>
  );
};

export default Instructors;
