import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { useGlobalContext } from "../context/GlobalContext"
import { Link } from "react-router-dom"
import axios from "axios";

export default function AllProdotti() {
    const [all, setAll,] = useState([]);
    const { search, sortBy, sort, setSearch, setSortBy, setSort } = useGlobalContext();
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
            <div className="back-gradient">
                <div className="container">

                    <h2>
                        <span>i più</span> venduti
                    </h2>

                    <div className="filters">

                        <input
                            id="search-bar"
                            name="search-bar"
                            className="rounded-pill"
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            placeholder="Cerca..."
                            aria-label="Search" />

                        <select className="sort-select form-select rounded-pill" aria-label="Default select example" onChange={(e) => setSortBy(e.target.value)}>
                            <option className="catChat">Ordina per</option>
                            <option className="catChat" value="title">Nome</option>
                            <option className="catChat" value="price">Prezzo</option>
                            <option className="catChat" value="created_at">Più recenti</option>
                        </select>

                        <button className="order-button rounded-pill" value='desc' onClick={(e) => setSort(e.target.value)}>CAMBIA ORDINE</button>

                    </div>

                </div>

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
            </div>
        </>
    )
}