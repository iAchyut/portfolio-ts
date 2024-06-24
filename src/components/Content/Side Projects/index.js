import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedCard from "../../ReusuableComponents/Card";
import Stack from "@mui/material/Stack";

const SideProjects = ({ reference }) => {
  let BankAppJSX = (
    <>
      <ul>
        <li>
          An app to store text, images, videos and Memo in an encrypted way on
          the server. Users can click Images/Videos and save it on the server.
        </li>
        <li>
          Developed multiple App screens-{" "}
          <b>Login/Logout, Upload/Delete, Profile Screen Forgot Password</b> and
          entire App workflow on <b>FIGMA</b>.
        </li>
        <li>Context API used to manage global state.</li>
        <li>
          Technology :{" "}
          <b>
            React Native, CSS, JavaScript, PostGreSQL, Node JS, Context API.
            Cookie based Authentication, Figma, Expo
          </b>
        </li>
      </ul>
    </>
  );

  let Covid19JSX = <>
  <ul>
    <li>
    Developed a small quiz to spread the awareness about the Covid 19.
    </li>
    <li>
    SPA was designed using React JS and Figma, Deployed on Netlify
    </li>
    <li>
      <a href="https://covid19quiz.netlify.app/" target="_blank"> Covid 19 Quiz App</a>
    </li>
  </ul>
  </>;

  return (
    <>
      <Typography
        ref={reference}
        variant="h6"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Side Projects
      </Typography>
      <Stack style={{ justifyContent: "center", alignItems: "center" }}>
        <OutlinedCard
          style={{ width: "95%", padding: 1 }}
          heading={"BankApp | React Native Developer"}
          secondaryHeading={"Feb 2021 - June 2021"}
          body={BankAppJSX}
        />
        <OutlinedCard
          style={{ width: "95%", padding: 1 }}
          heading={"Covid 19 Quiz App | React Developer"}
          secondaryHeading={"April 2020"}
          body={Covid19JSX}
        />
      </Stack>
    </>
  );
};

export default SideProjects;
