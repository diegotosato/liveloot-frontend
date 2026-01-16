import {
    Cookie
} from "@phosphor-icons/react";
export default function Activity() {
    return <>
        <div className="cookie-overlay">
            <div className="cookie-modal">
                <div className="cookie-icon"><Cookie size={50} color="#320545" /></div>

                <h1 className="cookie-title">Utilizzo dei Cookie</h1>

                <p className="cookie-text">
                    Questo sito utilizza cookie per migliorare l'esperienza di navigazione,
                    analizzare il traffico e offrire contenuti personalizzati.
                    Cliccando su "Accetta", acconsenti all'uso dei cookie. Puoi gestire o
                    revocare il consenso in qualsiasi momento tramite le impostazioni.
                </p>

                <div className="cookie-actions">
                    <button className="btn-outline">ACCETTA</button>
                    <button className="btn-outline">RIFIUTA</button>
                    <button className="btn-outline">GESTISCI PREFERENZE</button>
                </div>
            </div>
        </div>
    </>
}