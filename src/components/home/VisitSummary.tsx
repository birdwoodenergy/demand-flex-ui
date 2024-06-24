import React from "react";
import {
  Typography,
  useTheme,
  Card,
  CardContent,
  Grid,
  Button,
} from "@mui/material";
import LinearProgressWithLabel from "./LinearProgressWithLabel";

const VisitSummary: React.FC = () => {
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
              Current visit summary
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant="body1">Site Name: ABC Site</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="body1">
              Date of Visit: <br />
              01/01/2022
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <LinearProgressWithLabel value={25} />
            <LinearProgressWithLabel value={50} />
            <LinearProgressWithLabel value={75} />
            <LinearProgressWithLabel value={100} />
          </Grid>
          <Grid item xs={12}>
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: "none" }}
            >
              Edit Visit Details
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default VisitSummary;
