import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedCard from "../../ReusuableComponents/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const Experience = ({ reference }) => {
  let DeloittejobJSX = (
    <>
      <ul>
        <li>
          <Typography variant="p" sx={{ fontWeight: "1" }}>
            Lead UI/UX team in architecting and developing an investment
            applications utilizing ReactJS, Router, Context API, Formik, AGGrid
            and SharePoint. (2000+ Active users across US, EU and APAC). Removed
            34 on-prem Servers from Application Infrastructure across all
            environments. Cost savings on product licensing (Nintex, Aspose etc)
          </Typography>
        </li>
        <li>
          Designed a portal to <b>track user activity</b>, including report
          visits, clicks, and bookmarks. Used graphs and grids to visualize this
          data and enable <b>informed business decision-making (1000+ Users)</b>
          .(Cient Appreciation Email)
        </li>
        <li>
          Served as Lead React Architect, designing app architecture, data flow,
          authentication, global states, and routing. Created AGGrid, Formik
          POCs, structured development in JIRA, and guided the team through
          project completion over 8 months.
        </li>
        <li>
          {" "}
          Developed an user activity tracking analytics portal for 1000+ users.
          Engineered the entire data pipeline, utilizing Snowflake for real-time
          data storage through custom stored procedures. Implemented .NET
          endpoints to transfer data to an interactive dashboard. Designed
          intuitive UI components with dynamic graphs and grids to visualize
          data, empowering informed business decision-making.
        </li>
        <li>
          Lead UI team to develop an internal Deloitte Initiative Dashboard for
          tracking vulnerabilities in cloud systems. Created Login/Logout,
          Grids, Graphs to view scan results from AWS S3. Ability to resolve
          vulnerabilities from UI, run scans and download detailed reports.
        </li>
      </ul>
    </>
  );

  let AccenturejobJSX = (
    <>
      <ul>
        <li>
          Leading a team of 4 developers for the development of web and desktop
          applications. Using HTML, CSS, Javascript, jQuery, XML, ASP.NET, C#,
          Web Services, SQL, Stored Procs, Views, SOAP and Windows services
        </li>

        <li>
          As Lead Developer, facilitated client communications, clarified
          requirements, and resolved team queries. Estimated timelines, guided
          development, addressed issues, and ensured timely delivery of all
          deliverables by resolving QA-reported bugs. (4+ releases/year
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
          Maintained defect reports and guided the team on defect trends. These
          trends were later used to minimize defects and root cause of it.
        </li>
        <li>
          Developed a website to visually display defects trends using
          HTML/CSS, SQL , Material UI and Nivo Library
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
        Experience
      </Typography>
      <Stack style={{ justifyContent: "center", alignItems: "center" }}>
        <OutlinedCard
          style={{ width: "95%", padding: 1 }}
          heading={"Deloitte | Senior Software Engineer"}
          secondaryHeading={"May 2021 - Present | Gurgaon, HY"}
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
        <Divider width="95%" sx={{ margin: 5 }} />
      </Stack>
    </>
  );
};

export default Experience;
