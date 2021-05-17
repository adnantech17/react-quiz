import React from "react";
import QUESTION_DATA from "../../question-data";
import "./slider.style.scss";

const Slider = ({ correct, total }) => {
    return (
        <div className="outerbox">
            <div
                className="total"
                style={{
                    width: `${(total * 100) / QUESTION_DATA.length}%`,
                }}
            />
            <div
                className="correct"
                style={{ width: `${(correct * 100) / QUESTION_DATA.length}%` }}
            />
        </div>
    );
};

export default Slider;
