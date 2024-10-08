export const handleSendMessage = async (input, setMessages, messages, setInput, message, setButtonState) => {
    if (!input.trim())
        return;

    setButtonState(false);

    setMessages([...messages, `You: ${input}`]);
    setInput("");
    
    try {
        const response = await fetch("http://localhost:3300/chatRouter", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ message: input})
        });

        if (!response.ok)
            throw new Error(`HTTP error! status: ${response.status}`);

        const data = await response.json();

        setMessages(prevMessages => [...prevMessages, `Bot: ${data.response}`]);
    }

    catch (error) {
        console.error("Error fetching response:", error);
    }

    finally {
        setButtonState(true);
    }
    
    message.current.scrollIntoView({ behavior: "smooth" });
};