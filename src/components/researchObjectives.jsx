// import React from "react";
// import { motion } from "framer-motion";

// function ResearchObjectives() {
//   return (
//     <div>
//       <div className="text-white bg-black py-16 px-60" id="ResearchGap">
//         <div className="text-center mb-12">
//           <motion.p
//             className="text-4xl font-bold text-start"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.7 }}
//           >
//             Research Objectives
//           </motion.p>
//         </div>
//         <div class="grid grid-cols-4 gap-4">

//         <div className="mb-10">
//           <motion.p
//             className="text-xl my-2 text-justify font-bold"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             1. Body Type Identification Using Image Processing
//           </motion.p>
//           <motion.p
//             className="text-xl my-2 text-justify font-light"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             The first objective is to develop an image processing solution to
//             classify users into one of the three main body types: ectomorph,
//             mesomorph, or endomorph. The system utilizes machine learning
//             algorithms to analyze user images and accurately predict their body
//             type, enabling personalized fitness recommendations tailored to
//             their specific physique.
//           </motion.p>
//         </div>

//         <div className="mb-10">
//           <motion.p
//             className="text-xl my-2 text-justify font-bold"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             2. Personalized Workout Plan Generation
//           </motion.p>
//           <motion.p
//             className="text-xl my-2 text-justify font-light"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             The second objective is to generate personalized workout plans based
//             on the user’s body type, fitness goals, and preferences. These plans
//             are created using a combination of image processing data and user
//             input, with the system dynamically adjusting the workouts according
//             to progress and feedback. An emoji-based feedback system allows
//             users to rate their workout satisfaction after each session, helping
//             the system refine future recommendations and ensure an engaging,
//             optimized fitness journey.
//           </motion.p>
//         </div>

//         <div className="mb-10">
//           <motion.p
//             className="text-xl my-2 text-justify font-bold"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             3. Real-Time Exercise Tracking and Feedback
//           </motion.p>
//           <motion.p
//             className="text-xl my-2 text-justify font-light"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             The third objective is to implement a real-time system for tracking
//             exercise movements and providing feedback on form. Using computer
//             vision techniques and motion-based algorithms, the system detects
//             key landmarks on the body and offers real-time guidance to correct
//             exercise posture, reducing the risk of injury and improving workout
//             efficiency.
//           </motion.p>
//         </div>

//         <div className="mb-10">
//           <motion.p
//             className="text-xl my-2 text-justify font-bold"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             4. Tailored Nutritional Advice
//           </motion.p>
//           <motion.p
//             className="text-xl my-2 text-justify font-light"
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.5 }}
//           >
//             The final objective is to develop a personalized dietary
//             recommendation system that adapts to the user's unique body type,
//             fitness goals, and dietary preferences. Using machine learning
//             models, the system calculates optimal meal plans, including daily
//             caloric intake, macronutrient distribution, and food recommendations
//             to support the user’s fitness journey.
//           </motion.p>
//         </div>

//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default ResearchObjectives;


import React from "react";
import { motion } from "framer-motion";

function ResearchObjectives() {
  return (
    <div className="text-white bg-black py-16 px-56" id="ResearchObjectives">
      <div className="text-center mb-12">
        <motion.p
          className="text-4xl font-bold text-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Research Objectives
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 cursor-pointer">
        {/* Card 1 */}
        <motion.div
          className="bg-[#1a1a1a] rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p className="text-xl font-bold mb-2">
            1. Body Type Identification Using Image Processing
          </motion.p>
          <motion.p className="text-sm font-light">
            Develop an image processing solution to classify users into body
            types: ectomorph, mesomorph, or endomorph. It utilizes machine
            learning algorithms to predict the body type, providing personalized
            fitness recommendations.
          </motion.p>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-[#1a1a1a] rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p className="text-xl font-bold mb-2">
            2. Personalized Workout Plan Generation
          </motion.p>
          <motion.p className="text-sm font-light">
            Generate personalized workout plans based on body type, fitness
            goals, and preferences, dynamically adjusting according to user
            progress. Emoji-based feedback refines future recommendations.
          </motion.p>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-[#1a1a1a] rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p className="text-xl font-bold mb-2">
            3. Real-Time Exercise Tracking and Feedback
          </motion.p>
          <motion.p className="text-sm font-light">
            Implement a real-time system for tracking exercise movements and
            providing feedback on form. Using computer vision techniques, the
            system offers real-time guidance to correct posture and improve
            workout efficiency.
          </motion.p>
        </motion.div>

        {/* Card 4 */}
        <motion.div
          className="bg-[#1a1a1a] rounded-lg shadow-lg p-6 hover:shadow-xl transform hover:-translate-y-2 transition-transform duration-500"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.p className="text-xl font-bold mb-2">
            4. Tailored Nutritional Advice
          </motion.p>
          <motion.p className="text-sm font-light">
            Develop a personalized dietary recommendation system that adapts to
            the user's unique body type, fitness goals, and dietary preferences,
            providing tailored meal plans to support their fitness journey.
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
}

export default ResearchObjectives;
