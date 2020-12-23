import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import "../styles/head/head.css";

function Head() {
    return (
        <section id="head">
            <div className="head-content">            
                <div className="head-content-a">
                    <div className="logo">Where in the world?</div>
                </div>
                <div className="head-content-b">
                    <div className="dark-mode-toggle">
                        <FontAwesomeIcon icon={faMoon} className="dark-mode-icon" />
                        Dark Mode
                    </div>
                </div>
            </div>
        </section>
    )
};

export default Head;