import React from "react";
import Experience from "./Experience";
import Awards from "./Awards";
import Certificates from "./Certificates";
import SideProjects from "./Side Projects";
import Education from "./Education";
import Skills from "./Skills";
import Grow from "@mui/material/Grow";

const MainContent = ({
  ExpRef,
  AwardRef,
  CertiRef,
  SkillsRef,
  EducationRef,
  SideProjRef,
}) => {
  return (
    <>
      <Grow in={true} timeout={1000}>
        {
          <div>
            <Experience reference={ExpRef} />
            <SideProjects reference={SideProjRef} />
            <Awards reference={AwardRef} />
            <Certificates reference={CertiRef} />
            <Skills reference={SkillsRef} />
            <Education reference={EducationRef} />
          </div>
        }
      </Grow>
    </>
  );
};

export default MainContent;
