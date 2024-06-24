import React from 'react';
import { Grid, Card, CardContent, Typography, Button, TextField } from '@mui/material';

const Uploads: React.FC = () => {
  return (
    <Grid container spacing={2}>
      {/* Card 1 */}
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" fontWeight="bold">
              Upload Bills
            </Typography>
            <Typography color="textSecondary">
              Upload your bills here
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Upload
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Card 2 */}
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" fontWeight="bold">
              Upload Circuit Board Pictures
            </Typography>
            <Typography color="textSecondary">
              Upload pictures of Circuit Board here
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Upload
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Card 3 */}
      <Grid item xs={12} sm={4} md={4} lg={4}>
        <Card>
          <CardContent>
            <Typography variant="h5" component="h2" fontWeight="bold">
              Upload Site Constraints
            </Typography>
            <Typography color="textSecondary">
              Upload site constraints here
            </Typography>
            <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
              Upload
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* File Manager */}
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <Typography variant="h5" component="h2" fontWeight="bold" gutterBottom>
              File Manager
            </Typography>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '16px' }}>
              <div style={{ width: '180px', height: '180px', backgroundColor: '#eee', marginRight: '16px' }}>
                {/* Placeholder for the larger thumbnail or icon */}
                {/* Adjust width, height, and add image/icon component */}
              </div>
              <div>
                <Typography variant="body1" color="textSecondary" paragraph>
                  File name: <strong>File Name</strong>
                </Typography>
                <Typography variant="body1" color="textSecondary" paragraph>
                  File description: <strong>File Description</strong>
                </Typography>
                <Button variant="contained" color="primary">
                  Edit
                </Button>
                <Button variant="contained" color="error" sx={{ marginLeft: 1 }}>
                  Delete
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </Grid>

      {/* Notes & Tag */}
      <Grid item xs={12} sm={6} md={6} lg={6}>
        <Card sx={{ height: '100%' }}>
          <CardContent>
            <TextField
              label="Notes"
              multiline
              rows={4}
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              label="Tags"
              variant="outlined"
              fullWidth
              InputLabelProps={{ shrink: true }}
              sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" color="primary">
              Save
            </Button>
          </CardContent>
        </Card>
      </Grid>

      {/* Save Progress Button */}
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ textAlign: "left", marginTop: 2 }}
        >
          Save Progress
        </Button>
      </Grid>

      {/* Load History Button */}
      <Grid item xs={6} sm={6} md={6} lg={6}>
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ textAlign: "right", marginTop: 2 }}
        >
          Load History
        </Button>
      </Grid>
    </Grid>
  );
};

export default Uploads;
