import React from "react";
import OUT from "./../../../Assets/out.PNG";
import AHM from "./../../../Assets/AHM.PNG";
import sparkle from "./../../../Assets/sparkle.PNG";
import { Stack, Typography, Divider } from "@mui/material";

const Recongnitions = ({ reference }) => {
  return (
    <>
      <Typography
        ref={reference}
        variant="h5"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Recongnitions
      </Typography>
      <Stack
        ref={reference}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        spacing={3}
      >
        <img src={OUT} width={200} height={500} />
        <img src={AHM} width={400} height={400} />
        <img src={sparkle} width={500} height={300} />
      </Stack>
      <Divider width="95%" sx={{ margin: 5 }} />
    </>
  );
};

export default Recongnitions;
