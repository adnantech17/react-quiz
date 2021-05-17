import React from "react";
import "./result.style.scss";

const Result = ({ score, total }) => {
    return (
        <div className="result">
            Your score is{" "}
            <span>
                {score}/{total}
            </span>
        </div>
    );
};
export default Result;
