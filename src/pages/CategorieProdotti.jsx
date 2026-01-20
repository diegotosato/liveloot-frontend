import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";

export default function CategorieProdotti() {
    const { slug } = useParams();
    const { prodotto, setProdotto } = useGlobalContext();

    useEffect(() => {
        if (!slug) return;
        axios.get(`http://localhost:3000/techs/${slug}`)
            .then(res => {
                setProdotto(res.data.tag || []);
            }).catch(err => console.log(err));
    }, [slug]);

    return (
        <>
            <div className="back-gradient">
                {/* sfere sul fondo */}
                <div className="all-prod all-prod-fixed sphere sphere-purple sphere-bigger"></div>
                <div className="all-prod all-prod-fixed sphere sphere-red sphere-medium"></div>
                <div className="all-prod all-prod-fixed sphere sphere-blue sphere-smaller"></div>
                <div className="all-prod all-prod-fixed sphere sphere-red sphere-smaller "></div>

                <h2 className="products-title">
                    <span>prodotti</span>
                </h2>

                <div className="container">
                    <div className="all-categories-section">
                        {prodotto.map(item => (
                            <Link className="all-categories-card" to={`/categorie/${slug}/${item.slug}`} key={item.id}>
                                <div className="all-image">
                                    <img src={`http://localhost:3000/${item.image}`} alt="" />
                                </div>
                                <div className="all-details">
                                    <h4 className="all-title">{item.title}</h4>
                                    <p className="mb-0">Marca: <span className="all-brand">{item.brand}</span></p>
                                    <p>Prezzo: <strong>€ {item.price}</strong></p>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}