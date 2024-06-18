import React from "react";
import {
  Typography,
  useTheme,
  useMediaQuery,
  Card,
  CardContent,
  Grid,
  LinearProgress,
  Button,
} from "@mui/material";

const Home: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const LinearProgressWithLabel: React.FC<{ value: number }> = ({ value }) => {
    // Calculate the left position dynamically based on the progress value
    let leftPosition = `calc(${value}% - 100px)`; // Adjust the offset as needed

    // Ensure a minimum left position for readability on mobile
    if (isMobile && value < 60) {
      leftPosition = "20%";
    }

    return (
      <div style={{ position: "relative", height: 20, marginBottom: 5 }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{ borderRadius: 5, height: 20 }}
        />
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            top: 0,
            left: leftPosition,
            transform: "translateX(-50%)",
            color: "white",
          }}
        >
          {`${value}% complete`}
        </Typography>
      </div>
    );
  };

  const LinearProgressWithLabelROI: React.FC<{ value: number, label: string }> = ({ value, label }) => {
    // Calculate the left position dynamically based on the progress value
    let leftPosition = `calc(${value}% - 100px)`; // Adjust the offset as needed

    // Ensure a minimum left position for readability on mobile
    if (isMobile && value < 60) {
      leftPosition = "20%";
    }

    return (
      <div style={{ position: "relative", height: 20, marginBottom: 5 }}>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{ borderRadius: 5, height: 20 }}
        />
        <Typography
          variant="body2"
          sx={{
            position: "absolute",
            top: 0,
            left: leftPosition,
            transform: "translateX(-50%)",
            color: "white",
          }}
        >
          {`${label}`}
        </Typography>
      </div>
    );
  };

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
              {/* Edit Button */}
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
      <Card
        elevation={3}
        sx={{ margin: "auto", marginTop: theme.spacing(4), textAlign: "left" }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {/* Edit Button */}
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "none" }}
              >
                Save Progress
              </Button>
            </Grid>
            <Grid item xs={6} textAlign="right">
              {/* Edit Button */}
              <Button
                variant="contained"
                color="primary"
                sx={{ textTransform: "none" }}  
              >
                History
              </Button>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
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
                XXX Load Identified <br/>
                Capital Expense
                $ XXX
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <LinearProgressWithLabelROI value={25} label={"ROI"}/>
              <LinearProgressWithLabelROI value={25} label={"Playback"}/>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
