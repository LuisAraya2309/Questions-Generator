import React from "react";
import { GeneralInfo } from "./typography/GeneralInfo";
import { TextPrompt } from "./prompts/TextPrompt";

export function MainPage() {
  return (
    <>
      <GeneralInfo />
      <TextPrompt />
    </>
  );
}
