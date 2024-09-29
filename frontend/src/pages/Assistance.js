import React, { useState, useRef } from "react";

import Header from '../components/Header';
import Footer from "../components/Footer";

import { handleSendMessage } from "../utils/chat";

import '../styles/Assistance.css'

const Assistance = () => {
    const [buttonState, setButtonState] = useState(true)
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
                            {
                                msg.startsWith("You: ") ?
                                (<span className="you-label">You:</span>) :
                                (<span className="bot-label">Bot: </span>)
                            }
                            {msg.substring(4)}
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
                    
                    <button disabled={!buttonState} className="submit" onClick={() => handleSendMessage(input, setMessages, messages, setInput, message, setButtonState)}>Send</button>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Assistance;