import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
export default function Chat() {

    const { getAIResponse, setChatResponse, chatInput, setChatInput } = useGlobalContext();



    function handleChatOpen() {
        // Logic to open chat window goes here
        console.log("Chat window opened");
        const chatWindow = document.getElementById("chat-window");
        if (chatWindow) {
            chatWindow.classList.toggle("d-none");
        }
    }

    function handleChatSubmit(e) {
        e.preventDefault();
        // Logic to handle chat submission goes here
        console.log("Chat submitted:", chatInput);
        getAIResponse(chatInput);
        setChatInput("");
    }


    return (
        <>
            <div className="card d-none" id="chat-window" style={{ width: '18rem', position: 'fixed', bottom: '80px', right: '20px', zIndex: 1000 }}>
                <div className="card-header">
                    Chat Window
                </div>
                <div className="card-body">
                    <select className="form-select" aria-label="Default select example" onChange={(e) => setChatResponse(e.target.value)}>
                        <option value="Tastiera">Tastiera</option>
                        <option value="Mouse">Mouse</option>
                        <option value="Monitor">Monitor</option>
                        <option value="Webcam">Webcam</option>
                        <option value="Cuffie">Cuffie</option>
                        <option value="Sedie da gaming">Sedie da gaming</option>
                        <option value="Tappetini da gaming">Tappetini da gaming</option>
                        <option value="Computer fisso da gaming">Computer fisso da gaming</option>
                        <option value="Computer portatile da gaming">Computer portatile da gaming</option>
                        <option value="Stream deck">Stream deck</option>
                    </select>
                    <form type="submit" className="d-flex" onSubmit={handleChatSubmit}>
                        <input type="text" placeholder="Chat" value={chatInput} onChange={(e) => { setChatInput(e.target.value), console.log(chatInput) }} />
                    </form>




                    <button className="btn btn-dark" onClick={() => handleChatOpen()}>Close Chat</button>

                </div>
            </div>
            <button type="button" className="btn btn-dark rounded-circle" onClick={() => handleChatOpen()}><i className="bi bi-robot"></i></button>
        </>)
}