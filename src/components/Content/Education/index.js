import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedCard from "../../ReusuableComponents/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";

const Education = ({ reference }) => {
  let SMVDUjsx = (
    <>
      <ul>
        <li>College of Engineering</li>
        <li>Electronics and Communication Engineering</li>
        <li>CGPA :<b>7.31/10.00</b> </li>
      </ul>
    </>
  );

  let CMSjsx = (
    <>
      <ul>
        <li>10th : 89.5%</li>
        <li>12th : 89.2%</li>
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
        Education
      </Typography>
      <Stack style={{ justifyContent: "center", alignItems: "center" }}>
        <OutlinedCard
          style={{ width: "95%", padding: 1 }}
          heading={"Shri Mata Vaishno Devi University | Jammu & Kashmir"}
          secondaryHeading={"May 2013 - June 2017"}
          body={SMVDUjsx}
        />
        <OutlinedCard
          style={{ width: "95%", padding: 1 }}
          heading={"City Montessori School | Lucknow, UP"}
          secondaryHeading={"April 1998 - May 2013"}
          body={CMSjsx}
        />
        <Divider width="95%" sx={{ margin: 5 }} />
      </Stack>
    </>
  );
};

export default Education;
