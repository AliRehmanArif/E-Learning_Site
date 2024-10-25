import React from "react";
import AboutPic from "../images/about.jpg";
import { IoArrowForwardOutline } from "react-icons/io5";

const About = () => {
  return (
    <div>
      <div className="border-b md:flex py-16 mx-5 lg:mx-72 md:mx-11">
        <div className="flex-1 mb-8">
          <img src={AboutPic} alt="about " className="w-[600px] h-[450px]" />
        </div>
        <div className="flex-1 ">
          <h1 className="text-[#06BBCC] pb-2 font-semibold">ABOUT US</h1>
          <p className="font-bold text-3xl md:text-5xl pb-4">Welcome to E-Learning</p>
          <p className="py-3">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta
            fugiat rem assumenda, suscipit rerum quibusdam nulla natus illum
            corrupti inventore!
          </p>
          <p className="py-3">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil,
            modi quas! Magni, inventore! Quae a provident nisi ipsam
            reprehenderit labore, ducimus illum itaque libero et soluta odit
            officia non. Quas.
          </p>
          <div className="grid md:grid-cols-2 ">
            <div className="flex space-x-2 py-1">
              <IoArrowForwardOutline className="m-1 text-[#06BBCC] text-xl" />
              <p>Skilled Instructors</p>
            </div>
            <div className="flex space-x-2 py-1 ">
              <IoArrowForwardOutline className="m-1 text-[#06BBCC] text-xl " />
              <p>Skilled Instructors</p>
            </div>
            <div className="flex space-x-2 py-1 ">
              <IoArrowForwardOutline className="m-1 text-[#06BBCC] text-xl" />
              <p>International Certificate</p>
            </div>
            <div className="flex space-x-2 py-1 ">
              <IoArrowForwardOutline className="m-1 text-[#06BBCC] text-xl" />
              <p>Skilled Instructors</p>
            </div>
            <div className="flex space-x-2 py-1 ">
              <IoArrowForwardOutline className="m-1 text-[#06BBCC] text-xl" />
              <p>Online Classes</p>
            </div>
            <div className="flex space-x-2 py-1 ">
              <IoArrowForwardOutline className="m-1 text-[#06BBCC] text-xl" />
              <p>International Certificate</p>
            </div>
            <div className="mt-4">
              <button className="bg-[#06BBCC] px-8 py-4  text-white">
                READ MORE
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
