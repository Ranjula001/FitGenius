import React, {useState} from "react";
import NavBar from "./components/navBar";
import Header from "./components/header";
import ProjectScope from "./components/projectScope";
import Milestones from "./components/milestones";
import Downloads from "./components/downloads";
import ResearchGap from "./components/researchgap";
import AboutUs from "./components/aboutUs";
import ContactUs from "./components/contactUs";
import ProblemSolution from "./components/problemSolution";
import ResearchObjectives from "./components/researchObjectives";
import Methodology from "./components/methodology";
import Technologies from "./components/technologies";

function App() {

  return (
    <div>
      <NavBar/>
      <Header/>
      <ProjectScope/>
      <ResearchGap/>
      <ProblemSolution/>
      <ResearchObjectives/>
      <Methodology/>
      <Technologies/>
      <Milestones/>
      <Downloads/>
      <AboutUs/>
      <ContactUs/>
    </div>
  );
}

export default App;