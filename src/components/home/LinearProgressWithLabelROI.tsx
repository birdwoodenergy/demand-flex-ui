import React from "react";
import { LinearProgress, Typography } from "@mui/material";

const LinearProgressWithLabelROI: React.FC<{ value: number; label: string }> = ({
  value,
  label,
}) => {
  let leftPosition = `calc(${value}% - 100px)`;
  // Adjust position for mobile
  if (value < 60) {
    leftPosition = "20%";
  }

  return (
    <div style={{ position: "relative", height: 20, marginBottom: 5 }}>
      <LinearProgress variant="determinate" value={value} sx={{ borderRadius: 5, height: 20 }} />
      <Typography variant="body2" sx={{ position: "absolute", top: 0, left: leftPosition, transform: "translateX(-50%)", color: "white" }}>
        {label}
      </Typography>
    </div>
  );
};

export default LinearProgressWithLabelROI;
