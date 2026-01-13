import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

export default function ProdottiCard() {

    const { prodotto } = useGlobalContext();
    const { slug } = useParams();

    return (
        <div className="row justify-content-center">
            {prodotto.map(item => (
                <Link className="card category col-12 col-md-6 col-lg-3 text-center m-3" to={`/${slug}/${item.id}`} key={item.id}>
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
    )
}