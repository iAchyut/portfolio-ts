import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedCard from "../../ReusuableComponents/Card";
import Stack from "@mui/material/Stack";

const Experience = ({ reference }) => {
  let AwardsJSX = (
    <>
      <b>Deloitte</b>
      <ul>
        <li>
          <b>Outstanding Performance Award (2023)</b>
        </li>
        <li>
          <b>Applause Award (2024,2023,2022)</b>
        </li>
        <li>
          <b>Spot Award (2021, 2023)</b>
        </li>
      </ul>
      <br />
      <b>Accenture</b>
      <ul>
        <li>
          <b>Star Performer (2019)</b>
        </li>
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
        Awards
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

export default Experience;
