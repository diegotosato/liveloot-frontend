import axios from "axios";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";
import { Link } from "react-router-dom";

export default function Categorie() {

    const { categoriesProd, setCategoriesProd } = useGlobalContext();

    useEffect(() => {
        axios.get(`http://localhost:3000/techs/`)
            .then(res => {
                setCategoriesProd(res.data)
            }).catch(err => {
                console.log(err)
            })
    }, []);
    return (
        <div className="back-gradient">

            {/* sfere sul fondo */}
            <div className="all-prod all-prod-fixed sphere sphere-purple sphere-bigger"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-medium"></div>
            <div className="all-prod all-prod-fixed sphere sphere-blue sphere-smaller"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-smaller "></div>


            <h2 className="products-title">
                <span>categorie</span> prodotti
            </h2>
            <div className="container">
                <div className="all-categories-section">
                    {
                        categoriesProd.map(categorie => (
                            <Link className="all-categories-card" to={`/categories/${categorie.slug}`} key={categorie.id} slug={categorie.slug}>
                                <div className="all-image">
                                    <img src={`http://localhost:3000/${categorie.image}`} alt="" />
                                </div>
                                <div className="all-details">
                                    <h4 className="all-title">{categorie.name}</h4>
                                    <p className="mb-0">Marca: <span className="all-brand">{categorie.description}</span></p>
                                </div>
                            </Link>
                        ))
                    }
                </div>
            </div>

        </div>
    );
}