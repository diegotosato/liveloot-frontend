import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div className="back-gradient">

            {/* sfere sul fondo */}
            <div className="all-prod all-prod-fixed sphere sphere-purple sphere-bigger"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-medium"></div>
            <div className="all-prod all-prod-fixed sphere sphere-blue sphere-smaller"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-smaller "></div>
            <div className="notFound text-center vh-100 d-flex flex-column justify-content-center align-items-center">
                <h1>404 - Not Found</h1>
                <p>Ambrogio è arrabbiato 😠 torna alla <Link to="/"><button className="confirm-button rounded-pill">Home</button></Link></p>
            </div>
        </div>
    )
}