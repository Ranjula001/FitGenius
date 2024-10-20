import React, { useEffect } from "react";
import { motion } from "framer-motion";
import "./aboutUs.css";
import member1 from "../images/team/image1.png"; // Replace with actual image paths
import member2 from "../images/team/image2.png";
import member3 from "../images/team/image3.png";
import member4 from "../images/team/image4.png";
import member5 from "../images/team/image5.png";
import member6 from "../images/team/image6.png";
import member7 from "../images/team/image7.png";

const Supervisors = [
  {
    name: "Prof. Koliya Pulasinghe",
    title: "Supervisor",
    descriptionLine1: "Sri Lanka Institute of Information Technology",
    descriptionLine2: "Department of Information Technology",
    scholar: "#",
    email: "koliya.p@sliit.lk",
    linkedin: "#",
    image: member1,
  },
  {
    name: "Jenny Krishara",
    title: "Co-Supervisor",
    descriptionLine1: "Sri Lanka Institute of Information Technology",
    descriptionLine2: "Department of Information Technology",
    scholar: "#",
    email: "jenny.k@sliit.lk",
    linkedin: "#",
    image: member2,
  },
  {
    name: "Mr. Chandana Thilakarathne",
    title: "External Supervisor",
    descriptionLine1: "Personal Trainer",
    descriptionLine2: "Zimantra Leisure Center",
    linkedin: "#",
    email: "#",
    image: member3,
  },
];

const teamMembers = [
  {
    name: "Ilukpitiya I.M.D.J.R. B",
    title: "Group Leader",
    descriptionLine1: "Sri Lanka Institute of Information Technology",
    descriptionLine2: "Department of Information Technology",
    linkedin: "https://www.linkedin.com/in/ranjula-ilukpitiya-95b407226/",
    email: "it21011016@my.sliit.lk",
    image: member4,
  },
  {
    name: "Herath H.M.R. B",
    title: "Group Member",
    descriptionLine1: "Sri Lanka Institute of Information Technology",
    descriptionLine2: "Department of Information Technology",
    linkedin: "http://linkedin.com/in/rusiru-bandara-herath-36889225b",
    email: "it21002106@my.sliit.lk",
    image: member5,
  },
  {
    name: "Herath M.H.S.M.",
    title: "Group Member",
    descriptionLine1: "Sri Lanka Institute of Information Technology",
    descriptionLine2: "Department of Information Technology",
    linkedin: "https://www.linkedin.com/in/sandali-herath-08769a224",
    email: "it21114144@my.sliit.lk",
    image: member6,
  },
  {
    name: "Rajakaruna R.H.M.S.A.",
    title: "Group Member",
    descriptionLine1: "Sri Lanka Institute of Information Technology",
    descriptionLine2: "Department of Information Technology",
    linkedin: "https://www.linkedin.com/in/asvini-rajakaruna-891784255/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    email: "it21128936@my.sliit.lk",
    image: member7,
  },
];

const AboutUs = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate");
          } else {
            entry.target.classList.remove("animate");
          }
        });
      },
      { threshold: 0.1 }
    );

    // Ensure the elements exist before observing
    const teamMembers = document.querySelectorAll(".team-member");
    const sectionTitle = document.querySelector(".section-title");

    if (teamMembers.length > 0) {
      teamMembers.forEach((el) => observer.observe(el));
    }

    if (sectionTitle) {
      observer.observe(sectionTitle);
    }

    return () => {
      observer.disconnect(); // Clean up observer on component unmount
    };
  }, []);

  return (
    <div>
      <section id="about-us" className="about-us px-52">
        <div className="mb-10 px-10">
          <motion.p
            className="text-xl my-2 text-start text-[#FF9500]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            {" "}
            About Us
          </motion.p>
          <motion.p
            className="text-4xl my-2 text-white font-bold text-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0 }}
          >
            {" "}
            Meet Our Team !{" "}
          </motion.p>
        </div>

        <motion.div
          className="space-y-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5 }}
        >
          <div className="team-grid grid grid-cols-3 gap-4 px-10">
            {Supervisors.map((member, index) => (
              <div className="team-supervisor" key={index}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <span className="role-supervisor"> {member.title} </span>
                <p>{member.descriptionLine1}</p>
                <p>{member.descriptionLine2}</p>
                <div className="social-links">
                  {member.scholar && <a href={member.scholar}>G-Scholar</a>}
                  {member.email && <a href={`mailto:${member.email}`}>Email</a>}
                  {member.linkedin && (
                    <a href={member.linkedin} className="text-[#0A66C2]">
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-4 gap-4 px-10">
            {teamMembers.map((member, index) => (
              <div className="team-member" key={index}>
                <img src={member.image} alt={member.name} />
                <h3>{member.name}</h3>
                <span className="role"> {member.title} </span>
                <p>{member.descriptionLine1}</p>
                <p>{member.descriptionLine2}</p>
                <div className="social-links">
                  {member.scholar && <a href={member.scholar}>G-Scholar</a>}
                  {member.email && <a href={`mailto:${member.email}`}>Email</a>}
                  {member.linkedin && (
                    <a href={member.linkedin} className="text-[#0A66C2]">
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default AboutUs;
