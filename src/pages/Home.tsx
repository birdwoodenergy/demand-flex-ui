import React from "react";
import {
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import VisitSummary from "../components/home/VisitSummary";
import ProgressButtons from "../components/home/ProgressButtons";
import AnalysisResult from "../components/home/AnalysisResult";

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <Typography
        variant={isMobile ? "h5" : "h2"}
        fontWeight="bold"
        sx={{
          marginBottom: theme.spacing(2),
        }}
      >
        Welcome to the World of Demand Flex
      </Typography>
      <Typography variant={isMobile ? "body2" : "h6"} gutterBottom>
        This page is designed to help you navigate through the process of
        identifying demand flex.
      </Typography>
      <VisitSummary />
      <ProgressButtons />
      <AnalysisResult />
    </div>
  );
};

export default Home;
