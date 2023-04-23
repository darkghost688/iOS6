import React, { useState } from "react";
import './iPhone.css';

function IPhone({ children }) {
    const [locked, setLocked] = useState(true);


    function unlock() {
        setLocked(false);
    }


    function handlePowerButton() {
        if (locked) { setLocked(false); }
        if (!locked) { setLocked(true); }
    }

    function handleHomeButton() {
        if (locked) { setLocked(false); }
    }
    return (
        <div className={`iPhone-container ${locked ? "locked" : ""}`}>
            {locked ? (
                <div className="lock-screen" onClick={unlock}></div>
            ) : (
                <div className="iPhone-screen">{children}</div>
            )}
            <div className="iPhone-home-button" onClick={handleHomeButton}></div>
            <div className="iPhone-speaker"></div>
            <div className="iPhone-camera"></div>
            <div className="iPhone-sensor"></div>
            <div className="iPhone-power-button" onClick={handlePowerButton}></div>
        </div>

    );
}

export default IPhone;
