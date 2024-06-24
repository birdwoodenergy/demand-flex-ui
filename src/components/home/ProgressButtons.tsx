// ProgressButtons.tsx
import React from "react";
import { Card, CardContent, Grid, Button, useTheme } from "@mui/material";

const ProgressButtons: React.FC = () => {
  const theme = useTheme();

  return (
    <Card
      elevation={3}
      sx={{ margin: "auto", marginTop: theme.spacing(4), textAlign: "left" }}
    >
      <CardContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <Button
              variant="contained"
              color="primary"
              sx={{ textTransform: "none" }}
            >
              Save Progress
            </Button>
          </Grid>
          <Grid item xs={6} textAlign="right">
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
  );
};

export default ProgressButtons;
