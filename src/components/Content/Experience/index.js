import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedCard from "../../ReusuableComponents/Card";
import Stack from "@mui/material/Stack";

const Experience = ({ reference }) => {
  let DeloittejobJSX = (
    <>
      <ul>
        <li>
          Lead client-side team in architecting and developing two investment
          application utilizing <b>ReactJS</b>, <b>React Router</b>,{" "}
          <b>Context API</b>, and <b>SharePoint</b>. (<b>2000+</b> Active users
          across US, EU and APAC)
        </li>
        <li>
          Designed a portal to <b>track user activity</b>, including report
          visits, clicks, and bookmarks. Used graphs and grids to visualize this
          data and enable <b>informed business decision-making (1000+ Users)</b>
          .
        </li>
        <li>
          <b>Lead UI team</b> to develop an internal Deloitte Initiative for
          trackcing vulnerabilities in cloud system. Created{" "}
          <b>Login/Logout, Grids, Graphs</b>, to view scan results from{" "}
          <b>AWS S3</b>
        </li>
        <li>
          {" "}
          Developed POC's in <b>AGGrid</b>, <b>Formik</b>, <b>Yup</b>,{" "}
          <b>Google Maps</b>, <b>Nivo Charts</b>, <b>MUI</b>.
        </li>
        <li>
          <b>Backend</b>: Developed endpoints using .NET Core and C#. Created
          stored procedures, views, and triggers in MySQL and Snowflake.
        </li>
      </ul>
    </>
  );

  let AccenturejobJSX = (
    <>
      <ul>
        <li>
          Leading a team of 4 developers for the development of web and desktop
          applications. Using{" "}
          <b>HTML, CSS, Javascript, jQuery, XML, ASP.NET, C#</b> and Windows
          services.
        </li>
        <li>
          Implementing web services using <b>SOAP and XML/HTTP</b> technologies.
        </li>
        <li>
          Scripting experience in Stored Procedure, Function, Trigger using MS
          SQL 2005/2008/Postgre
        </li>
        <li>
          Developved automations using{" "}
          <b>
            React, Redux, React Hooks, Router, Context API, JavaScript, HTML,
            CSS
          </b>
        </li>
      </ul>
    </>
  );

  let samsungBody = (
    <>
      <ul>
        <li>
          Worked on minimizing the defects for PCB and analyzing data to predict
          the root cause of issues.
        </li>
        <li>
          Maintaining reports for defects and enhancements that can be done.
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
        Experience
      </Typography>
      <Stack style={{ justifyContent: "center", alignItems: "center" }}>
        <OutlinedCard
          style={{ width: "95%", padding: 1 }}
          heading={"Deloitte | Senior Software Engineer"}
          secondaryHeading={"May 2021 - Present (3y4m) | Gurgaon, HY"}
          body={DeloittejobJSX}
        />
        <OutlinedCard
          style={{ width: "95%", padding: 1 }}
          heading={"Accenture | Software Analyst"}
          secondaryHeading={"Mar 2018 - May 2021 | Mumbai, MH"}
          body={AccenturejobJSX}
        />
        <OutlinedCard
          style={{ width: "95%", padding: 1 }}
          heading={"Samsung | PQC Engineer"}
          secondaryHeading={"Sept 2017 - Mar 2018 | Noida, UP"}
          body={samsungBody}
        />
      </Stack>
    </>
  );
};

export default Experience;
