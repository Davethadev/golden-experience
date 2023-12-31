import React from "react";
import GoldenCityLogo from "../../Assets/Sample Logo.svg";
import LinkedIn from "../../Assets/linkedin.svg";
import Twitter from "../../Assets/twitter.svg";
import Facebook from "../../Assets/facebook.svg";
import Instagram from "../../Assets/instagram.svg";

const Footer = () => {
  return (
    <>
      <div className="flex justify-center">
        <div className="flex justify-between mb-7 w-full">
          <img
            src={GoldenCityLogo}
            alt="Golden-City"
            className="w-[199px] h-8"
          />
          <div className=" font-poppins font-bold text-4xl text-[#753FF6] flex space-x-32 ">
            <p className="">Contact us</p>
            <p className="">Blog</p>
            <p className="">Testimonials</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <div className=" w-[60%] border-b border-gray-500 mb-10 flex justify-center"></div>
      </div>
      <div className="flex flex-col justify-center items-center space-y-8 mb-24">
        <div className=" w-300px h-70px bg-[#753FF6] flex space-x-6 justify-center items-center rounded-full">
          <img src={LinkedIn} alt="" className=" w-11 h-11 " />
          <img src={Twitter} alt="" className=" w-11 h-11 " />
          <img src={Facebook} alt="" className=" w-11 h-11 " />
          <img src={Instagram} alt="" className=" w-11 h-11 " />
        </div>
        <span>© 2022. All rights reserved</span>
      </div>
    </>
  );
};

export default Footer;
