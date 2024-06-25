import React from 'react';
import { Grid, Checkbox, FormControlLabel, TextField, Typography, Button } from '@mui/material';

const SolarBattery: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {/* Heading title 'Solar Identification' */}
      <Grid item xs={12}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
          Solar Identification
        </Typography>
      </Grid>

      {/* Checkbox for Site has solar panels */}
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox name="hasSolarPanels" color="primary" />}
          label="Site has solar panels"
        />
      </Grid>

      {/* Input for Location of solar panels */}
      <Grid item xs={12}>
        <TextField
          label="Location of solar panels"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      {/* Input for Rating of solar panels */}
      <Grid item xs={12} sm={6}>
        <TextField
          label="Rating of solar panels"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      {/* Input for Rating of solar system */}
      <Grid item xs={12} sm={6}>
        <TextField
          label="Rating of solar system"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      {/* Spacer Grid Items */}
      <Grid item xs={12} />

      {/* Heading title 'Battery Identification' */}
      <Grid item xs={12}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
          Battery Identification
        </Typography>
      </Grid>

      {/* Checkbox for Site has batteries */}
      <Grid item xs={12}>
        <FormControlLabel
          control={<Checkbox name="hasBatteries" color="primary" />}
          label="Site has batteries"
        />
      </Grid>

      {/* Input for Location of batteries */}
      <Grid item xs={12}>
        <TextField
          label="Location of batteries"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      {/* Input for Rating of batteries */}
      <Grid item xs={12} sm={6}>
        <TextField
          label="Rating of batteries"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      {/* Spacer Grid Items */}
      <Grid item xs={12} />

      {/* Heading title 'Additional Notes' */}
      <Grid item xs={12}>
        <Typography variant="h4" component="h2" gutterBottom fontWeight="bold">
          Additional Notes
        </Typography>
      </Grid>

      {/* TextField for Additional Notes */}
      <Grid item xs={12}>
        <TextField
          label="Additional Notes"
          variant="outlined"
          fullWidth
          multiline
          rows={4}
          InputLabelProps={{ shrink: true }}
        />
      </Grid>

      {/* Save and Load Progress Buttons */}
      <Grid item xs={6}>
        <Button variant="contained" color="primary" fullWidth>
          Save Progress
        </Button>
      </Grid>
      <Grid item xs={6}>
        <Button variant="contained" color="primary" fullWidth>
          Load Progress
        </Button>
      </Grid>
    </Grid>
  );
};

export default SolarBattery;
