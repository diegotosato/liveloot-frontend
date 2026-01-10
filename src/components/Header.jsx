import { NavLink } from "react-router-dom";
import { Keyboard, GridNine, MouseSimple, Monitor, VideoCamera, OfficeChair, Headphones, DeviceTablet, DesktopTower, Laptop } from "@phosphor-icons/react";

export default function Header() {


    return (
        <>

            <Keyboard size={32} />
            <GridNine size={32} />
            <MouseSimple size={32} />
            <Monitor size={32} />
            <VideoCamera size={32} />
            <OfficeChair size={32} />
            <Headphones size={32} />
            <DeviceTablet size={32} style={{ transform: "rotate(90deg)" }} />
            <DesktopTower size={32} />
            <Laptop size={32} />

            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/"><strong>Movies</strong></NavLink>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/contacts" aria-current="page">Contacts</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/admin" aria-current="page">Admin</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

        </>
    )
}