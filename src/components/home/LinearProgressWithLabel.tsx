// LinearProgressWithLabel.tsx
import React from "react";
import { LinearProgress, Typography } from "@mui/material";

const LinearProgressWithLabel: React.FC<{ value: number }> = ({ value }) => {
  let leftPosition = `calc(${value}% - 100px)`;
  // Adjust position for mobile
  if (value < 60) {
    leftPosition = "20%";
  }

  return (
    <div style={{ position: "relative", height: 20, marginBottom: 5 }}>
      <LinearProgress variant="determinate" value={value} sx={{ borderRadius: 5, height: 20 }} />
      <Typography variant="body2" sx={{ position: "absolute", top: 0, left: leftPosition, transform: "translateX(-50%)", color: "white" }}>
        {`${value}% complete`}
      </Typography>
    </div>
  );
};

export default LinearProgressWithLabel;
