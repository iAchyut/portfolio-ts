import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedCard from "../../ReusuableComponents/Card";
import Stack from '@mui/material/Stack';

const Experience = ({reference}) => {
  return (
    <>
      <Typography ref={reference} variant="h6" gutterBottom sx={{ textAlign: "center" }}>
        Experience
      </Typography>
      <Stack style={{justifyContent:"center", alignItems:"center"}}>
        <OutlinedCard style={{ width: "95%", padding:1 }} heading={"Deloitte"}/>
        <OutlinedCard style={{ width: "95%" ,  padding:1}} heading={"Accenture"}/>
        <OutlinedCard style={{ width: "95%" ,  padding:1}} heading={"Samsung"}/>
      </Stack>
    </>
  );
};

export default Experience;
