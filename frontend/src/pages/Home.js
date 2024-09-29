import React, { useRef } from "react";
import { useNavigate } from 'react-router-dom';

import Header from '../components/Header';
import Footer from "../components/Footer";

import { playAudio } from "../utils/audio";

import buttonHoverSound from '../assets/button-hover.wav';
import '../styles/Home.css'

const Home = () => {
    const audio = useRef(null);
    const navigate = new useNavigate();

    return (
        <div>
            <Header />

            <audio ref={audio} src={buttonHoverSound} />

            <div className='content'>
                <nav className='menu'>
                    <button
                        onMouseEnter={() => playAudio(audio)}
                        onClick={() => navigate('/assistance')}>
                            Assistance</button>

                    <button
                        onMouseEnter={() => playAudio(audio)}
                        onClick={() => navigate('/trainmodel')}>
                            Train Model</button>
                    
                    <a href='https://youtu.be/HrHUHGRIDMQ'
                        target="_blank" rel="noopener noreferrer">
                        <button onMouseEnter={() => playAudio(audio)}>Guide</button>
                    </a>
                </nav>
            </div>
            <Footer />
        </div>
    );
};

export default Home;