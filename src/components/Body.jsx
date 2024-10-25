import React from "react";
import Student from "../images/student.jpg";

const Body = () => {
  return (
    <div
      style={{ backgroundImage: `url(${Student})` }}
      className="relative bg-cover bg-center h-96 w-full "
    >
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <div className="relative h-full mx-5 py-10">
        <h1 className="text-[#06BBCC] text-2xl font-bold pb-4">
          Best Online Courses
        </h1>
        <p className="text-white font-serif font-semibold text-4xl pb-4">
          Get Educated Online From Your Home
        </p>
        <p className="text-white pb-4">
          Vero elitr justo clita lorem. Ipsum dolor at sed stet sit diam no.
          Kasd rebum ipsum et diam justo clita et kasd rebum sea sanctus eirmod
          elitr.
        </p>
        <div className="flex justify-between">
          <button className="p-2 text-white bg-[#06BBCC] hover:cursor-pointer hover:bg-[#06bbcce0] hover:scale-105 duration-300">READ MORE</button>
          <button className="p-2 text-black bg-white hover:cursor-pointer hover:bg-[#b3b3b3fa] hover:scale-105 duration-300">JOIN NOW</button>
        </div>
      </div>
    </div>
  );
};

export default Body;
