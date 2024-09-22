import React, { useState, useRef } from "react";
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from "../components/Footer";
import Popup from "../components/Popup";

import { playAudio } from "../utils/audio";
import { submitAPI } from "../utils/api";
import { openPopup, handlePopupChoice } from "../utils/popup";

import buttonHoverSound from '../assets/button-hover.wav';
import '../styles/Home.css'

const Home = () => {
    const [buttonEnabled, setButtonEnabled] = useState(false);
    const [popupState, setPopupState] = useState({ visible: false, type: null });

    const audio = useRef(null);
    const input = useRef(null);
    const navigate = new useNavigate();

    return (
        <div>
            <Header />

            <audio ref={audio} src={buttonHoverSound} />

            <div className='content'>
                <input type="text" ref={input} placeholder="LLM API KEY"></input>
                
                <nav className='menu'>
                    <button onMouseEnter={() => playAudio(audio)} onClick={() => submitAPI(input.current.value, setPopupState, setButtonEnabled)}>Submit API</button>

                    <button disabled={!buttonEnabled}
                        onMouseEnter={() => playAudio(audio)}
                        onClick={() => navigate('/assistance')}>Assistance</button>

                    <button disabled={!buttonEnabled}
                        onMouseEnter={() => playAudio(audio)}
                        onClick={() => navigate('/trainmodel')}>Train Model</button>
                    
                    <a href='https://www.youtube.com/watch?v=cx-43BE8Es8&ab_channel=PedramNegahbanaghdami'
                        target="_blank" rel="noopener noreferrer">
                        <button onMouseEnter={() => playAudio(audio)}>Guide</button>
                    </a>

                    <button onMouseEnter={() => playAudio(audio)} onClick={() => openPopup(setPopupState, 'exit')}>Exit</button>
                </nav>
            </div>

            {popupState.visible && <Popup type={popupState.type} onExit={(choice) => handlePopupChoice(choice, setPopupState)} />}
            
            <Footer />
        </div>
    );
};

export default Home;