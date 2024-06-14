import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { green, purple } from "@mui/material/colors";
import CssBaseline from "@mui/material/CssBaseline";
import MainApplication from "./components/layout/MainApplication";
import { BrowserRouter as Router } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: green[500],
    },
  },
});

const App: React.FC = () => {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <MainApplication />
      </ThemeProvider>
    </Router>
  );
};

export default App;
