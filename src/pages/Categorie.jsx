import axios from "axios";
import CategorieCard from "../components/CategorieCard";
import { useEffect, useState } from "react";
import { useGlobalContext } from "../context/GlobalContext";

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
        <div>
            <h1 className="title text-center">Categories Page</h1>
            <div className="row justify-content-center">
                {categoriesProd.map(categorie => (
                    <CategorieCard
                        key={categorie.id}
                        name={categorie.name}
                        image={`http://localhost:3000/${categorie.image}`}
                        description={categorie.description}
                        slug={categorie.slug} />
                ))}
            </div>
        </div>
    );
}