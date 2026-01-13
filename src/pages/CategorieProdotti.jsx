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
            <div className="container d-flex">
                <div className="row justify-content-center">
                    {prodotto.map(item => (
                        <Link className="card category col-12 col-md-6 col-lg-3 text-center m-3" to={`/categories/${slug}/${item.id}`} key={item.id}>
                            <div className="img-container col m-2">
                                <img src={`http://localhost:3000/${item.image}`} alt="" />
                            </div>
                            <div className="col m-2">
                                <h2>{item.title}</h2>
                                <p>{item.brand}</p>
                                <p>Prezzo: € {item.price}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </>
    )
}