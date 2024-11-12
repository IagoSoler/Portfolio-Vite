import React, { useState } from "react";
import "./Quizzical.css";
import { Question } from "./quizzical_components/Question";
import { StartMenu } from "./quizzical_components/StartMenu";


function Quizzical() {
  const [data, setData] = useState([]);
  const [quizStarted, setQuizStarted] = useState(false);
  
  return (
    <div className="quizzical">
      {quizStarted ? (
        <Question 
        data={data}
        setQuizStarted={setQuizStarted}
        setData={setData} />
      ) : (
        <StartMenu
          setQuizStarted={setQuizStarted}
          data={data}
          setData={setData}
        />
      )}
      
    </div>
  );
}

export default Quizzical;
