import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"
import axios from "axios";

export default function AllProdotti() {
    const [all, setAll,] = useState([]);
    const { search, sortBy, sort } = useGlobalContext();
    console.log(search);


    useEffect(() => {
        axios.get(`http://localhost:3000/techs/products?q=${search || ''}&sortBy=${sortBy || ''}&sort=${sort || ''}`)
            .then(res => {
                setAll(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }, [search, sortBy, sort]);

    return (
        <>

            <h1 className="text-center">Tutti i Prodotti</h1>



            <div className="row justify-content-center">
                {all.map(item => (
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