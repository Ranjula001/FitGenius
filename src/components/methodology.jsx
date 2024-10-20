// import React from "react";
// import { motion } from "framer-motion";
// import d1 from "../images/methodologyD1.svg";
// import d2 from "../images/methodologyD2.svg";

// function Methodology() {
//   return (
//     <div className="text-white bg-black my-4 px-60 " id="Methodology">
//       <div class="col-span-2">
//         <motion.p
//           className="text-4xl my-2 font-bold text-start"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.0 }}
//         >
//           {" "}
//           Methodology{" "}
//         </motion.p>
//       </div>
//       <div class="mt-14">
//         <motion.p
//           className="text-base my-2 text-justify"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.7 }}
//         >
//           The system utilizes advanced technologies to deliver a personalized
//           fitness experience. Registered users upload body images as guided by
//           the system. These images are processed on the Amazon Web Services
//           (AWS) backend, where a Convolutional Neural Network (CNN) model is
//           employed to identify the user's body type, categorizing it as
//           ectomorph, endomorph, or mesomorph. The identified body type is sent
//           to the mobile application via a secure API.
//           <br />
//           <br />
//           Upon receiving the body type classification, users input additional
//           details such as height, weight, and fitness goals. Based on this
//           information, a personalized workout plan is generated using a
//           knowledge-based system, which dynamically adjusts according to user
//           feedback. This feedback mechanism enables the system to refine the
//           workout plan, ensuring it aligns with the user's progress and
//           preferences.
//           <br />
//           <br />
//           To ensure exercises are performed correctly, the system incorporates
//           real-time exercise movement tracking. Users perform exercises in front
//           of their mobile device's camera, with the video stream processed on
//           the AWS backend using WebRTC technology. The system identifies
//           incorrect movements using a Random Forest classifier and YOLOv8 model,
//           providing immediate audio feedback to correct the user's form and
//           reduce the risk of injury.
//           <br />
//           <br />
//           In addition, the system offers personalized dietary plans based on the
//           user's body type, fitness goals, and dietary preferences. These plans
//           are developed using a Random Forest regressor model and linear
//           programming to optimize meal suggestions. Users are provided with
//           multiple meal plan options tailored to meet their nutritional
//           requirements.
//           <br />
//           <br />
//           All system components—body type identification, exercise tracking,
//           workout plan generation, and dietary recommendations—are integrated
//           into the mobile application, with backend services hosted on AWS to
//           ensure scalability and high availability. This comprehensive system
//           delivers real-time feedback and personalized fitness and dietary
//           guidance, enhancing the overall user experience.
//         </motion.p>
//       </div>

//       <div className="grid grid-cols-2">

//         <div>
//           <img src={d1}/>
//           figure 1
//         </div>

//         <div>
//           <img src={d2}/>
//           figure 1
//         </div>

//       </div>

//     </div>
//   );
// }

// export default Methodology;

import React from "react";
import { motion } from "framer-motion";
import d1 from "../images/methodologyD1.svg";
import d2 from "../images/methodologyD2.svg";

function Methodology() {
  return (
    <div
      className="text-white bg-black my-4 px-8 md:px-20 lg:px-40 xl:px-60"
      id="Methodology"
    >
      <div className="col-span-2">
        <motion.p
          className="text-4xl my-2 font-bold text-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          Methodology
        </motion.p>
      </div>

      <motion.div
        className="mt-8 text-base text-justify leading-relaxed"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5 }}
      >
        <p>
          The system utilizes advanced technologies to deliver a personalized
          fitness experience. Registered users upload body images as guided by
          the system. These images are processed on the Amazon Web Services
          (AWS) backend, where a Convolutional Neural Network (CNN) model is
          employed to identify the user's body type, categorizing it as
          ectomorph, endomorph, or mesomorph. The identified body type is sent
          to the mobile application via a secure API.
        {/* </p> */}
        {/* <br /> */}
        {/* <p> */}
          Upon receiving the body type classification, users input additional
          details such as height, weight, and fitness goals. Based on this
          information, a personalized workout plan is generated using a
          knowledge-based system, which dynamically adjusts according to user
          feedback. This feedback mechanism enables the system to refine the
          workout plan, ensuring it aligns with the user's progress and
          preferences.
        {/* </p> */}
        {/* <br /> */}
        {/* <p> */}
          To ensure exercises are performed correctly, the system incorporates
          real-time exercise movement tracking. Users perform exercises in front
          of their mobile device's camera, with the video stream processed on
          the AWS backend using WebRTC technology. The system identifies
          incorrect movements using a Random Forest classifier and YOLOv8 model,
          providing immediate audio feedback to correct the user's form and
          reduce the risk of injury.
        {/* </p> */}
        {/* <br /> */}
        {/* <p> */}
          In addition, the system offers personalized dietary plans based on the
          user's body type, fitness goals, and dietary preferences. These plans
          are developed using a Random Forest regressor model and linear
          programming to optimize meal suggestions. Users are provided with
          multiple meal plan options tailored to meet their nutritional
          requirements.
        {/* </p> */}
        {/* <br /> */}
        {/* <p> */}
          All system components—body type identification, exercise tracking,
          workout plan generation, and dietary recommendations—are integrated
          into the mobile application, with backend services hosted on AWS to
          ensure scalability and high availability. This comprehensive system
          delivers real-time feedback and personalized fitness and dietary
          guidance, enhancing the overall user experience.
        </p>
      </motion.div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-10">
        {/* Figure 1 */}
        <motion.div
          className="bg-gray-800 p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
        >
          <img
            src={d1}
            alt="Methodology Diagram 1"
            className="w-full h-auto object-contain"
          />
          <p className="text-center text-sm mt-2">Figure 1</p>
        </motion.div>

        {/* Figure 2 */}
        <motion.div
          className="bg-gray-800 p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0 }}
        >
          <img
            src={d2}
            alt="Methodology Diagram 2"
            className="w-full h-auto object-contain"
          />
          <p className="text-center text-sm mt-2">Figure 2</p>
        </motion.div>
      </div>
    </div>
  );
}

export default Methodology;
