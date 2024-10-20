import React from "react";
import { motion } from "framer-motion";
import AWS from "../images/Tech/AWS.svg";
import TF from "../images/Tech/TF.svg";
import YOLO from "../images/Tech/YOLO.svg";
import Python from "../images/Tech/Python.svg";
import FireB from "../images/Tech/Firebase.svg";
import OpenCV from "../images/Tech/OpenCV.svg";
import Flutter from "../images/Tech/Flutter.svg";

function Technologies() {
  const techStack = [
    { name: "AWS", img: AWS },
    { name: "TensorFlow", img: TF },
    { name: "YOLO", img: YOLO },
    { name: "Python", img: Python },
    { name: "Firebase", img: FireB },
    { name: "OpenCV", img: OpenCV },
    { name: "Flutter", img: Flutter },
  ];

  return (
    <div className="container mx-auto py-12" id="TechnologiesUsed">
      <motion.p
        className="text-4xl my-2 font-bold text-start text-white px-12 mb-16 mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.0 }}
      >
        {" "}
        Technologies Used{" "}
      </motion.p>

      <div className="grid grid-cols-7 gap-6 justify-items-center">
        {techStack.map((tech, index) => (
          <motion.div
            key={index}
            className="w-24 h-24 sm:w-32 sm:h-32 p-4 bg-black rounded-lg shadow-lg flex items-center justify-center cursor-pointer"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <div className="text-white text-center">
              <img
                src={tech.img}
                alt={tech.name}
                className="w-full h-full object-contain"
              />
              <p>{tech.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Technologies;
