import { NavLink, Link } from "react-router-dom";
import {
    Keyboard,
    GridNine,
    MouseSimple,
    Monitor,
    VideoCamera,
    OfficeChair,
    Headphones,
    DeviceTablet,
    DesktopTower,
    Laptop,
    ShoppingCart,
    CaretDown
} from "@phosphor-icons/react";
import Logo from '../assets/img/logo.svg'

import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

export default function Header() {

    const { categoriesProd, setCategoriesProd } = useGlobalContext();

    useEffect(() => {
        axios.get(`http://localhost:3000/techs/`)
            .then(res => {
                setCategoriesProd(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, []);
    console.log(categoriesProd);


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

            {/* Navbar */}
            <nav className="navbar navbar-expand-sm navbar-light bg-light py-3">

                <div className="container">

                    {/* Logo */}
                    <NavLink className="navbar-brand" to="/">
                        <img src={Logo} alt="logo" />
                    </NavLink>

                    {/* Links */}
                    <div className="collapse navbar-collapse" id="collapsibleNavId">

                        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" to="/" aria-current="page">
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" to="/categories" aria-current="page">
                                    Categorie<CaretDown className="down-arrow" />
                                </NavLink>
                                <div className="categories-dropdown">
                                    <ul className="m-0 p-0">
                                        {
                                            categoriesProd?.map(cat => (
                                                <li>
                                                    <Link className="category-recap">
                                                        <div className="category-visual me-2">
                                                            <Keyboard className="category-icon" />
                                                        </div>
                                                        <div className="category-details">
                                                            <h6 className="category-name m-0 p-0 mb-1">
                                                                {cat.name}
                                                                <CaretDown className="down-arrow" style={{ rotate: '-90deg' }} />
                                                            </h6>
                                                            <p className="category-desc m-0 p-0">
                                                                {cat.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))
                                        }

                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link fs-5" to="/" aria-current="page">
                                    Chi Siamo
                                </NavLink>
                            </li>
                        </ul>
                    </div>



                    {/* SearchBar */}
                    <input
                        id="search-bar"
                        name="search-bar"
                        className="rounded-pill"
                        type="search"
                        placeholder="Cerca..."
                        aria-label="Search" />

                    {/* Carrello */}
                    <button className="cart ms-2" type="submit">
                        <ShoppingCart className="cart-icon" />
                    </button>
                </div>
            </nav>

        </>
    )
}