import React from "react";
import Web from "../images/web.jpg";
import Graphic from "../images/graphic.jpg";
import Editing from "../images/editing.jpg";
import Markting from "../images/markting.jpg";

const Categories = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center mt-4 ">
        <h1 className="font-semibold text-[#06BBCC] p-2 text-2xl">
          CATEGORIES
        </h1>
        <p className="font-semibold text-2xl">Course Categories</p>
      </div>
      <div className="mx-5 border-b-2 pt-12 pb-16">
        <div className="pb-4 cursor-pointer">
          <div className="relative overflow-hidden ">
            <div
              style={{ backgroundImage: `url(${Web})` }}
              className="relative bg-cover bg-center h-36 w-full  hover:scale-105 duration-300"
            ></div>
            <div className=" absolute inset-15 bottom-[2px] right-[2px] text-center text-xl bg-white p-2">
              <h1>Web Designing</h1>
              <p className="text-[#06BBCC]">49 Courses</p>
            </div>
          </div>
        </div>
        <div className="pb-4 cursor-pointer">
          <div className="relative overflow-hidden">
            <div
              style={{ backgroundImage: `url(${Graphic})` }}
              className=" bg-cover bg-center h-52 w-full hover:scale-105 duration-300"
            ></div>
            <div className=" absolute inset-15 bottom-[2px] right-[2px] text-center text-xl bg-white p-2">
              <h1>Graphic Designing</h1>
              <p className="text-[#06BBCC]">49 Courses</p>
            </div>
          </div>
        </div>
        <div className="pb-4 cursor-pointer">
          <div className="relative overflow-hidden">
            <div
              style={{ backgroundImage: `url(${Editing})` }}
              className=" bg-cover bg-center h-52 w-full hover:scale-105 duration-300"
            ></div>
            <div className=" absolute inset-15 bottom-[2px] right-[2px] text-center text-xl bg-white p-2">
              <h1>Video Editing</h1>
              <p className="text-[#06BBCC]">49 Courses</p>
            </div>
          </div>
        </div>
        <div className="pb-4 cursor-pointer">
          <div className="relative overflow-hidden">
            <div
              style={{ backgroundImage: `url(${Markting})` }}
              className=" bg-cover bg-center h-96 w-full hover:scale-105 duration-300"
            ></div>
            <div className=" absolute inset-15 bottom-[2px] right-[2px] text-center text-xl bg-white p-2">
              <h1>Online Marketing</h1>
              <p className="text-[#06BBCC]">49 Courses</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
