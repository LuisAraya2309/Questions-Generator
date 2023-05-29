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
      const questionnaire = {
        "data":{
          "code": 200,
        "message": "Questions generated successfully.",
        "response": [
          {
            "topic": "Make Money in Stock Market",
            "category_type": 5,
            "question": [
              "Ques  : What is perceived to be less complicated or risky than it actually is?"
            ],
            "options": [
              " Making money in the stock market"
            ],
            "help_text": "Making money in the stock market is not as complicated or risky as many people think."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 5,
            "question": [
              "Ques  : What information should you know about a company before investing?"
            ],
            "options": [
              " Financial statements, the competitive landscape, the company s management, and the risks involved"
            ],
            "help_text": "This includes understanding the financial statements, the competitive landscape, the company s management, and the risks involved."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 1,
            "question": [
              "Ques  : What is perceived to be less complicated or risky than it actually is?"
            ],
            "options": [
              " Money",
              " Investing in the stock market",
              " Risk",
              " Making money in the stock market *"
            ],
            "help_text": "Making money in the stock market is not as complicated or risky as many people think."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 2,
            "question": [
              "Ques  : What is perceived to be less complicated or risky than it actually is?",
              " I. Money",
              " II. Investing in the stock market",
              " III. Making money in the stock market ",
              " IV. Risk",
              "Which of the options given above is/are correct:"
            ],
            "options": [
              " II and I only.",
              " III, II and I only.",
              " III only.*",
              " IV only."
            ],
            "help_text": "Making money in the stock market is not as complicated or risky as many people think."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 4,
            "question": [
              "Ques  : Making money in the stock market is perceived to be less complicated or risky than it actually is."
            ],
            "options": [
              " True*",
              "  False"
            ],
            "help_text": "Making money in the stock market is not as complicated or risky as many people think."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 4,
            "question": [
              "Ques  : Read the following statements carefully:",
              " Statement I:  Risk is perceived to be less complicated or risky than it actually is.",
              " Statement II: Making money in the stock market is perceived to be less complicated or risky than it actually is.",
              " Which of the following option is correct:"
            ],
            "options": [
              " Both Statements are False.",
              " Statement I is True & Statement II is False.",
              " Statemet II is True.*",
              " Both Statements are True."
            ],
            "help_text": "Making money in the stock market is not as complicated or risky as many people think."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 1,
            "question": [
              "Ques  : Is it possible to make money in the stock market with some knowledge and effort?"
            ],
            "options": [
              " Trading",
              " Luck",
              " Discipline *",
              " Knowledge and research"
            ],
            "help_text": "In fact, with a little know how and some discipline, it can be quite easy to make money in the stock market. Stay disciplined investing in the stock market is not a get rich quick scheme. It requires patience and discipline to make money."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 2,
            "question": [
              "Ques  : Is it possible to make money in the stock market with some knowledge and effort?",
              " I. Trading",
              " II. Knowledge and research",
              " III. Luck",
              " IV. Discipline ",
              "Which of the options given above is/are correct:"
            ],
            "options": [
              " II and I only.",
              " III only.",
              " IV only.*",
              " IV, II and I only."
            ],
            "help_text": "In fact, with a little know how and some discipline, it can be quite easy to make money in the stock market. Stay disciplined investing in the stock market is not a get rich quick scheme. It requires patience and discipline to make money."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 1,
            "question": [
              "Ques  : What are some methods of making money in the stock market?"
            ],
            "options": [
              " Doing proper research *",
              " Trading options",
              " Day trading",
              " Gambling"
            ],
            "help_text": "Here are a few basic suggestions on how to make money in the stock market 1. doing proper research before investing in any stock, it is important to do your research and know as much as you can about the company."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 2,
            "question": [
              "Ques  : What are some methods of making money in the stock market?",
              " I. Trading options",
              " II. Doing proper research ",
              " III. Gambling",
              " IV. Day trading",
              "Which of the options given above is/are correct:"
            ],
            "options": [
              " II, III and I only.",
              " III and I only.",
              " IV only.",
              " II only.*"
            ],
            "help_text": "Here are a few basic suggestions on how to make money in the stock market 1. doing proper research before investing in any stock, it is important to do your research and know as much as you can about the company."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 4,
            "question": [
              "Ques  : Doing proper research are some methods of making money in the stock market."
            ],
            "options": [
              " True*",
              "  False"
            ],
            "help_text": "Here are a few basic suggestions on how to make money in the stock market 1. doing proper research before investing in any stock, it is important to do your research and know as much as you can about the company."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 4,
            "question": [
              "Ques  : Read the following statements carefully:",
              " Statement I:  Day trading are some methods of making money in the stock market.",
              " Statement II: Doing proper research are some methods of making money in the stock market.",
              " Which of the following option is correct:"
            ],
            "options": [
              " Both Statements are False.",
              " Statement I is True & Statement II is False.",
              " Statemet II is True.*",
              " Both Statements are True."
            ],
            "help_text": "Here are a few basic suggestions on how to make money in the stock market 1. doing proper research before investing in any stock, it is important to do your research and know as much as you can about the company."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 1,
            "question": [
              "Ques  : What information should you know about a company before investing?"
            ],
            "options": [
              " Company's location",
              " Current trends",
              " Company’s size",
              " Financial statements, the competitive landscape, the company s management, and the risks involved *"
            ],
            "help_text": "This includes understanding the financial statements, the competitive landscape, the company s management, and the risks involved."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 2,
            "question": [
              "Ques  : What information should you know about a company before investing?",
              " I. Financial statements, the competitive landscape, the company s management, and the risks involved ",
              " II. Company’s size",
              " III. Current trends",
              " IV. Company's location",
              "Which of the options given above is/are correct:"
            ],
            "options": [
              " I only.*",
              " I, III and II only.",
              " III and II only.",
              " IV only."
            ],
            "help_text": "This includes understanding the financial statements, the competitive landscape, the company s management, and the risks involved."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 1,
            "question": [
              "Ques  : What is necessary to have before investing in a stock?"
            ],
            "options": [
              " Time",
              " Have a plan *",
              " Patience",
              " Money"
            ],
            "help_text": "2. have a plan it is also important to have a plan and a strategy before investing."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 2,
            "question": [
              "Ques  : What is necessary to have before investing in a stock?",
              " I. Patience",
              " II. Money",
              " III. Have a plan ",
              " IV. Time",
              "Which of the options given above is/are correct:"
            ],
            "options": [
              " III, II and I only.",
              " IV only.",
              " II and I only.",
              " III only.*"
            ],
            "help_text": "2. have a plan it is also important to have a plan and a strategy before investing."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 4,
            "question": [
              "Ques  : Have a plan is necessary to have before investing in a stock."
            ],
            "options": [
              " True*",
              "  False"
            ],
            "help_text": "2. have a plan it is also important to have a plan and a strategy before investing."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 4,
            "question": [
              "Ques  : Read the following statements carefully:",
              " Statement I:  Patience is necessary to have before investing in a stock.",
              " Statement II: Have a plan is necessary to have before investing in a stock.",
              " Which of the following option is correct:"
            ],
            "options": [
              " Both Statements are False.",
              " Statement I is True & Statement II is False.",
              " Statemet II is True.*",
              " Both Statements are True."
            ],
            "help_text": "2. have a plan it is also important to have a plan and a strategy before investing."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 1,
            "question": [
              "Ques  : What should be included in a plan before investing?"
            ],
            "options": [
              " Investment goals *",
              " Long-term goals",
              " Short-term goals",
              " Risk-taking"
            ],
            "help_text": "This plan should include your investment goals for sure. This means investing in different types of stocks, industries, and even countries. 5. review your portfolio it is important to review your portfolio regularly and make sure it is still in line with your investment goals."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 2,
            "question": [
              "Ques  : What should be included in a plan before investing?",
              " I. Long-term goals",
              " II. Short-term goals",
              " III. Investment goals ",
              " IV. Risk-taking",
              "Which of the options given above is/are correct:"
            ],
            "options": [
              " IV only.",
              " III only.*",
              " III, II and I only.",
              " II and I only."
            ],
            "help_text": "This plan should include your investment goals for sure. This means investing in different types of stocks, industries, and even countries. 5. review your portfolio it is important to review your portfolio regularly and make sure it is still in line with your investment goals."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 1,
            "question": [
              "Ques  : How can you make money in the stock market?"
            ],
            "options": [
              " Stay disciplined *",
              " Day trading",
              " Luck",
              " Trading"
            ],
            "help_text": "3. stay disciplined investing in the stock market is not a get rich quick scheme. It requires patience and discipline to make money. It is important to stay disciplined and not to sell when the stock market is down."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 2,
            "question": [
              "Ques  : How can you make money in the stock market?",
              " I. Stay disciplined ",
              " II. Luck",
              " III. Day trading",
              " IV. Trading",
              "Which of the options given above is/are correct:"
            ],
            "options": [
              " I, III and II only.",
              " I only.*",
              " III and II only.",
              " IV only."
            ],
            "help_text": "3. stay disciplined investing in the stock market is not a get rich quick scheme. It requires patience and discipline to make money. It is important to stay disciplined and not to sell when the stock market is down."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 1,
            "question": [
              "Ques  : What does it take to make money investing in the stock market?"
            ],
            "options": [
              " Speculation",
              " Luck",
              " Trading",
              " Patience and discipline *"
            ],
            "help_text": "It requires patience and discipline to make money."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 2,
            "question": [
              "Ques  : What does it take to make money investing in the stock market?",
              " I. Patience and discipline ",
              " II. Trading",
              " III. Luck",
              " IV. Speculation",
              "Which of the options given above is/are correct:"
            ],
            "options": [
              " I only.*",
              " IV only.",
              " III and II only.",
              " I, III and II only."
            ],
            "help_text": "It requires patience and discipline to make money."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 1,
            "question": [
              "Ques  : What is important to consider when the stock market is down?"
            ],
            "options": [
              " Wait",
              " Not to sell *",
              " Panic",
              " Sell"
            ],
            "help_text": "It is important to stay disciplined and not to sell when the stock market is down."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 2,
            "question": [
              "Ques  : What is important to consider when the stock market is down?",
              " I. Sell",
              " II. Wait",
              " III. Not to sell ",
              " IV. Panic",
              "Which of the options given above is/are correct:"
            ],
            "options": [
              " III, II and I only.",
              " IV only.",
              " III only.*",
              " II and I only."
            ],
            "help_text": "It is important to stay disciplined and not to sell when the stock market is down."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 4,
            "question": [
              "Ques  : Not to sell is important to consider when the stock market is down."
            ],
            "options": [
              " True*",
              "  False"
            ],
            "help_text": "It is important to stay disciplined and not to sell when the stock market is down."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 4,
            "question": [
              "Ques  : Read the following statements carefully:",
              " Statement I:  Sell is important to consider when the stock market is down.",
              " Statement II: Not to sell is important to consider when the stock market is down.",
              " Which of the following option is correct:"
            ],
            "options": [
              " Both Statements are False.",
              " Statement I is True & Statement II is False.",
              " Statemet II is True.*",
              " Both Statements are True."
            ],
            "help_text": "It is important to stay disciplined and not to sell when the stock market is down."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 1,
            "question": [
              "Ques  : Is it wise to invest all of your resources in one investment?"
            ],
            "options": [
              " Invest in multiple investments",
              " Invest all resources",
              " Invest in one stock",
              " Diversify *"
            ],
            "help_text": "4. diversify don t put all your eggs in one basket. Diversify don t put all your eggs in one basket. Diversify your investments and spread your risk."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 2,
            "question": [
              "Ques  : Is it wise to invest all of your resources in one investment?",
              " I. Invest all resources",
              " II. Invest in one stock",
              " III. Diversify ",
              " IV. Invest in multiple investments",
              "Which of the options given above is/are correct:"
            ],
            "options": [
              " III only.*",
              " II and I only.",
              " III, II and I only.",
              " IV only."
            ],
            "help_text": "4. diversify don t put all your eggs in one basket. Diversify don t put all your eggs in one basket. Diversify your investments and spread your risk."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 6,
            "question": [
              "Ques  : With a little know how and some ____ , it can be quite easy to make money in the stock market."
            ],
            "options": [
              " Discipline *",
              " Trading",
              " Knowledge and research",
              " Luck"
            ],
            "help_text": "In fact, with a little know how and some discipline, it can be quite easy to make money in the stock market. Stay disciplined investing in the stock market is not a get rich quick scheme. It requires patience and discipline to make money."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 6,
            "question": [
              "Ques  : One way to make money in the stock market is through ___________ ."
            ],
            "options": [
              " Trading options",
              " Doing proper research *",
              " Gambling",
              " Day trading"
            ],
            "help_text": "Here are a few basic suggestions on how to make money in the stock market 1. doing proper research before investing in any stock, it is important to do your research and know as much as you can about the company."
          },
          {
            "topic": "Make Money in Stock Market",
            "category_type": 6,
            "question": [
              "Ques  : Before investing in a stock, it is important to have an understanding of _______ and risk tolerance."
            ],
            "options": [
              " Time",
              " Have a plan *",
              " Money",
              " Patience"
            ],
            "help_text": "2. have a plan it is also important to have a plan and a strategy before investing."
          }
        ]
        }
        
      }
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
