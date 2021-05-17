import React from "react";
import "./custombutton.style.scss";

const CustomButton = ({
    children,
    inverted,
    disabled,
    isAnswer,
    increaseTotal,
    isNextButton,
    ...otherProps
}) => {
    return (
        <button
            disabled={disabled}
            className={`${inverted ? "inverted" : ""} ${
                disabled ? "disabled" : "normal"
            } ${isAnswer ? "answer" : ""}
             custom-button`}
            {...otherProps}
        >
            {children}
        </button>
    );
};

export default CustomButton;
