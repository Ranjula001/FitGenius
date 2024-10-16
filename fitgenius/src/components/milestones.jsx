// import React from 'react';

// function Milestones() {
//   return (
//     <div className='bg-white py-12' id='Milestones'>
//       <div className='text-center mb-12'>
//         <h2 className='text-4xl font-bold text-gray-900'>Milestones</h2>
//         <p className='text-xl text-gray-600'>Timeline in Brief</p>
//       </div>

//       <div className='max-w-4xl mx-auto'>
//         <div>
//           <p>March 2024</p>
//           <p>Project Proposal</p>
//         </div>
//         <div>
//           <p>June 2024</p>
//           <p>Progress Presentation I</p>
//         </div>
//         <div>
//           <p>July 2024</p>
//           <p>Research Paper</p>
//         </div>
//         <div>
//           <p>September 2024</p>
//           <p>Progress Presentation II</p>
//         </div>
//         <div>
//           <p>October 2024</p>
//           <p>Website Assessment</p>
//         </div>
//         <div>
//           <p>November 2024</p>
//           <p>Logbook</p>
//         </div>
//         <div>
//           <p>November 2024</p>
//           <p>Final Report</p>
//         </div>
//         <div>
//           <p>November 2024</p>
//           <p>Final Presentation & Viva</p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Milestones;


import React, { useState } from 'react';
import { motion } from 'framer-motion';

const milestones = [
  { date: 'March 2024', title: 'Project Proposal', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', marks: 6 },
  { date: 'June 2024', title: 'Progress Presentation I', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', marks: 6 },
  { date: 'July 2024', title: 'Research Paper', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', marks: 10 },
  { date: 'September 2024', title: 'Progress Presentation II', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', marks: 18 },
  { date: 'October 2024', title: 'Website Assessment', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', marks: 2 },
  { date: 'November 2024', title: 'Logbook', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', marks: 3 },
  { date: 'November 2024', title: 'Final Report', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', marks: 19 },
  { date: 'November 2024', title: 'Final Presentation & Viva', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.', marks: 20 },
];

function Milestones() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className='bg-white py-12' id='Milestones'>
      <div className='text-center mb-12'>
        <h2 className='text-4xl font-bold text-gray-900'>Milestones</h2>
        <p className='text-xl text-gray-600'>Timeline in Brief</p>
      </div>

      <div className='max-w-4xl mx-auto relative'>
        <div className='absolute top-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-500 h-full'></div>
        {milestones.map((milestone, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`mb-8 flex items-center w-full ${isLeft ? 'justify-start' : 'justify-end'} relative`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`flex flex-col items-center ${isLeft ? 'mr-8' : 'ml-8'} max-w-xs`}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  className='flex-shrink-0 w-10 h-10 rounded-full bg-[#FCBA5E] text-white flex items-center justify-center font-bold text-lg cursor-pointer'
                >
                  {index + 1}
                </motion.div>
                <div className='mt-4 text-center'>
                  <p className='text-gray-700 font-semibold'>{milestone.date}</p>
                  <p className='text-gray-600'>{milestone.title}</p>
                  <div className='mt-2 w-full'>
                    <div className='w-full bg-gray-200 rounded-full h-2'>
                      <div
                        className='bg-[#7FC51D] h-2 rounded-full'
                        style={{ width: `${milestone.marks}%` }}
                      ></div>
                    </div>
                  </div>
                  {/* Description appears on hover */}
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, ease: 'easeInOut' }}
                      className='mt-4 bg-gray-100 p-4 rounded-lg shadow-lg text-sm text-gray-700'
                    >
                      {milestone.description}
                    </motion.div>
                  )}
                </div>
              </div>
              {/* Line connecting milestone to the tree */}
              <div
                className={`absolute top-1/2 transform -translate-y-1/2 h-0.5 w-10 bg-gray-500 ${isLeft ? '-right-8' : '-left-8'}`}
              />
              <div
                className={`absolute top-0 transform -translate-y-4 h-4 w-4  rounded-full ${isLeft ? '-right-2' : '-left-2'}`}
              />
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Milestones;
