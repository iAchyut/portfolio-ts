import React from "react";
import Typography from "@mui/material/Typography";
import OutlinedCard from "../../ReusuableComponents/Card";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import AvatarChips from "../../ReusuableComponents/Chip";
import ReactIcon from "./../../../Assets/react.png"
import JSIcon from "./../../../Assets/javascript.svg"
import Webpacksvg from "./../../../Assets/webpack.svg"
import htmlSVG from "./../../../Assets/html.png"
import cssSVG from "./../../../Assets/css.png"
import mysqlSVG from "./../../../Assets/mysql.svg"
import postgreSVG from "./../../../Assets/postgre.png"
import snowflakeSVG from "./../../../Assets/snowflake.png"
import nodejsPNG from "./../../../Assets/nodejs.png"
import netPNG from "./../../../Assets/net.png"
import graphql from "./../../../Assets/graphql.png"
import Sharepoint from "./../../../Assets/sharepoint.png"
import aws from "./../../../Assets/aws.png"
import Docker from "./../../../Assets/docker.png"
import native from "./../../../Assets/native.jpeg"

const Skills = ({ reference }) => {
  return (
    <>
      <Typography
        ref={reference}
        variant="h5"
        gutterBottom
        sx={{ textAlign: "center" }}
      >
        Skills
      </Typography>
      <OutlinedCard
        style={{ width: "95%", padding: 1, height:"fit-content" }}
        heading={""}
        secondaryHeading={""}
        overRideContent={
          <Stack
            direction={"row"}
            spacing={1}
            gap={1}
            style={{
              display:"flex",
              justifyContent: "center",
              alignItems: "center",
              height: "auto",
              flexWrap:"wrap"
            }}
          >
            <AvatarChips label={"React"} icon={ReactIcon}/>
            <AvatarChips label={"JavaScript"} icon = {JSIcon} />
            <AvatarChips label={"Webpack"} icon ={Webpacksvg}/>
            <AvatarChips label={"HTML"} icon={htmlSVG}/>
            <AvatarChips label={"CSS"} icon={cssSVG}/>
            <AvatarChips label={"MySQL"} icon={mysqlSVG}/>
            <AvatarChips label={"PostGRE"} icon={postgreSVG}/>
            <AvatarChips label={"Snowflake"} icon={snowflakeSVG}/>
            <AvatarChips label={"NodeJS"} icon={nodejsPNG}/>
            <AvatarChips label={".Net"} icon={netPNG}/>
            <AvatarChips label={"GraphQL"} icon={graphql}/>
            <AvatarChips label={"MS Sharepoint"} icon={Sharepoint} />
            <AvatarChips label={"AWS"} icon={aws}/>
            <AvatarChips label={"Docker"} icon={Docker} />
            <AvatarChips label={"React Native"} icon={native} />
            <Divider width="95%" sx={{margin:5}}/>
          </Stack>
        }
      />
    </>
  );
};

export default Skills;
