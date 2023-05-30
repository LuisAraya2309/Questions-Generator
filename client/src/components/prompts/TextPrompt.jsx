import React, { useState } from "react";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  Grid,
} from "@mui/material";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import logo from "../../resources/questionLogo.png";
import axios from "axios";
const TextFieldStyle = {
    width: "60%",
    backgroundColor: "white",
  },
  buttonStyle = {
    alignItems: "center",
  };

const translateText = async (text)=>{
  //Then we need to translate our magic text to english
  const optionsTranslation = {
    method: 'POST',
    url: 'https://rapid-translate-multi-traduction.p.rapidapi.com/t',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'fb56922cb1mshe2644d7f7d2a20bp1fbec5jsne5ec986d7559',
      'X-RapidAPI-Host': 'rapid-translate-multi-traduction.p.rapidapi.com'
    },
    data: {
      from: 'es',
      to: 'en',
      q: text.toString()
    }
  };
  const resultText = await axios.request(optionsTranslation)
  return resultText;

}

const generateQuestions = async (text) => {
  const encodedParams = new URLSearchParams();
  encodedParams.set("topic", "Questions Generated");
  console.log('Final text',text)
  encodedParams.set("content", text);
  const optionsAI = {
    method: "POST",
    url: "https://prepai-generate-questions.p.rapidapi.com/getQuestions",
    headers: {
      "content-type": "application/x-www-form-urlencoded",
      "X-RapidAPI-Key":
      '5b4fc1e6d8mshce855c174db0483p118c3cjsn0339058d6c6f',
      "X-RapidAPI-Host": "prepai-generate-questions.p.rapidapi.com",
    },
    data: encodedParams,
  };
  
  const questionnaire = await axios.request(optionsAI);
  return questionnaire;
}

export function TextPrompt() {
  const { register, handleSubmit } = useForm(),
    [checked, setChecked] = useState(true),
    navigate = useNavigate();
  //Submit function
  const onSubmit = async (data) => {
    let getMagicText = data.magicText
    try {
      if (checked){
        const translatedText = await translateText(getMagicText)
        getMagicText = translatedText.data[0]
      }
      const questionnaire = await generateQuestions(getMagicText)
      console.log(questionnaire)
      
      navigate("/results", {
        state: { questionnaire: JSON.stringify(questionnaire), isSpanish : checked },
      });
      
    } catch (err) {
      alert("An error occured!");
    }
  };
  return (
    <div>
      <br />
      <br />
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          id="standard-multiline-flexible"
          label="Put your text here to start the magic!"
          multiline
          variant="standard"
          rows={7}
          style={TextFieldStyle}
          InputProps={{
            style: {
              padding: "10px",
            },
          }}
          {...register("magicText", { required: true })}
        />
        <br />
        <br />
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={6}>
            <Button
              type="submit"
              variant="contained"
              color="success"
              style={buttonStyle}
            >
              Generate
            </Button>
          </Grid>
          <Grid item xs={6}>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checked}
                    onChange={(e) => {
                      setChecked(e.target.checked);        
                    }}
                  />
                }
                label="Español"
              />
            </FormGroup>
          </Grid>
        </Grid>
      </form>
      <br />
      <br />
      <img src={logo} alt="Imagen" style={{ width: "200px", height: "auto" }} />
    </div>
  );
}
