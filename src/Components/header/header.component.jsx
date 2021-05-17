import React from "react";
import "./header.style.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedo } from "@fortawesome/free-solid-svg-icons";
import Slider from "../slider/slider.component";

const Header = ({ correct, total, reset }) => {
    return (
        <div>
            <div className="header">
                <div onClick={reset} className="reload-icon">
                    <FontAwesomeIcon
                        focusable={true}
                        style={{ fontSize: 32 }}
                        icon={faRedo}
                    />
                </div>
                <h1>
                    SCORE: {correct}/{total}
                </h1>
            </div>
            <Slider correct={correct} total={total} />
        </div>
    );
};

export default Header;
