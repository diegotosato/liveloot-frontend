import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/GlobalContext";
import { useParams } from "react-router-dom";

export default function ProdottiCard() {

    const { prodotto } = useGlobalContext();
    const { slug } = useParams();

    return (
        <div className="single py-4 row">
            {prodotto.map(item => (
                <Link to={`/${slug}/${item.id}`} key={item.id}>
                    <div className="col-4" >
                        <img src={`http://localhost:3000/${item.image}`} alt="" />
                        <div className="col m-4">
                            <h2>{item.title}</h2>
                            <p>{item.brand}</p>
                            <p>Prezzo: € {item.price}</p>
                        </div>
                    </div>
                </Link>
            ))}

        </div>
    )
}