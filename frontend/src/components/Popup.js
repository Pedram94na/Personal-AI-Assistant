import React, { useRef } from "react";

import { playAudio } from "../utils/audio";

import buttonHoverSound from "../assets/button-hover.wav";
import '../styles/Popup.css';

const Popup = ({ type, onExit }) => {
    const audio = useRef(null);

    const render = () => {
        switch (type) {
            case 'exit':
                return (
                    <>
                        <p>Do you want to exit the application?</p>
                        
                        <button className="yes" onMouseEnter={() => playAudio(audio)} onClick={() => onExit("yes")}>Yes</button>
                        <button className="no" onMouseEnter={() => playAudio(audio)} onClick={() => onExit("no")}>No</button>
                    </>
                );
            
            case 'noApi':
                return (
                    <>
                        <p>API key missing!</p>
                        
                        <button className="ok" onMouseEnter={() => playAudio(audio)} onClick={() => onExit("ok")}>Ok</button>
                    </>
                );

            default:
                return null;
        }
    };
    
    return (
        <div className="popup">
            <audio ref={audio} src={buttonHoverSound} />

            {render()}
        </div>
    );
};

export default Popup;