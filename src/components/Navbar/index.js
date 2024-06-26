import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import { useTheme, ThemeProvider, createTheme } from "@mui/material/styles";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import Grid from "@mui/material/Grid";
import { ColorModeContext } from "../../App";
import Typography from "@mui/material/Typography";
import { Divider } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import listData from "./Data/ListData";
import { primaryColor } from "../../Constants/color";

export default function MyApp({
  ExpRef,
  AwardRef,
  CertiRef,
  SkillsRef,
  EducationRef,
  SideProjRef,
  IntroRef,
}) {
  const theme = useTheme();
  const colorMode = React.useContext(ColorModeContext);
  let refMapping = {
    Experience: ExpRef,
    Awards: AwardRef,
    Certificates: CertiRef,
    Skills: SkillsRef,
    Education: EducationRef,
    "Side Projects": SideProjRef,
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          gcolor: "rgba(0,0,0,0)",
          //color: "text.primary",
          color: "#fff",
          borderRadius: 1,
          padding: 0,
          flexDirection: "row",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "100%",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "rgba(0,0,0,0)",
            //color: "text.primary",
            color: "#fff",
            borderRadius: 1,
            padding: 0,
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h6"
            gutterBottom
            sx={{cursor:"pointer"}}
            onClick={() => {
              IntroRef?.current?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            <b>Achyut Mishra</b>
          </Typography>
          <Typography
            variant="p"
            fontSize={12}
            gutterBottom
            sx={{ textAlign: "center" }}
          >
            Senior Software Enginner, Deloitte
          </Typography>
          <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "rgba(0,0,0,0)" }}>
            <nav aria-label="secondary mailbox folders">
              <List dense={true}>
                {listData.map((item, index) => {
                  return (
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() =>
                          refMapping[item]?.current?.scrollIntoView({
                            behavior: "smooth",
                          })
                        }
                      >
                        <ListItemText
                          sx={{ textAlign: "center", fontSize: 10 }}
                          primary={item}
                        />
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </nav>
          </Box>
        </Box>
        {/* <Divider orientation="vertical" /> */}
      </Box>
    </>
  );
}
