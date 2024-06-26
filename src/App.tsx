import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import NavBar from "./components/Navbar";
import MainContent from "./components/Content";
import bg from "./Assets/bg5.jpg";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ToggleColorMode() {
  const ExpRef = React.useRef(null);
  const AwardRef = React.useRef(null);
  const CertiRef = React.useRef(null);
  const SkillsRef = React.useRef(null);
  const EducationRef = React.useRef(null);
  const SideProjRef = React.useRef(null);
  const IntroRef = React.useRef(null);

  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          text: {
            primary: "#000",
            secondary: "#000",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <Grid
          container
          direction={"row"}
          spacing={2}
          style={{
            width: "100%",
            minHeight: "100vh",
            margin: 0,
            padding: 0,
            position: "relative",
            //backgroundColor:"#222629",
            //backgroundColor:"#222629",
            //backgroundImage:`url(${bg})`
          }}
        >
          <Grid
            item
            xs={3}
            style={{
              width: "13%",
              height: "100vh",
              margin: 0,
              padding: 0,
              justifyContent: "center",
              alignItems: "center",
              //backgroundColor:"#222629",
              backgroundColor: "#314455",
              position: "fixed",
            }}
          >
            <NavBar
              ExpRef={ExpRef}
              AwardRef={AwardRef}
              CertiRef={CertiRef}
              SkillsRef={SkillsRef}
              EducationRef={EducationRef}
              SideProjRef={SideProjRef}
              IntroRef={IntroRef}
            />
          </Grid>
          <Grid item xs={2} style={{ padding: 0 }}>
            <></>
          </Grid>
          <Grid item xs={10} style={{ padding: 0 }}>
            <MainContent
              ExpRef={ExpRef}
              AwardRef={AwardRef}
              CertiRef={CertiRef}
              SkillsRef={SkillsRef}
              EducationRef={EducationRef}
              SideProjRef={SideProjRef}
              IntroRef={IntroRef}
            />
          </Grid>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
