import React from "react";
import OutlinedCard from "../../ReusuableComponents/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";


const ContactMe = ({ reference }) => {
  return (
    <>
      <div style={{ height: "1000px", width: "95%" }}>
        <iframe
          ref={reference}
          src="https://docs.google.com/forms/d/e/1FAIpQLSfV1LeEmW5yvVvFDD3AuCH1giTKt7AyWgPNToKoqg1unZdDgQ/viewform?embedded=true"
          width="95%"
          height="100%"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
      <Divider width="95%" sx={{ margin: 5 }} />
    </>
  );
};

export default ContactMe;
