import { useState, useRef, useEffect } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

export default function ChatBotReal({ products }) {
    const [context, setContext] = useState("");
    const [message, setMessage] = useState("");
    const { singleProduct } = useGlobalContext();
    const { slug_product } = useParams();
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages]);

    async function getResponse() {
        try {
            const payload = { message: message, prodotti: context };
            // include slug when asking about current product
            if (context === 'current product') {
                const slug = (singleProduct && (singleProduct.slug_product || singleProduct.product_slug || singleProduct.slug)) || slug_product;
                if (slug) {
                    payload.slug = slug;
                } else {
                    // prevent sending request without a slug for current product
                    console.error('Cannot request current product: slug not available');
                    alert('Seleziona un prodotto o visita la pagina del prodotto per usare questa opzione.');
                    return;
                }
            }

            // push user message to UI
            setMessages(prev => [...prev, { author: 'user', text: message, time: new Date().toLocaleTimeString() }]);

            const response = await fetch("http://localhost:3000/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });
            const text = await response.text();
            if (!response.ok) {
                console.error('Chat request failed with status', response.status);
                return;
            }
            const data = JSON.parse(text || '{}');
            const reply = data.reply || 'Nessuna risposta';
            setMessages(prev => [...prev, { author: 'ai', text: reply, time: new Date().toLocaleTimeString() }]);
            setMessage('');
        } catch (err) {
            console.error('Chat request error:', err);
        }
    }

    function handleChatSubmit(e) {
        e.preventDefault();
        getResponse();
    }

    function handleChatOpen() {
        // Logic to open chat window goes here
        const chatWindow = document.getElementById("chat-window");
        if (chatWindow) {
            chatWindow.classList.toggle("d-none");
        }
    }


    return (
        <>
            <div className="fixed-bottom chat-container z-3">

                <div className="card chat-card-spacing z-3 d-none mt-4 p-0" id="chat-window">
                    <div className="card-header chat-name">
                        Parla con Ambrogio,<br /> il tuo assistente personale
                    </div>
                    <div className="card-body d-flex flex-column justify-content-between">
                        <select className="form-select mb-3 rounded-pill chat-select" aria-label="Default select example" onChange={(e) => setContext(e.target.value)}>
                            <option className="catChat">Seleziona una categoria</option>
                            <option className="catChat" value="current product">Prodotto corrente</option>
                            <option className="catChat" value="product comparison">Confronto tra prodotti</option>
                        </select>
                        <div id="chat-messages">
                            {messages.map((msg, idx) => (
                                <div key={idx} className={`chat-bubble ${msg.author === 'user' ? 'user' : 'ai'}`}>
                                    <div className="chat-meta">
                                        <span className={`chat-author ${msg.author === 'user' ? 'user' : 'ai'}`}>{msg.author === 'user' ? 'Tu' : 'AMBROGIO'}</span>
                                        <span className="chat-timestamp">{msg.time}</span>
                                    </div>
                                    <div className="chat-texts">{msg.text}</div>
                                </div>
                            ))}
                            <div ref={messagesEndRef} />
                        </div>




                        <div className="d-flex justify-content-between mt-3">
                            <form type="submit" className="chat-form d-flex" onSubmit={handleChatSubmit}>
                                <input className="form-control rounded-pill chat-select" type="text" placeholder="Chat" value={message} onChange={(e) => { setMessage(e.target.value) }} />
                            </form>
                            <button className="btn-close-chat rounded-pill" onClick={() => handleChatOpen()}>Close Chat</button>
                        </div>
                    </div>
                </div>

                <div className="chat-button-spacing z-3">
                    <button type="button" className="btn-open-chat rounded-circle chat-button-size" onClick={() => handleChatOpen()}>
                        <i className="bi bi-robot"></i>
                    </button>
                </div>
            </div >
        </>
    );
}