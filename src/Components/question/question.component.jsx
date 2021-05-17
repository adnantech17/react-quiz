import React, { useState } from "react";
import CustomButton from "../custom-button/custombutton.component";
import "./question.style.scss";

const Question = ({ question, nextQuestion, increaseTotal }) => {
    const [disabled, setDisabled] = useState(false);
    const [selected, setSelected] = useState();

    const handleSelected = (answer) => {
        if (selected) return;
        setSelected(answer);
        setDisabled(true);
    };

    return (
        <div className="question">
            <h3 className="question-title">{question.question}</h3>
            <div className="buttons">
                {question.answers.map((answer, idx) => (
                    <CustomButton
                        isNextButton={false}
                        key={idx}
                        disabled={disabled}
                        onClick={() => {
                            handleSelected(idx);
                        }}
                        isAnswer={idx === question.correctIndex}
                    >
                        {answer}
                    </CustomButton>
                ))}
            </div>
            <br />
            <br />
            <div style={{ textAlign: "center" }}>
                <CustomButton
                    isNextButton
                    onClick={() => {
                        if (selected === question.correctIndex) increaseTotal();
                        nextQuestion();
                    }}
                    disabled={!disabled}
                >
                    Next
                </CustomButton>
            </div>
        </div>
    );
};

export default Question;
