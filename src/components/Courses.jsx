import React from "react";
import Course1 from "../images/course1.jpg";
import Course2 from "../images/course2.jpg";
import Course3 from "../images/course3.jpg";
import { IoIosStar } from "react-icons/io";
import { IoPersonSharp } from "react-icons/io5";
import { FaUserTie } from "react-icons/fa";
import { MdWatchLater } from "react-icons/md";

const Courses = () => {
  return (
    <div className="mx-5 py-6 border-b-2 pt-12 pb-16">
      <div className="flex flex-col items-center pb-12">
        <h1 className="text-xl font-bold text-[#06BBCC] pb-1">COURSES</h1>
        <p className="text-2xl">Popular Courses</p>
      </div>
      <div className="mb-6 ">
        <div className="relative overflow-hidden">
          <div
            style={{ backgroundImage: `url(${Course1})` }}
            className="bg-cover bg-center h-52 w-full hover:scale-105 duration-300"
          ></div>
          <div className="flex justify-center items-center absolute bottom-6 left-0 right-0">
            <button className="text-white bg-[#06BBCC] rounded-l-3xl p-2 mr-[1px]">
              Read More
            </button>
            <button className="text-white bg-[#06BBCC] rounded-r-3xl p-2">
              Join Now
            </button>
          </div>
        </div>
        <div className="bg-[#f0fbfc] flex flex-col justify-center items-center shadow-xl">
          <h1 className="mt-6 text-xl font-bold">$149.00</h1>
          <div className="flex justify-center items-center space-x-[5px] text-[#06BBCC] mb-4">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <p className="text-[#0000008f]">(123)</p>
          </div>
          <p className="font-bold mx-4 text-[17px] items-center font-serif">
            Web Design & Development
          </p>
          <p className="font-bold mx-4 text-[17px] items-center font-serif pb-4">
            Course for Beginners
          </p>
          <div className="flex">
            <div className="flex justify-center items-center p-2 pb-4 space-x-1 border-t border-r">
              <FaUserTie className="text-[#06BBCC]" />
              <p className="text-[#0000008f] text-[12px]">By John Doe</p>
            </div>
            <div className="flex justify-center items-center p-2 pb-4 space-x-1 border-t border-r">
              <MdWatchLater className="text-[#06BBCC]" />
              <p className="text-[#0000008f] text-[12px]">1.49 Hrs</p>
            </div>
            <div className="flex justify-center items-center p-2 pb-4 space-x-1 border-t">
              <IoPersonSharp className="text-[#06BBCC]" />
              <p className="text-[#0000008f] text-[12px]">30 Students</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="relative overflow-hidden">
          <div
            style={{ backgroundImage: `url(${Course2})` }}
            className="bg-cover bg-center h-52 w-full hover:scale-105 duration-300"
          ></div>
          <div className="flex justify-center items-center absolute bottom-6 left-0 right-0">
            <button className="text-white bg-[#06BBCC] rounded-l-3xl p-2 mr-[1px]">
              Read More
            </button>
            <button className="text-white bg-[#06BBCC] rounded-r-3xl p-2">
              Join Now
            </button>
          </div>
        </div>
        <div className="bg-[#f0fbfc] flex flex-col justify-center items-center shadow-xl">
          <h1 className="mt-6 text-xl font-bold">$149.00</h1>
          <div className="flex justify-center items-center space-x-[5px] text-[#06BBCC] mb-4">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <p className="text-[#0000008f]">(123)</p>
          </div>
          <p className="font-bold mx-4 text-[17px] items-center font-serif">
            Web Design & Development
          </p>
          <p className="font-bold mx-4 text-[17px] items-center font-serif pb-4">
            Course for Beginners
          </p>
          <div className="flex">
            <div className="flex justify-center items-center p-2 pb-4 space-x-1 border-t border-r">
              <FaUserTie className="text-[#06BBCC]" />
              <p className="text-[#0000008f] text-[12px]">By John Doe</p>
            </div>
            <div className="flex justify-center items-center p-2 pb-4 space-x-1 border-t border-r">
              <MdWatchLater className="text-[#06BBCC]" />
              <p className="text-[#0000008f] text-[12px]">1.49 Hrs</p>
            </div>
            <div className="flex justify-center items-center p-2 pb-4 space-x-1 border-t">
              <IoPersonSharp className="text-[#06BBCC]" />
              <p className="text-[#0000008f] text-[12px]">30 Students</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-6">
        <div className="relative overflow-hidden">
          <div
            style={{ backgroundImage: `url(${Course3})` }}
            className="bg-cover bg-center h-52 w-full hover:scale-105 duration-300"
          ></div>
          <div className="flex justify-center items-center absolute bottom-6 left-0 right-0">
            <button className="text-white bg-[#06BBCC] rounded-l-3xl p-2 mr-[1px]">
              Read More
            </button>
            <button className="text-white bg-[#06BBCC] rounded-r-3xl p-2">
              Join Now
            </button>
          </div>
        </div>
        <div className="bg-[#f0fbfc] flex flex-col justify-center items-center shadow-xl">
          <h1 className="mt-6 text-xl font-bold">$149.00</h1>
          <div className="flex justify-center items-center space-x-[5px] text-[#06BBCC] mb-4">
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <IoIosStar />
            <p className="text-[#0000008f]">(123)</p>
          </div>
          <p className="font-bold mx-4 text-[17px] items-center font-serif">
            Web Design & Development
          </p>
          <p className="font-bold mx-4 text-[17px] items-center font-serif pb-4">
            Course for Beginners
          </p>
          <div className="flex">
            <div className="flex justify-center items-center p-2 pb-4 space-x-1 border-t border-r">
              <FaUserTie className="text-[#06BBCC]" />
              <p className="text-[#0000008f] text-[12px]">By John Doe</p>
            </div>
            <div className="flex justify-center items-center p-2 pb-4 space-x-1 border-t border-r">
              <MdWatchLater className="text-[#06BBCC]" />
              <p className="text-[#0000008f] text-[12px]">1.49 Hrs</p>
            </div>
            <div className="flex justify-center items-center p-2 pb-4 space-x-1 border-t">
              <IoPersonSharp className="text-[#06BBCC]" />
              <p className="text-[#0000008f] text-[12px]">30 Students</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
