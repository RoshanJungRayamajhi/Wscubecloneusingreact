import React, { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

const Nav = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div>
      <div className=" bg-[#2699fb] px-7 py-5">
        <div className=" mx-auto max-w-screen-lg flex items-center justify-between">
          <div className=" font-semibold text-4xl">Wscube tech</div>
          {toggle ? (
            <RxCross2
              onClick={() => settoggle(!toggle)}
              className=" text-white text-xl md:hidden block "
            />
          ) : (
            <MdOutlineMenu
              onClick={() => settoggle(!toggle)}
              className=" text-white text-xl md:hidden block "
            />
          )}
          <div className="hidden md:flex gap-10 text-lg font-medium text-white">
            <h4>Home</h4>
            <h4>Courses</h4>
            <h4>About </h4>
            <h4>Contact</h4>
          </div>
          {/* for responsive */}
          <div className={` duration-500 md:hidden w-full h-screen gap-10 text-lg font-medium text-white fixed bg-black top-[11.5%] ${toggle ? "left-[0%]":"left-[-100%]"}`}>
            <h4 className="p-5">Home</h4>
            <h4 className="p-5">Courses</h4>
            <h4 className="p-5">About </h4>
            <h4 className="p-5">Contact</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nav;