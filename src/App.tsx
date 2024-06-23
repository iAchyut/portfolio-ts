import * as React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import NavBar from "./components/Navbar";
import MainContent from "./components/Content";

export const ColorModeContext = React.createContext({
  toggleColorMode: () => {},
});

export default function ToggleColorMode() {
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
          style={{ width: "100%", minHeight: "100vh", margin: 0, padding: 0 }}
        >
          <Grid item xs={2} style={{ padding: 0 }}>
            <NavBar />
          </Grid>
          <Grid item xs={10} style={{ padding: 0 }}>
           <MainContent/>
          </Grid>
        </Grid>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
