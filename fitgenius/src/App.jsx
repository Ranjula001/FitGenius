import React, {useState} from "react";
import NavBar from "./components/navBar";
import Header from "./components/header";
import ProjectScope from "./components/projectScope";
import Milestones from "./components/milestones";

function App() {

  return (
    <div>
      <NavBar/>
      <Header/>
      <ProjectScope/>
      <Milestones/>
    </div>
  );
}

export default App
