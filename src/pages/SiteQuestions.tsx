import React from 'react';
import { Grid, TextField, Button, Typography } from '@mui/material';

const SiteQuestions: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {/* General Information */}
      <Grid item xs={12}>
        <Typography variant="h5" component="h2" gutterBottom>
          <strong>General Information</strong>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Devices Consuming Gas:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Gas Hot Water Usage:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Gas Heating Usage:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Reverse Cycle Aircon/Heating:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>

      {/* Equipment and Technology */}
      <Grid item xs={12}>
        <Typography variant="h5" component="h2" gutterBottom>
          <strong>Equipment and Technology</strong>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Computers:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="On-Premise Servers:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Lighting Technology:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Fridges:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Showroom Demonstration Devices:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Switchboard Settings:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>

      {/* Load Management */}
      <Grid item xs={12}>
        <Typography variant="h5" component="h2" gutterBottom>
          <strong>Load Management</strong>
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Least Important Loads:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Shift Work:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Main Equipment Usage:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <TextField
          label="Heating/Cooling Adjustments:"
          variant="outlined"
          fullWidth
          InputLabelProps={{ shrink: true }}
          placeholder="Select an option"
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

export default SiteQuestions;
