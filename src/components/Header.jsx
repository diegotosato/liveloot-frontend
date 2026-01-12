import { NavLink } from "react-router-dom";
import { Keyboard, GridNine, MouseSimple, Monitor, VideoCamera, OfficeChair, Headphones, DeviceTablet, DesktopTower, Laptop, ShoppingCart } from "@phosphor-icons/react";
import Logo from '../assets/img/logo.svg'

export default function Header() {

    const icone = {
        'tastiera': <Keyboard size={32} />,
        'stream-deck': <GridNine size={32} />,
        'mouse': <MouseSimple size={32} />,
        'monitor': <Monitor size={32} />,
        'webcam': <VideoCamera size={32} />,
        'sedie-gaming': <OfficeChair size={32} />,
        'cuffie': <Headphones size={32} />,
        'tappetini-da-gaming': <DeviceTablet size={32} style={{ transform: "rotate(90deg)" }} />,
        'computer-fisso-gaming': <DesktopTower size={32} />,
        'computer-portatile-gaming': <Laptop size={32} />
    }

    return (
        <>


            <nav className="navbar navbar-expand-sm navbar-light bg-light">
                <div className="container">
                    <NavLink className="navbar-brand" to="/">
                        <img src={Logo} alt="logo" />
                    </NavLink>
                    <div className="collapse navbar-collapse" id="collapsibleNavId">
                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" aria-current="page">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" aria-current="page">Categorie</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/" aria-current="page">Chi Siamo</NavLink>
                            </li>
                        </ul>
                    </div>
                    <form className="form-inline w-25">
                        <input className="form-control rounded-pill" type="search" placeholder="Search" aria-label="Search"></input>
                        <button className="cart ms-3" type="submit"><ShoppingCart className="cart-icon" /></button>
                    </form>
                </div>
            </nav>

        </>
    )
}