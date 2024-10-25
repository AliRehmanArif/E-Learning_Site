import React, { useState } from "react";
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="">
      <div className="flex justify-between flex-wrap">
        <div className="flex items-center px-4 py-5">
          <h1 className="text-[#06BBCC] font-mono font-bold text-3xl md:text-4xl lg:text-5xl">
            eLeanring
          </h1>
        </div>
        <div className="hidden md:flex items-center space-x-7 m-6 md:text-xl lg:text-2xl">
          <p className="text-[#06BBCC]">Home</p>
          <p>Courses</p>
          <p>About</p>
          <select id="options" name="options">
            <option value="">-- Pages --</option>
            <option value="account-settings">Our Team</option>
            <option value="support">Testimonials</option>
            <option value="license">404 Page</option>
          </select>
          <p>Contact</p>
          <div>
            <button className="text-[#06BBCC] font-bold w-full py-1 px-2 rounded-md">
              Join Now
            </button>
          </div>
        </div>
        <div className="md:hidden flex justify-end top-0 px-4">
          <button onClick={handleNav}>
            {!nav ? (
              <IoReorderThree className="text-gray-500 cursor-pointer border text-4xl hover:scale-105 duration-300" />
            ) : (
              <IoReorderThree className="text-gray-500 cursor-pointer border text-4xl hover:scale-105 duration-300" />
            )}
          </button>
        </div>
        {!nav && (
          <div className="border-t-gray-600 ease-in-out duration-500">
            <ul className="uppercase pb-4">
              <li className="mt-4">
                <a href="/" className="p-4 hover:text-[#06BBCC]">
                  Home
                </a>
              </li>
              <li className="mt-4">
                <a href="/" className="p-4 hover:text-[#06BBCC]">
                  Courses
                </a>
              </li>
              <li className="mt-4">
                <a href="/" className="p-4 hover:text-[#06BBCC]">
                  About
                </a>
              </li>
              <li className="mt-4 ">
                <select id="options" name="options">
                  <option value="">-- Pages --</option>
                  <option value="account-settings">Our Team</option>
                  <option value="support">Testimonials</option>
                  <option value="license">404 Page</option>
                </select>
              </li>
              <li className="mt-4">
                <a href="/" className="p-4 hover:text-[#06BBCC]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
