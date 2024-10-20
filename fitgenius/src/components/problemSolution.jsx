import React from "react";
import { motion } from "framer-motion";
import image from "../images/content-digital.png";

function ProblemSolution() {
  return (
    <div>
      <div className="text-white bg-black py-16 px-60" id="ResearchGap">
        <div className="text-center mb-12">
          <motion.p
            className="text-4xl font-bold text-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Research Problem & Solution
          </motion.p>
          <motion.h2
            className="mb-4 text-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            How can we provide personalized fitness plans and real-time feedback
            based on individual body types?
          </motion.h2>
        </div>

        <div className="mb-20">
          <motion.p
            className="text-xl my-2 text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Proposed Problem
          </motion.p>
          <motion.p
            className="text-base my-2 text-justify font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            In modern busy lifestyles, achieving and maintaining fitness is a
            challenge. Traditional fitness applications often provide generic
            workout plans and diet suggestions that overlook individual body
            types and specific fitness needs. Furthermore, these apps lack
            real-time feedback systems to correct exercise forms, leading to
            inefficiency and increased risk of injury. Users need personalized
            fitness plans that consider their body type, fitness goals, and
            dietary preferences. Moreover, users need instant feedback to ensure
            their movements are correct during exercises to enhance workout
            effectiveness and minimize injury risk.
          </motion.p>
        </div>

        <div className="grid grid-cols-2">

          <div>
            <img src={image}/>
          </div>
          <div className="">
          <motion.p
            className="text-xl my-2 text-justify"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Proposed Solution
          </motion.p>
          <motion.p
            className="text-base my-2 text-justify font-light"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
          >
            Our solution involves a mobile application that utilizes image
            processing and machine learning techniques to classify users into
            body types (ectomorph, mesomorph, endomorph) based on photos and
            generate personalized workout and diet plans. The app integrates
            real-time exercise movement tracking using video processing
            technologies like YOLOv8 and MediaPipe to ensure accurate form and
            provide immediate feedback during workouts, minimizing injury risks
            and improving overall effectiveness.
            <br />
            <br />
            In addition to real-time tracking, the system includes an
            emoji-based feedback mechanism for workouts. After completing each
            workout, users can rate their experience using emojis to quickly
            convey how they felt about the session. This feedback helps the app
            to adjust future workout recommendations based on user sentiment,
            making the experience more engaging and tailored to individual
            preferences.
            <br />
            <br />
            The app also provides personalized dietary advice using a Random
            Forest regressor model, which refines meal plans based on the user's
            physical data, fitness goals, and preferences. By combining
            personalized fitness recommendations with real-time tracking and
            workout feedback via emojis, this solution ensures a dynamic and
            evolving fitness journey for users.
          </motion.p>
        </div>

        </div>
        
      </div>
    </div>
  );
}

export default ProblemSolution;
