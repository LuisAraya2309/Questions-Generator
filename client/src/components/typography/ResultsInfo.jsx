import React from "react";
import Typography from "@mui/material/Typography";
import "./GeneralInfo.css";

export function ResultsInfo({ props }) {
  return (
    <>
      <div className="main-title">
        <Typography variant="h1">Questionnaire</Typography>
        <br />
        <Typography variant="h4">Your results are ready!</Typography>
        <br />
      </div>

      <div className="instructions-text">
        <Typography variant="h4">Results Information</Typography>
        <br />
        <Typography variant="h6">
          Amount of questions: {props.amountQuestions}
          <br />
          Types of different questions: {props.questionTypes}
          <br />
        </Typography>
      </div>
    </>
  );
}
