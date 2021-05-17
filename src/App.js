import { useState } from "react";
import "./App.css";
import Header from "./Components/header/header.component";
import Question from "./Components/question/question.component";
import Result from "./Components/result/result.component";
import QUESTION_DATA from "./question-data";

function App() {
    const [questions] = useState(QUESTION_DATA);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [correct, setCorrect] = useState(0);
    const [completed, setCompleted] = useState(false);

    const reset = () => {
        setCurrentQuestion(0);
        setCorrect(0);
        setCompleted(false);
    };

    const nextQuestion = () => {
        if (currentQuestion < questions.length - 1)
            setCurrentQuestion(currentQuestion + 1);
        else {
            setCompleted(true);
            setCurrentQuestion(currentQuestion + 1);
        }
    };

    const increaseTotal = () => {
        setCorrect(correct + 1);
    };

    return (
        <div className="App">
            <Header correct={correct} total={currentQuestion} reset={reset} />
            <div className="question-container">
                <div className="middle">
                    {!completed ? (
                        <Question
                            key={currentQuestion}
                            question={questions[currentQuestion]}
                            nextQuestion={nextQuestion}
                            increaseTotal={increaseTotal}
                        />
                    ) : (
                        <Result score={correct} total={questions.length} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
