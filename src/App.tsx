import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MainApplication from "./components/layout/MainApplication";
import { BrowserRouter as Router } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#001B40',
    },
    secondary: {
      main: '#EA5449  ',
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
