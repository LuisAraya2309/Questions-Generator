import React from "react";
import Typography from "@mui/material/Typography";
import "./GeneralInfo.css";

export function GeneralInfo() {
  return (
    <>
      <div className="main-title">
        <Typography variant="h1">Questions Generator</Typography>
        <br />
        <Typography variant="h4">
          Welcome to the Questions Generator AI!
        </Typography>
        <br />
      </div>

      <div className="instructions-text">
        <Typography variant="h4">Instructions</Typography>
        <br />
        <Typography variant="h6">
          Hi! I will be happy to create some questions based on your prompted
          <br />
          text. Please paste your text into the following area:
        </Typography>
      </div>
    </>
  );
}
