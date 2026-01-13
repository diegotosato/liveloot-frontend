import { NavLink, Link, useParams } from "react-router-dom";
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
    const { slug } = useParams()

    const { categoriesProd, setCategoriesProd } = useGlobalContext();

    useEffect(() => {
        axios.get(`http://localhost:3000/techs/`)
            .then(res => {
                setCategoriesProd(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, []);


    const icone = {
        'tastiera': <Keyboard />,
        'stream-deck': <GridNine />,
        'mouse': <MouseSimple />,
        'monitor': <Monitor />,
        'webcam': <VideoCamera />,
        'sedie-gaming': <OfficeChair />,
        'cuffie': <Headphones />,
        'tappetini-da-gaming': <DeviceTablet style={{ transform: "rotate(90deg)" }} />,
        'computer-fisso-gaming': <DesktopTower />,
        'computer-portatile-gaming': <Laptop />
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
                                <NavLink className="nav-link fs-5" aria-current="page">
                                    Categorie<CaretDown className="down-arrow" />
                                </NavLink>
                                <div className="categories-dropdown">
                                    <ul className="m-0 p-0 pb-3">
                                        {
                                            categoriesProd?.map(cat => (
                                                <li key={cat.slug}>
                                                    <Link className="category-recap" to={`/categories/${cat.slug}`}>
                                                        <div className="category-visual me-3">
                                                            <div className="category-icon">
                                                                {icone[cat.slug]}
                                                            </div>
                                                        </div>
                                                        <div className="category-details">
                                                            <h6 className="category-name m-0 p-0 mb-1">
                                                                {cat.name}
                                                            </h6>
                                                            <p className="category-desc m-0 p-0">
                                                                {cat.description}
                                                            </p>
                                                        </div>
                                                    </Link>
                                                </li>
                                            ))
                                        }
                                        <li>
                                            <h5>
                                                <Link to={'/categories'} className="categories-view-all">Vedi tutte<CaretDown className="down-arrow" style={{ rotate: '-90deg' }} /></Link>
                                            </h5>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className="nav-item about-us">
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