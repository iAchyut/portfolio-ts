import * as React  from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import NavBar from "./components/Navbar";
import MainContent from "./components/Content";

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
          style={{ width: "100%", minHeight: "100vh", margin: 0, padding: 0, position:'relative' }}
        >
          <Grid item xs={3} style={{ width:"13%", height:"100vh", margin: 0, padding: 0,
           justifyContent:"center", alignItems:"center" , 
           backgroundColor:"#538392",
           position:"fixed"}}>
            <NavBar ExpRef={ExpRef} AwardRef={AwardRef} CertiRef={CertiRef} 
            SkillsRef={SkillsRef} 
            EducationRef={EducationRef} 
            SideProjRef={SideProjRef}
            />
          </Grid>
          <Grid item xs={2} style={{ padding: 0 }}>
           <></>
          </Grid>
          <Grid item xs={10} style={{ padding: 0 }}>
           <MainContent ExpRef={ExpRef} AwardRef={AwardRef} CertiRef={CertiRef}
           SkillsRef={SkillsRef} 
           EducationRef={EducationRef} 
           SideProjRef={SideProjRef}/>
          </Grid>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
