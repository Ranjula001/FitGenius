import React from "react";
import { motion } from "framer-motion";
import LR from "../images/blog-writer.png";


function ProjectScope() {
  return (
    <div className="text-white bg-black my-4 px-60 " id="ProjectScope">
      <div class="col-span-2">
        <motion.p
          className="text-xl my-2 text-start text-[#FF9500]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {" "}
          Project Scope
        </motion.p>
        <motion.p
          className="text-4xl my-2 font-bold text-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          {" "}
          Literature Survey{" "}
        </motion.p>
      </div>
      <div className="grid grid-cols-2 mt-14">
        <div className="w-full">
          <img src={LR} className="w-[680]"/>
        </div>
        <div>
        <div class="">
          <motion.p
            className="text-base my-2 text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.7 }}
          >
            Innovative technologies at the intersection of artificial
            intelligence, machine learning, and image processing have
            revolutionized the fields of fitness coaching and dietary planning.
            Various studies have focused on body composition analysis,
            personalized fitness routines, and real-time feedback mechanisms.{" "}
           
           
            Farina et al. [1] developed a smartphone application to evaluate
            body composition and phenotyping, paving the way for mobile health
            monitoring. Tóth et al. [2] explored how somatotypes (ectomorph,
            mesomorph, and endomorph) affect athletic performance, emphasizing
            the need for personalized fitness programs. Choudhary et al. [3]
            contributed to this field by introducing a waist-to-hip ratio
            measurement app, a crucial factor in assessing cardiovascular risks.
           
           
            Sharma et al. [4] integrated machine learning algorithms into a
            fitness app that dynamically adjusts workout plans based on user
            progress. Meanwhile, Abdulaziz et al. incorporated sequential
            information to generate real-time, adaptive fitness recommendations.
            Lastly, Babalola’s personalized diet recommendation system considers
            individual preferences and health goals, while Agapito’s adaptive
            diet system refines suggestions in real time.
           
            These studies underline the need for a more personalized,
            adaptable approach to fitness and diet planning, which this research
            aims to address through a combination of image processing, machine
            learning, and real-time feedback technologies.
          </motion.p>
        </div>
        <div class="mt-5">
          <motion.p
            className="text-sm font-bold my-2 text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.9 }}
          >
            References
          </motion.p>
          <motion.p
            className="text-sm text-justify font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.9 }}
          >
            [1] F. S. A. D. L. a. H. L. G. Farina, "A Smartphone Application for
            Personal Assessments of Body Composition and Phenotyping," Sensors,
            vol. 16, no. 12, p. 2163, 2016.
            <br />
            [2] M. M. L. B. a. J. Ž. T. Tóth, "Somatotypes in Sport," Acta
            Mechanica et Automatica., vol. 8, no. 1, pp. 27-32, 2014.
            <br />
            [3] S. C. a. e. al, "Development and validation of an accurate
            smartphone application for measuring waist-to-hip circumference
            ratio," npj Digital Medicine, vol. 6, no. 1, pp. 1-10, 2023.
            <br />
            [4] B. S. a. C. J. A. Sharma, "Personalized Workout Planning:
            Leveraging Machine Learning for Tailored Exercise Recommendations,"
            Journal of Health and Fitness Technology, vol. 10, no. 2, pp.
            123-135, 2020
          </motion.p>
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectScope;
