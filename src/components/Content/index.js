import React from "react";
import Experience from "./Experience";
import Awards from "./Awards"
import Certificates from "./Certificates"
import SideProjects from "./Side Projects";
import Education from "./Education";
import Skills from "./Skills";

const MainContent = ({ExpRef, AwardRef, CertiRef, SkillsRef,EducationRef,SideProjRef}) => {

 

  return (
    <>
      <Experience reference={ExpRef} />
      <Awards reference={AwardRef} />
      <Certificates reference={CertiRef} />
      <Skills reference={SkillsRef} />
      <Education reference={EducationRef} />
      <SideProjects reference={SideProjRef} />
    </>
  );
};

export default MainContent;