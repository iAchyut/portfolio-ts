import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedCard from "../../ReusuableComponents/Card";
import Stack from '@mui/material/Stack';

const SideProjects = ({reference}) => {
  return (
    <>
      <Typography ref={reference} variant="h6" gutterBottom sx={{ textAlign: "center" }}>
        Side Projects
      </Typography>
      <Stack style={{justifyContent:"center", alignItems:"center"}}>
        <OutlinedCard style={{ width: "95%", padding:1 }} />
        <OutlinedCard style={{ width: "95%" ,  padding:1}} />
        <OutlinedCard style={{ width: "95%" ,  padding:1}} />
        <OutlinedCard style={{ width: "95%" ,  padding:1}} />
      </Stack>
    </>
  );
};

export default SideProjects;