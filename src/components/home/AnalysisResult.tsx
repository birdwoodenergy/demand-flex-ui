import React from "react";
import {
  Typography,
  useTheme,
  Card,
  CardContent,
  Grid,
} from "@mui/material";
import LinearProgressWithLabelROI from "./LinearProgressWithLabelROI";

const AnalysisResult: React.FC = () => {
  const theme = useTheme();

  return (
    <Card
      elevation={3}
      sx={{ margin: "auto", marginTop: theme.spacing(4), textAlign: "left" }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6" fontWeight="bold" gutterBottom>
              Result of Analysis - Loading....
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">
              XXX Load Identified <br />
              Capital Expense
              $ XXX
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LinearProgressWithLabelROI value={25} label={"ROI"} />
            <LinearProgressWithLabelROI value={25} label={"Playback"} />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AnalysisResult;
