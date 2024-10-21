import React from "react";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import backImage from "../images/FITGLOGO.svg";

function Header() {
  return (
    <div id="main" className="relative w-full h-screen overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 0.2, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 flex justify-center items-center"
      >
        <img
          src={backImage}
          alt="Background"
          className="w-[100%] md:w-[70%] h-auto object-cover pointer-events-none"
        />
      </motion.div>
      <div className="text-center font-lato absolute left-1/2 top-[55%] transform -translate-x-1/2 -translate-y-[55%]">
        <h1 className="text-white font-bold xl:text-7xl text-2xl md:text-3xl hover:cursor-crosshair">
        FITGENIUS
        </h1>
        <p className="text-slate-400 font-semibold xl:text-2xl text-sm my-4 hover:cursor-crosshair">
        Fitness-related coaching and diet planning using Image Processing and Machine Learning
        </p>
        <div className="header-btns">
          <Link
            to="LiteratureSurvey"
            className="header-btn hover:cursor-pointer"
            smooth={true}
            duration={1000}
          >
            Learn More
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;