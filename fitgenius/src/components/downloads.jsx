import React from "react";
import { Card } from "antd";
import {
  DownloadOutlined,
  FilePdfOutlined,
  FilePptOutlined,
} from "@ant-design/icons";
import { motion } from "framer-motion";

const Downloads = () => {
  const pdfFiles = [
    { name: "Project Report", url: "" },
    { name: "Research Paper", url: "" },
    { name: "Thesis", url: "" },
    { name: "Final Presentation", url: "" },
    { name: "Progress Report 1", url: "" },
    { name: "Progress Report 2", url: "" },
    { name: "Literature Review", url: "" },
    { name: "Survey Results", url: "" },
  ];

  const pptFiles = [
    { name: "Proposal Presentation", url: "/ppt/ProposalPresentation.pptx" },
    { name: "Progress Presentation I", url: "/ppt/ProgressPresentation1.pptx" },
    { name: "Progress Presentation II", url: "/ppt/Progress Presentation2.pptx" },
    { name: "Final Presentation", url: "" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.3, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="downloads-section bg-black text-white py-10 px-60" id="Downloads">
     
      <motion.p
          className="text-xl text-start mb-2 text-[#FF9500]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >Downloads</motion.p>
      
      <motion.p
          className="text-4xl font-bold text-start"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >Documents</motion.p>
      
      <motion.p
          className=" text-start mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >Please find all documents related to this project below.</motion.p>

      {/* PDFs */}

      <div>
        <motion.div
          className="pdf-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          // initial="hidden"
          animate="visible"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {pdfFiles.map((file, index) => (
            <motion.div key={index} variants={itemVariants} >
              <Card
                className="shadow-lg hover:shadow-2xl hover:animate-pulse transition duration-300"
                hoverable
                cover={
                  <FilePdfOutlined
                    style={{
                      fontSize: "40px",
                      color: "#f5222d",
                      marginTop: "4px",
                    }}
                  />
                }
                actions={[
                  <a
                    href={file.url}
                    download={file.name}
                    className="flex justify-center"
                  >
                    <DownloadOutlined /> Download
                  </a>,
                ]}
              >
                <Card.Meta title={file.name} />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* PPTs */}
      
      <motion.p
          className="text-4xl font-bold text-start mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >Presentations</motion.p>
      
      <motion.p
          className=" text-start mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >Please find all presentations related this project below.</motion.p>

      <div>
        <motion.div
          className="ppt-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          variants={containerVariants}
          // initial="hidden"
          animate="visible"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {pptFiles.map((file, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="shadow-lg hover:shadow-2xl hover:animate-pulse transition duration-300"
                hoverable
                cover={
                  <FilePptOutlined
                    style={{
                      fontSize: "40px",
                      color: "#fa8c16",
                      marginTop: "4px",
                    }}
                  />
                }
                actions={[
                  <a
                    href={file.url}
                    download={file.name}
                    className="flex justify-center"
                  >
                    <DownloadOutlined /> Download
                  </a>,
                ]}
              >
                <Card.Meta title={file.name} />
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Downloads;
