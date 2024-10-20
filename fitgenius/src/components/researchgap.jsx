import React from "react";
import { motion } from "framer-motion";
import { Collapse } from "antd";
import RG from "../images/website-development.png";
const { Panel } = Collapse;

const researchGaps = [
  {
    title: "Gap 1: Lack of Comprehensive Solutions",
    description:
      "Most research focuses on isolated components of fitness and health, but few address holistic solutions that combine multiple approaches.",
  },
  {
    title: "Gap 2: Limited Integration of AI",
    description:
      "While AI is used in many areas, its application in real-time body composition analysis is still under-researched.",
  },
  {
    title: "Gap 3: Insufficient Data for Personalization",
    description:
      "Current models often lack sufficient user data to provide highly personalized recommendations for diet and fitness.",
  },
];

function ResearchGap() {
  return (
    <div className="text-white bg-black py-16 px-60" id="ResearchGap">
      <div className="text-center mb-12">
        <motion.p
          className="text-4xl font-bold text-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Research Gap
        </motion.p>
        <motion.h2
          className="mb-4 text-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
         The following areas are the research gaps identified from recent studies on fitness-related coaching and diet planning systems.
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 justify-items-center">
      <div>
        <motion.p
          className="text-base text-justify"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          Current fitness applications that use body composition analysis lack
          precise body type identification using advanced image processing
          techniques, relying instead on general metrics such as BMI, which fail
          to capture the distinct characteristics of body types like ectomorph,
          mesomorph, and endomorph. This highlights the need for more accurate
          and personalized body assessments. Additionally, most fitness apps
          provide general workout recommendations without considering individual
          body types, fitness levels, or goals, leading to less effective
          workouts and higher risks of injury. Addressing this gap could
          significantly improve workout efficiency by tailoring routines to a
          user's specific needs and abilities. Furthermore, the integration
          of an emoji-based feedback system for users to rate their workout
          satisfaction and progress has not been explored widely. This system
          could allow users to provide immediate, intuitive feedback on the
          effectiveness of their workout routines, which can dynamically adjust
          the plans over time. Moreover, there is a lack of systems that offer
          real-time, personalized feedback on exercise movements, with existing
          solutions often failing to provide immediate corrections for improper
          form. The integration of computer vision and machine learning, along
          with real-time audio feedback, could address this gap by providing
          immediate, actionable corrections during workouts, helping users
          maintain proper form and reducing the risk of injury. Lastly, while
          many dietary recommendation systems offer meal plans, they remain
          static and fail to adapt dynamically to individual progress.
          Developing more adaptive systems that adjust based on real-time health
          metrics could ensure better-tailored dietary advice and improve
          long-term fitness outcomes.
        </motion.p>
      </div>
        <div className="">
          <img src={RG} />
        </div>
      </div>
      
    </div>
  );
}

export default ResearchGap;
