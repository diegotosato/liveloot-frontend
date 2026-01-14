import { useGlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"

export default function AllProdotti() {

    const { techs } = useGlobalContext();

    return (
        <>

            <h1 className="text-center">Tutti i Prodotti</h1>



            <div className="row justify-content-center">
                {techs.map(item => (
                    <Link className="card category col-12 col-md-6 col-lg-2 text-center m-3" to={`/categories/${item.slug}/${item.slug_product}`} key={item.id}>
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

        </>
    )
}