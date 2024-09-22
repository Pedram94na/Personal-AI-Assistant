import React, { useState, useRef } from "react";

import Header from '../components/Header';
import Footer from "../components/Footer";

import { handleSendMessage } from "../utils/chat";

import '../styles/Assistance.css'

const Assistance = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState([]);
    const message = useRef(null);

    return (
        <div>
            <Header />

                <div className="chatroom">
                    <div className="messages">
                        {messages.map((msg, index) => (
                            <div key={index} className="message">
                                <span className="you-label">You:</span> {msg.substring(4)}
                            </div>
                        ))}

                        <div ref={message} />
                    </div>
                    
                    <div className="input-area">
                        <input 
                            className="inputChat"
                            type="text" 
                            value={input} 
                            onChange={(e) => setInput(e.target.value)} 
                            placeholder="Type your message..." 
                        />
                        
                        <button className="send" onClick={() => handleSendMessage(input, setMessages, messages, setInput, message)}>Send</button>
                    </div>
                </div>

            <Footer />
        </div>
    );
};

export default Assistance;