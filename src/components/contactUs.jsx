// import { motion } from 'framer-motion';

// const ContactUs = () => {
//   return (
//     <div className=" flex justify-center items-center py-24" id='Contact-Us'>
//       <motion.div
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 0.8 }}
//         className="bg-black shadow-lg rounded-lg flex space-x-64"
//       >
//         {/* Form Section */}
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="flex-1"
//         >
//           <div>

//           <motion.p
//           className="text-xl my-2 text-start text-[#FF9500]"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           {" "}
//           Contact Us
//         </motion.p>
//         <motion.p
//           className="text-4xl my-2 font-bold text-start text-white"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.0 }}
//         >
//           {" "}
//           Get in Touch{" "}
//         </motion.p>

//           </div>
//           <form>
//             <div className="mb-4">
//               <label className="block text-base font-light  text-white mt-5 mb-2">Name</label>
//               <input
//                 type="text"
//                 placeholder="Eren Yeager"
//                 className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring focus:ring-[#FCBA5E]"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-base font-light  text-white mb-2">Email Address</label>
//               <input
//                 type="email"
//                 placeholder="erenyeager@example.com"
//                 className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#FCBA5E]"
//               />
//             </div>
//             <div className="mb-4">
//               <label className="block text-base font-light  text-white mb-2">Message or Query</label>
//               <textarea
//                 placeholder="Your message"
//                 rows="4"
//                 className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring focus:ring-[#FCBA5E]"
//               ></textarea>
//             </div>
//             <button
//               type="submit"
//               className="w-full bg-[#FF4D00] text-white py-2 rounded-md hover:bg-[#FF6A00] transition duration-300"
//             >
//               Submit
//             </button>
//           </form>
//         </motion.div>

//         {/* Contact Details */}
//         <motion.div
//           initial={{ opacity: 0, y: 100 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8, delay: 0.4 }}
//           className="flex-1"
//         >
//           <h3 className="text-sm font-semibold text-white mt-24 mb-4">Contact Details</h3>
//           <p className="text-white text-sm mb-4">
//             For further queries, please reach us at <a href="mailto:fitgeniusresearch@gmail.com" className="text-[#FCBA5E] underline">fitgeniusresearch@gmail.com</a>
//           </p>
//           <p className="text-white text-sm">
//             Hope this project helped you in some manner. Thank you!
//           </p>
//           <p className="text-white font-semibold mt-6 text-sm">- Team FITGENIUS</p>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// };

// export default ContactUs;


import { motion } from 'framer-motion';

const ContactUs = () => {
  return (
    <div className="w-full flex justify-center items-center py-24 bg-black" id='Contact-Us'>
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-black shadow-lg rounded-lg flex flex-col md:flex-row md:space-x-10 space-y-10 md:space-y-0 w-full max-w-7xl px-6 md:px-10"
      >
        {/* Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex-1"
        >
          <div>
            <motion.p
              className="text-xl my-2 text-start text-[#FF9500]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              Contact Us
            </motion.p>
            <motion.p
              className="text-4xl my-2 font-bold text-start text-white"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
            >
              Get in Touch
            </motion.p>
          </div>
          <form>
            <div className="mb-4">
              <label className="block text-base font-light text-white mt-5 mb-2">Name</label>
              <input
                type="text"
                placeholder="Eren Yeager"
                className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring focus:ring-[#FCBA5E]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-base font-light text-white mb-2">Email Address</label>
              <input
                type="email"
                placeholder="erenyeager@example.com"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#FCBA5E]"
              />
            </div>
            <div className="mb-4">
              <label className="block text-base font-light text-white mb-2">Message or Query</label>
              <textarea
                placeholder="Your message"
                rows="4"
                className="w-full px-4 py-2 border border-white rounded-md focus:outline-none focus:ring focus:ring-[#FCBA5E]"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-[#FF4D00] text-white py-2 rounded-md hover:bg-[#FF6A00] transition duration-300"
            >
              Submit
            </button>
          </form>
        </motion.div>

        {/* Contact Details */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex-1"
        >
          <h3 className="text-lg font-semibold text-white mt-6 md:mt-24 mb-4">Contact Details</h3>
          <p className="text-white text-base mb-4">
            For further queries, please reach us at{' '}
            <a href="mailto:fitgeniusresearch@gmail.com" className="text-[#FCBA5E] underline">
              fitgeniusresearch@gmail.com
            </a>
          </p>
          <p className="text-white text-base">
            Hope this project helped you in some manner. Thank you!
          </p>
          <p className="text-white font-semibold mt-6 text-base">- Team FITGENIUS</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ContactUs;