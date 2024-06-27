import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedCard from "../../ReusuableComponents/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const Experience = ({ reference }) => {
  let AwardsJSX = (
    <>
      <b>Deloitte</b>
      <ul>
        <li>
          <b>Outstanding Performance Award (2023)</b> <br/>
          This award was given for leading the full stack development of an app's entire UI, including POCs, grids, forms, API integration, and MySQL, and successfully delivering it in UAT, helping the client get back on track for user delivery.
        </li>
        <br/>
        <li>
          <b>Applause Award (2024,2023,2022)</b>
          <br/>
          <b>2024:</b> Awarded for successfully delivering an Activity Tracking Dashboard built on React and Snowflake. It tracked user activities like clicks in real-time, storing details in Snowflake, and displayed trends through graphs to help admins make informed business decisions.
          <br/>
          <br/>
          <b>2023:</b> Awarded for delivering the DMS Application App, where I led the UI team, designed the architecture and data flow, and spearheaded the development and delivery of the entire app.
          <br/>
          <br/>
          <b>2022:</b> Awarded for assisting teammates with React POCs to ensure timely delivery and training a group of four developers in React.
          <br/>
          <br/>
        </li>
        <li>
          <b>Spot Award (2021, 2023)</b>
          <br/>
          <b>2023:</b> Awarded for leading an internal Deloitte initiative to develop a website for tracking cloud system vulnerabilities, displaying them through graphs and grids, and resolving them via the UI.
          <br/>
          <br/>
          <b>2022:</b> Awarded for successfully delivering Proxy App for the client, where I built grids, forms, navigation, and authentication.
          <br/>
        </li>
      </ul>
      <br />
      <b>Accenture</b>
      <ul>
        <li>
          <b>Star Performer (2019)</b>
          <br/>
          <b>2019:</b> Awarded for driving multiple releases to PROD, leading client calls, spearheading development with two junior devs, and receiving positive client feedback.
          <br/>
        </li>
      </ul>
    </>
  );

  return (
    <>
      <Typography
        ref={reference}
        variant="h5"
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
         <Divider width="95%" sx={{margin:5}}/>
      </Stack>
    </>
  );
};

export default Experience;
