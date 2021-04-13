import React, { useState, useContext } from 'react'
import { QuizContext } from '../Helpers/Contexts';
import { Questions } from './../Helpers/QuestionBank';
import EndScreen from './EndScreen';

function Quiz() {

    const { score, setScore, setGameState } = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const nextQuestion = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        alert(score)
        setCurrentQuestion(currentQuestion + 1);
    }

    const finishQuiz = () => {
        if (Questions[currentQuestion].answer === optionChosen) {
            setScore(score + 1);
        }
        setGameState("EndScreen");

    }


    return (
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="options">
                <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
                <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionB}</button>
                <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionC}</button>
                <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionD}</button>
            </div>
            {currentQuestion === Questions.length - 1 ? (
                <button onClick={finishQuiz}> Finish Quiz </button>
            ) : (<button onClick={nextQuestion}>Next Question</button>)}

        </div>
    )
}

export default Quiz;
