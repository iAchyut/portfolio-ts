import { Paper, Typography } from "@mui/material";
import React from "react";

const Introduction = (props) => {
  return (
    <>
      <div
        ref={props.reference}
        style={{
          height: "95vh",
          width: "90%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "15px",
          margin: "10px",
        }}
      >
        <Typography variant="h1" style={{ fontSize: "4rem" }}>Achyut Mishra</Typography>
        <Typography variant="p" >
          Helping clients to build complex web applications, developing POC's
          and building React App Architecture / Data flow. Coding on React JS
          framework, Redux, Context, React Router, JavaScript, HTML, CSS, .Net
          Core, Snowflake, Sharepoint
        </Typography>
      </div>
    </>
  );
};

export default Introduction;
