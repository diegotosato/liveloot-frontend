import { useEffect, useState } from "react";
import { Cookie } from "@phosphor-icons/react";

export default function Activity() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem("cookieConsent");
        if (!consent) {
            setVisible(true);
        }
    }, []);

    useEffect(() => {
        if (visible) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        // cleanup di sicurezza
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [visible]);

    const closeOverlay = () => {
        localStorage.setItem("cookieConsent", "true");
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div className="cookie-overlay">
            <div className="cookie-modal">
                <div className="cookie-icon">
                    <Cookie size={50} color="#320545" />
                </div>

                <h1 className="cookie-title">Utilizzo dei Cookie</h1>

                <p className="cookie-text">
                    Questo sito utilizza cookie per migliorare l'esperienza di navigazione,
                    analizzare il traffico e offrire contenuti personalizzati.
                </p>

                <div className="cookie-actions">
                    <button className="btn-outline" onClick={closeOverlay}>
                        ACCETTA
                    </button>
                    <button className="btn-outline" onClick={closeOverlay}>
                        RIFIUTA
                    </button>
                    <button className="btn-outline" onClick={closeOverlay}>
                        GESTISCI PREFERENZE
                    </button>
                </div>
            </div>
        </div>
    );
}
