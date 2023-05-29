import React from "react";
import { ResultsInfo } from "../typography/ResultsInfo";
import { useLocation } from "react-router-dom";
import { PdfGenerator } from "./PdfGenerator";

const determineDifferentTypes = (questionnaire) => {
  let typesOfQuestions = []
  questionnaire.forEach(element => {
    if(!typesOfQuestions.includes(element.category_type)){
      typesOfQuestions.push(element.category_type)
    }
    
  });
  return typesOfQuestions.length
}

export function ResultsPage() {
  const { state } = useLocation(),
    questionnaire = JSON.parse(state.questionnaire),
    //isSpanish = state.isSpanish,
    amountQuestions = questionnaire.data.response.length,
    questionTypes = determineDifferentTypes(questionnaire.data.response);
    //console.log(questionnaire,isSpanish)

  return (
    <>
      <ResultsInfo props={{ amountQuestions: amountQuestions, questionTypes: questionTypes }} />
      <PdfGenerator props={{data : questionnaire.data.response}}/>

    </>
  );
}
