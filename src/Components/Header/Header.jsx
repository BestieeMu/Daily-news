import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import "./Header.css";

const Hearder = () => {
const [showMobileNav, setShowMobileNav] = useState(true)

const handlNavSwitch = () => {
  setShowMobileNav(!false);
}
  

 console.log(showMobileNav);


  return (
    <>
      <div className="w-full  flex justify-center ">
        <div className="md:w-10/12 w-full relative">
          {/* fisrt heading with  the logo */}
          <div className=" border-b-4 flex items-center px-4 border-red-500 md:h-32 h-28">
            <div>
              <img
                src="https://demo.themewinter.com/wp/news247/wp-content/uploads/2017/07/logo.png"
                alt="logo"
              />
            </div>
          </div>

          {/* second heading with nav links */}
          <div className=" flex items-center justify-between md:pr-6 px-2 h-14 border-b">
            {/* list of the links for the tablet and big screen devices */}
            <div className="w-full hidden md:block ">
              <ul className="flex gap-5  ml-10 font-medium">
                <li className="cursor-pointer nav-links ">Home</li>
                <li className="cursor-pointer nav-links ">Lifestyle</li>
                <li className="cursor-pointer nav-links ">Technology</li>
                <li className="cursor-pointer nav-links ">Politics</li>
                <li className="cursor-pointer nav-links ">Entertainments</li>
                <li className="cursor-pointer nav-links ">Sports</li>
              </ul>
            </div>

            {/* dropdown nav link for the mobile screen sizes only */}

            <div className="md:hidden  ">
              <button className="flex w-20 py-1 justify-center items-center gap-2 rounded text-white bg-red-500" onClick={handlNavSwitch}>
                <span>
                  <AiOutlineMenu />
                </span>
                Menu
              </button>
              <div className={showMobileNav ? "w-11/12 bg-white nav-dropdown py-5 rounded absolute " : "hidden" }>
                <ul className="flex flex-col gap-5  ml-10 font-medium">
                  <li className="cursor-pointer hover:text-red-500">Home</li>
                  <li className="cursor-pointer hover:text-red-500">Lifestyle</li>
                  <li className="cursor-pointer hover:text-red-500">Technology</li>
                  <li className="cursor-pointer hover:text-red-500">Politics</li>
                  <li className="cursor-pointer hover:text-red-500">Entertainments</li>
                  <li className="cursor-pointer hover:text-red-500">Sports</li>
                </ul>
              </div>
            </div>

            {/* search engine implemented here*/}
            <div className="w-auto md:w-full ">
              <span className="flex items-center rounded  border float-right w-52 md:w-10/12 ">
                <input
                  type="search"
                  className="px-2 w-full h-9 text-1xl outline-none"
                />
                <span className="text-xl px-2 cursor-pointer">
                  <AiOutlineSearch />
                </span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hearder;
