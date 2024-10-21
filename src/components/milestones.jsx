// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const milestones = [
//   { date: 'February 2024', title: 'Project Proposal', description: 'Marks Allocated 6 %', marks: 6 },
//   { date: 'May 2024 ', title: 'Progress Presentation I', description: 'Marks Allocated 15%', marks: 21 },
//   { date: 'June 2024 ', title: 'Research Paper', description: 'Marks Allocated 10% ', marks: 31 },
//   { date: 'September 2024 ', title: 'Progress Presentation II', description: 'Marks Allocated 18% ', marks: 49 },
//   { date: 'August 2024 ', title: 'Final Report', description: 'Marks Allocated 19% ', marks: 68 },
//   { date: 'October 2024 ', title: 'Website Assessment ', description: 'Marks Allocated 2% ', marks: 70 },
//   { date: 'October 2024 ', title: 'Final Presentation & Viva ', description: 'Marks Allocated 20% ', marks: 90 },
//   { date: 'November 2024', title: 'Logbook', description: 'Marks Allocated 2% ', marks: 92 },
// ];

// function Milestones() {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className='text-white bg-black py-12 px-60 mt-10' id='Milestones'>
//       <div className='text-center mb-12'>
//       <motion.p
//           className="text-xl text-start mb-2 text-[#FF9500]"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           Milestones
//         </motion.p>

//         <motion.p
//           className="text-4xl font-bold text-start"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 1.0 }}
//         >
//           Timeline in Brief
//         </motion.p>
//       </div>

//       <div className='max-w-4xl mx-auto relative'>
//         <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-white h-full'></div>
//         {milestones.map((milestone, index) => {
//           const isLeft = index % 2 === 0;
//           return (
//             <motion.div
//               key={index}
//               className={`mb-8 flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'} relative`}
//               initial={{ opacity: 0, y: 50 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5, delay: index * 0.2 }}
//               viewport={{ once: true }}
//               onMouseEnter={() => setHoveredIndex(index)}
//               onMouseLeave={() => setHoveredIndex(null)}
//             >
//               <div
//                 className={`flex flex-col items-center ${isLeft ? 'mr-8' : 'ml-8'} max-w-xs`}
//               >
//                 <motion.div
//                   whileHover={{ scale: 1.2 }}
//                   className='flex-shrink-0 w-10 h-10 rounded-full bg-[#FCBA5E] text-black flex items-center justify-center font-bold text-lg cursor-pointer'
//                 >
//                   {index + 1}
//                 </motion.div>
//                 <div className='mt-4 text-center'>
//                   <p className='text-white text-sm font-light'>{milestone.date}</p>
//                   <p className='text-white text-2xl font-bold'>{milestone.title}</p>
//                   <div className='mt-2 w-full'>
//                     <div className='w-full bg-white rounded-full h-2'>
//                       <div
//                         className='bg-[#FF6A00] h-2 rounded-full'
//                         style={{ width: `${milestone.marks}%` }}
//                       ></div>
//                     </div>
//                   </div>
//                   {/* Description appears on hover */}
//                   {hoveredIndex === index && (
//                     <motion.div
//                       initial={{ opacity: 0, y: 10 }}
//                       animate={{ opacity: 1, y: 0 }}
//                       transition={{ duration: 0.4, ease: 'easeInOut' }}
//                       className='mt-4 bg-gray-100 p-4 rounded-lg shadow-lg text-sm text-gray-700'
//                     >
//                       {milestone.description}
//                     </motion.div>
//                   )}
//                 </div>
//               </div>
//               {/* Line connecting milestone to the tree */}
//               <div
//                 className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 w-10 bg-white ${isLeft ? '-right-8' : '-left-8'}`}
//               />
//               <div
//                 className={`absolute top-0 transform -translate-y-4 h-4 w-4  rounded-full ${isLeft ? '-right-2' : '-left-2'}`}
//               />
//             </motion.div>
//           );
//         })}
//       </div>
//     </div>
//   );
// }

// export default Milestones;


import React, { useState } from "react";
import { motion } from "framer-motion";

const milestones = [
  { date: 'February 2024', title: 'Project Proposal', description: 'Marks Allocated 6 %', marks: 6 },
  { date: 'May 2024 ', title: 'Progress Presentation I', description: 'Marks Allocated 15%', marks: 21 },
  { date: 'June 2024 ', title: 'Research Paper', description: 'Marks Allocated 10% ', marks: 31 },
  { date: 'August 2024 ', title: 'Final Report', description: 'Marks Allocated 19% ', marks: 68 },
  { date: 'September 2024 ', title: 'Progress Presentation II', description: 'Marks Allocated 18% ', marks: 49 },
  { date: 'October 2024 ', title: 'Website Assessment ', description: 'Marks Allocated 2% ', marks: 70 },
  { date: 'October 2024 ', title: 'Final Presentation & Viva ', description: 'Marks Allocated 20% ', marks: 90 },
  { date: 'November 2024', title: 'Logbook', description: 'Marks Allocated 2% ', marks: 92 },
];

function Milestones() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="text-white bg-black py-8 px-4 md:px-16 lg:px-60" id="Milestones">
      <div className="text-center mb-12">
        <motion.p
          className="text-xl text-start mb-2 text-[#FF9500]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Milestones
        </motion.p>
        <motion.p
          className="text-2xl md:text-4xl font-bold text-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.0 }}
        >
          Timeline in Brief
        </motion.p>
      </div>

      <div className="max-w-4xl mx-auto relative">
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-white h-full xl:block hidden"></div>
        {milestones.map((milestone, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`mb-8 flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'} relative`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`flex flex-col items-center ${isLeft ? 'mr-8' : 'ml-8'} max-w-xs`}>
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className="flex-shrink-0 w-10 h-10 rounded-full bg-[#FCBA5E] text-black flex items-center justify-center font-bold text-lg cursor-pointer"
                >
                  {index + 1}
                </motion.div>
                <div className="mt-4 text-center">
                  <p className="text-white text-sm font-light">{milestone.date}</p>
                  <p className="text-white text-2xl font-bold">{milestone.title}</p>
                  <div className="mt-2 w-full">
                    <div className="w-full bg-white rounded-full h-2">
                      <div
                        className="bg-[#FF6A00] h-2 rounded-full"
                        style={{ width: `${milestone.marks}%` }}
                      ></div>
                    </div>
                  </div>
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: "easeInOut" }}
                      className="mt-4 bg-gray-100 p-4 rounded-lg shadow-lg text-sm text-gray-700"
                    >
                      {milestone.description}
                    </motion.div>
                  )}
                </div>
              </div>
              <div className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 w-10 bg-white ${isLeft ? '-right-8' : '-left-8'}`}></div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Milestones;