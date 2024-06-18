import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ p: 2, mt: 'auto', backgroundColor: '#f0f0f0' }}>
      <Typography variant="body2" align="center" color="textSecondary">
        © {new Date().getFullYear()} Birdwood Energy. All rights reserved.
      </Typography>
    </Box>
  );
};

export default Footer;
