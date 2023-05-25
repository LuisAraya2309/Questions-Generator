import React from "react";
import { ResultsInfo } from "../typography/ResultsInfo";
import { useLocation } from "react-router-dom";

export function ResultsPage() {
  const { state } = useLocation(),
    questionnaire = JSON.parse(state.questionnaire),
    isSpanish = state.isSpanish,
    amountQuestions = questionnaire.data.response.length;
    console.log(questionnaire,isSpanish)

  return (
    <>
      <ResultsInfo props={{ amountQuestions: amountQuestions, questionTypes: 5 }} />
    </>
  );
}
