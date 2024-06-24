import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedCard from "../../ReusuableComponents/Card";
import Stack from "@mui/material/Stack";

const Skills = ({ reference }) => {
  let SkillJSX = (
    <>
      <ul>
        <li></li>
      </ul>
    </>
  );
  
  return (
    <>
      <Typography
        ref={reference}
        variant="h6"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Skills
      </Typography>
      <Stack style={{ justifyContent: "center", alignItems: "center" }}>
        <OutlinedCard
          style={{ width: "95%", padding: 1 }}
          heading={"IT Awards"}
          secondaryHeading={"2018 - Present"}
          body={AwardsJSX}
        />
      </Stack>
    </>
  );
};

export default Skills;
