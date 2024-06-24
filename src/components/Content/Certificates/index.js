import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedCard from "../../ReusuableComponents/Card";
import Stack from "@mui/material/Stack";

const Certificates = ({ reference }) => {
  let CertificateJSX = (
    <>
      <b>Course and Certificates</b>
      <li>
        <b>ReactJs : Udemy</b>
      </li>
      <li>
        <b>AWS : Cloud Practitioner</b>
      </li>
      <li>
        <b>Machine Learning : CourseEra</b>
      </li>
      <li>
        <b>Data Science : DataCamp</b>
      </li>
      <li>
        <b>Azure Fundamentals : AZ-900</b>
      </li>
      <li>
        <b>Python (Gold) : HackerRank</b>
      </li>
      <br />
      <b>Extra Curricular</b>
      <ul>
        <li>3rd Position: All India University Esports 2017</li>
        <li>Fitness Competition (Plank) 2019</li>
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
        Certificates
      </Typography>
      <Stack style={{ justifyContent: "center", alignItems: "center" }}>
        <OutlinedCard
          style={{ width: "95%", padding: 1 }}
          heading={"IT Awards"}
          secondaryHeading={"2018 - Present"}
          body={CertificateJSX}
        />
      </Stack>
    </>
  );
};

export default Certificates;
