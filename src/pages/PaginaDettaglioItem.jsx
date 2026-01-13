import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";
import SingleItemCard from "../components/SingleItemCard";

export default function PaginaDettaglioItem() {
    const { slug, id } = useParams();
    const { singleProduct, setSingleProduct } = useGlobalContext();

    useEffect(() => {
        if (!slug || !id) return;

        const fetchSingle = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:3000/techs/${slug}/${id}`
                );
                setSingleProduct(res.data);
            } catch (err) {
                console.error("Errore API:", err.response?.data || err.message);
            }
        };

        fetchSingle();
    }, [slug, id]);


    return (
        <>
            <div className="container">
                <SingleItemCard />
                <p>{singleProduct.title}</p>
                <p>ciao</p>
            </div>

        </>
    )
}