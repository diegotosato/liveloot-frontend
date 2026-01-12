import { useGlobalContext } from "../context/GlobalContext";
import { useState, useEffect, useRef } from "react";
export default function Chat() {

    const { getAIResponse, setChatResponse, chatInput, setChatInput, chatRealInput, setChatRealInput, chatResponseReal, setChatResponseReal } = useGlobalContext();

    const messagesRef = useRef(null);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        } else if (messagesRef.current) {
            messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
        }
    }, [chatResponseReal]);



    function handleChatOpen() {
        // Logic to open chat window goes here
        console.log("Chat window opened");
        const chatWindow = document.getElementById("chat-window");
        if (chatWindow) {
            chatWindow.classList.toggle("d-none");
        }
    }

    async function handleChatSubmit(e) {
        e.preventDefault();
        if (!chatInput || !chatInput.trim()) return;
        console.log("Chat submitted:", chatInput);
        const response = await getAIResponse(chatInput);
        setChatRealInput(chatInput);
        const now = new Date();
        const userTime = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const aiTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        setChatResponseReal((prev) => [...prev, { author: 'user', text: chatInput, time: userTime }, { author: 'ai', text: response, time: aiTime }]);
        setChatInput("");
    }


    return (
        <>
            <div className="fixed-bottom m-5 z-3">
                <div className="card m-5 z-3 d-none mt-4" id="chat-window" style={{ width: '18rem', minHeight: '500px' }}>
                    <div className="card-header">
                        Chat Window
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <select className="form-select mb-3 rounded-pill" aria-label="Default select example" onChange={(e) => setChatResponse(e.target.value)}>
                            <option className="catChat">Seleziona una categoria</option>
                            <option className="catChat" value="Tastiera">Tastiera</option>
                            <option className="catChat" value="Mouse">Mouse</option>
                            <option className="catChat" value="Monitor">Monitor</option>
                            <option className="catChat" value="Webcam">Webcam</option>
                            <option className="catChat" value="Cuffie">Cuffie</option>
                            <option className="catChat" value="Sedie da gaming">Sedie da gaming</option>
                            <option className="catChat" value="Tappetini da gaming">Tappetini da gaming</option>
                            <option className="catChat" value="Computer fisso da gaming">Computer fisso da gaming</option>
                            <option className="catChat" value="Computer portatile da gaming">Computer portatile da gaming</option>
                            <option className="catChat" value="Stream deck">Stream deck</option>
                        </select>
                        <div id="chat-messages" ref={messagesRef} style={{ height: '300px', overflowY: 'auto', border: '1px solid #ccc', padding: '10px', borderRadius: '5px' }}>
                            {(chatResponseReal || []).map((msg, idx) => (
                                <div key={idx} className={`chat-bubble ${msg.author === 'user' ? 'user' : 'ai'}`}>
                                    <div className="chat-meta">
                                        <span className={`chat-author ${msg.author === 'user' ? 'user' : 'ai'}`}>{msg.author === 'user' ? 'Tu' : 'AMBROGIO'}</span>
                                        <span className="chat-timestamp">{msg.time}</span>
                                    </div>
                                    <div className="chat-text">{msg.text}</div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>
                        <div>
                            <form type="submit" className="d-flex" onSubmit={handleChatSubmit}>
                                <input className="form-control rounded-pill" type="text" placeholder="Chat" value={chatInput} onChange={(e) => { setChatInput(e.target.value) }} />
                            </form>
                            <button className="btn btn-dark mt-3" onClick={() => handleChatOpen()}>Close Chat</button>
                        </div>
                    </div>
                </div >
                <div className="fixed-bottom m-5 z-3">
                    <button type="button" style={{ width: '80px', height: '80px' }} className="btn btn-dark rounded-circle" onClick={() => handleChatOpen()}>
                        <i className="bi bi-robot"></i></button>
                </div >
            </div>

        </>)
}