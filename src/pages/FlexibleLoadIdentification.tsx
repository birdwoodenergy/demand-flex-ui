import React from "react";
import { Box, Grid, TextField, Button } from "@mui/material";

const FlexibleLoadIdentification: React.FC = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2, textAlign: "left" }}>
      <Grid container spacing={2}>
        {/* Search Section */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Box
            sx={{ display: "flex", alignItems: "center", marginBottom: "16px" }}
          >
            <TextField label="Search" variant="outlined" fullWidth />
            <Button
              variant="contained"
              color="primary"
              sx={{ height: "56px", marginLeft: "5px" }}
            >
              Search
            </Button>
          </Box>
        </Grid>

        {/* Select Equipment Section */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <Button
            variant="contained"
            color="primary"
            sx={{ height: "56px" }}
            fullWidth
          >
            Select Equipment
          </Button>
        </Grid>

        {/* Spacer Grid Items */}
        <Grid item xs={12} sm={12} md={12} lg={12} />

        {/* Rating (kW) Textfield */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            label="Rating (kW)"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }} // Align label on top inside TextField
          />
        </Grid>

        {/* Current (A) Textfield */}
        <Grid item xs={12} sm={6} md={6} lg={6}>
          <TextField
            label="Current (A)"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }} // Align label on top inside TextField
          />
        </Grid>

        {/* Spacer Grid Items */}
        <Grid item xs={12} sm={12} md={12} lg={12} />

        {/* Usage Textfield and Buttons */}
        <Grid item xs={12}>
          <TextField
            label="Usage"
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }} // Align label on top inside TextField
          />
          <Box
            sx={{
              display: "flex",
              flexWrap: "wrap",
              marginTop: "8px",
              "& > button": {
                minWidth: "48px",
                margin: "4px",
              },
            }}
          >
            <Button variant="contained">M</Button>
            <Button variant="contained">T</Button>
            <Button variant="contained">W</Button>
            <Button variant="contained">T</Button>
            <Button variant="contained">F</Button>
            <Button variant="contained">S</Button>
            <Button variant="contained">S</Button>
          </Box>
        </Grid>

        {/* Spacer Grid Items */}
        <Grid item xs={12} sm={12} md={12} lg={12} />
        <Grid item xs={12} sm={12} md={12} lg={12} />
        <Grid item xs={12} sm={12} md={12} lg={12} />
        <Grid item xs={12} sm={12} md={12} lg={12} />
        <Grid item xs={12} sm={12} md={12} lg={12} />
        <Grid item xs={12} sm={12} md={12} lg={12} />

        {/* Add Notes Textarea */}
        <Grid item xs={12}>
          <TextField
            label="Add Notes"
            multiline
            rows={4}
            variant="outlined"
            fullWidth
            InputLabelProps={{ shrink: true }} // Align label on top inside TextField
          />
        </Grid>

        {/* Spacer Grid Items */}
        <Grid item xs={12} sm={12} md={12} lg={12} />

        {/* Save Progress Button */}
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ textAlign: "left" }}
          >
            Save Progress
          </Button>
        </Grid>

        {/* History Button */}
        <Grid item xs={6}>
          <Button
            variant="contained"
            color="primary"
            fullWidth
            sx={{ textAlign: "right" }}
          >
            Load History
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FlexibleLoadIdentification;
