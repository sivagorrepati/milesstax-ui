import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
import ColorModeContext from "./components/ColorModeContext";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";

export default function App() {
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
        <CssBaseline />
        <Header />
        <Dashboard />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
