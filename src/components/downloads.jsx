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
    { name: "Topic Assessment", type1: "Group", type2: "", date: "Submitted Date - 2024/01/18", url: "https://drive.google.com/file/d/1jnbRLTUTtMjWmJla-RbCdI0xhxkEyKgq/view?usp=sharing", devider:"" },
    { name: "Project Charter", type1: "Group", type2: "", date: "Submitted Date - 2024/02/19", url: "", devider:"" },
    { name: "Project Proposal", type1: "", type2: "Individual", date: "Submitted Date - 2024/02/29", url: "https://drive.google.com/drive/folders/1J6eRSFM-b3tde3tlmsRkRz1NQSm2yiSk?usp=sharing", devider:"" },
    { name: "Status Document I", type1: "", type2: "Individual", date: "Submitted Date - 2024/05/06", url: "https://drive.google.com/drive/folders/1LDWp8nckV8GeSbx_CaV0IULqqQKE5zym?usp=sharing", devider:"" },
    { name: "Status Document II", type1: "", type2: "Individual", date: "Submitted Date - 2024/09/11", url: "https://drive.google.com/drive/folders/14wuk0iPVqg1of3BjJ28Xw9FI10ZTbSvJ?usp=sharing", devider:"" },
    { name: "Research Paper", type1: "Group", type2: "", date: "Submitted Date - 2024/06/14", url: "https://drive.google.com/drive/folders/1wr_wiJngX3LssG7ay49C2nQ2ZyrQUZO6?usp=sharing", devider:"" },
    { name: "Final Report", type1: "Group", type2: "Individual", date: "Submitted Date - 2024/08/23", url: "https://drive.google.com/drive/folders/1V3ovkX4ZxKnSJJItRtLupPT0L8zC56ep?usp=sharing" , devider:"/"},
    { name: "Poster", type1: "Group", type2: "", date: "Submitted Date - 2024/10/13", url: "https://drive.google.com/drive/folders/1K5LnG-3HdMnaCJVZwamgF6ynW0nvYuVF?usp=sharing" },
  ];

  const pptFiles = [
    { name: "Proposal Presentation", url: "https://docs.google.com/presentation/d/1f5-KlmuA21KESFRTQNcF20wsfRPNxaFS/edit?usp=sharing" },
    { name: "Progress Presentation I", url: "https://docs.google.com/presentation/d/1xMSs-cMwa_aiY--tGKN6qGkOB77csHbm/edit?usp=sharing" },
    { name: "Progress Presentation II", url: "https://docs.google.com/presentation/d/1d_vESQWf30H-DfLQQdvXVCI83g-x8IJY/edit?usp=sharing" },
    { name: "Final Presentation", url: "https://drive.google.com/drive/folders/1_48z-xRBVdO_3QFwnG46Wg6R65AA9LSt?usp=sharing" },
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
    <div className="downloads-section bg-black text-white py-10 px-4 md:px-20 lg:px-60" id="Downloads">
      {/* Title and Description */}
      <motion.p
        className="text-xl text-start mb-2 text-[#FF9500]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Downloads
      </motion.p>
      
      <motion.p
        className="text-4xl font-bold text-start"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Documents
      </motion.p>
      
      <motion.p
        className="text-start mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Please find all documents related to this project below.
      </motion.p>

      {/* PDFs Section */}
      <div>
        <motion.div
          className="pdf-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={containerVariants}
          animate="visible"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {pdfFiles.map((file, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card
                className="shadow-lg hover:shadow-2xl hover:animate-pulse transition duration-300"
                hoverable
                cover={
                  <FilePdfOutlined
                    style={{
                      fontSize: "40px",
                      color: "#f5222d",
                      marginTop: "4px",
                      textAlign: "center",
                    }}
                  />
                }
                actions={[
                  <a
                    href={file.url}
                    target="_blank"  // Opens link in new tab
                    rel="noopener noreferrer"  // Security enhancement
                    className="flex justify-center"
                  >
                    <DownloadOutlined /> Download
                  </a>,
                ]}
              >
                <Card.Meta title={file.name} />
                <div className="mt-2 text-sm flex">
                  <div className="text-blue-600">{file.type1}</div>
                  <div className="text-gray-400">{file.devider}</div>
                  <div className="text-green-500">{file.type2 && `${file.type2}`}</div>
                </div>
                <p className="mt-2 text-gray-400 text-sm">
                {file.date}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* PPT Section */}
      <motion.p
        className="text-4xl font-bold text-start mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Presentations
      </motion.p>
      
      <motion.p
        className="text-start mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        Please find all presentations related to this project below.
      </motion.p>

      <div>
        <motion.div
          className="ppt-section grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10"
          variants={containerVariants}
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
                      textAlign: "center",
                    }}
                  />
                }
                actions={[
                  <a
                    href={file.url}
                    target="_blank"  // Opens link in new tab
                    rel="noopener noreferrer"  // Security enhancement
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