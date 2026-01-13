import ProdottiCard from "../components/ProdottiCard";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";

export default function CategorieProdotti() {
    const { slug } = useParams();
    const { setProdotto } = useGlobalContext();

    useEffect(() => {
        if (!slug) return;
        axios.get(`http://localhost:3000/techs/${slug}`)
            .then(res => {
                setProdotto(res.data.tag || []);
            }).catch(err => console.log(err));
    }, [slug]);

    return (
        <>
            <div className="container d-flex">
                <ProdottiCard />
            </div>
        </>
    )
}