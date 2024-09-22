export const handleSendMessage = (input, setMessages, messages, setInput, message) => {
    if (!input.trim())
        return;

    // Send message to the LLM API

    setMessages([...messages, `You: ${input}`]);
    setInput("");
    
    message.current.scrollIntoView({ behavior: "smooth" });
};

// export const handleReceiveMessage = () => {

// };