import { useEffect, useState } from "react"
import { useSearchParams } from "react-router-dom"
import { Link } from "react-router-dom"
import axios from "axios";

import { CaretDown, SortAscending, SortDescending } from "@phosphor-icons/react";

export default function AllProdotti() {
    const [all, setAll] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();
    const [search, setSearch] = useState(searchParams.get("search") || '');
    const [sortBy, setSortBy] = useState(searchParams.get("sortBy") || '');

    const [sort, setSort] = useState(searchParams.get("sort") || 'asc');

    function handleClick() {
        if (sort === 'asc') {
            setSort('desc')
        } else {
            setSort('asc')
        }
    }

    useEffect(() => {
        if (search || sortBy) {
            setSearchParams({
                search: search,
                sortBy: sortBy,
                sort: sort
            });
        } else {
            setSearchParams({});
        }
    }, [search, sortBy, sort, setSearchParams]);

    useEffect(() => {
        axios.get(`http://localhost:3000/techs/products`, { params: Object.fromEntries(searchParams) })
            .then(res => {
                setAll(res.data.data)
            }).catch(err => {
                console.log(err)
            })
    }, [search, sortBy, sort, searchParams]);



    return (
        <>
            <div className="back-gradient">

                {/* sfere sul fondo */}
                <div className="all-prod all-prod-fixed sphere sphere-purple sphere-bigger"></div>
                <div className="all-prod all-prod-fixed sphere sphere-red sphere-medium"></div>
                <div className="all-prod all-prod-fixed sphere sphere-blue sphere-smaller"></div>
                <div className="all-prod all-prod-fixed sphere sphere-red sphere-smaller "></div>

                <div className="wave wave-z-index-0">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className="container">


                    <h2 className="products-title">
                        <span>i nostri</span> prodotti
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
                            <option className="catChat" value="">Ordina per</option>
                            <option className="catChat" value="title">Nome</option>
                            <option className="catChat" value="price">Prezzo</option>
                            <option className="catChat" value="created_at">Più recenti</option>
                        </select>



                        <button className="order-button rounded-pill" value={sort} onClick={handleClick}>
                            {sort === 'desc' ? <SortDescending size={32} /> : <SortAscending size={32} />}
                        </button>


                    </div>

                </div>

                <div className="container">

                    <div className="all-prod-section">
                        {
                            all.map(item => (
                                <div className="all-prod-card" key={item.id}>

                                    <div className="all-image">
                                        <img src={`http://localhost:3000/${item.image}`} alt="" />
                                    </div>

                                    <div className="all-details">
                                        <h4 className="all-title">{item.title}</h4>
                                        <p className="mb-0">Marca: <span className="all-brand">{item.brand}</span></p>
                                        <p>Prezzo: <strong className="all-price">€ {item.price}</strong></p>
                                    </div>

                                    <Link to={`/categorie/${item.slug}/${item.slug_product}`}>
                                        <button className='btn-view-product rounded-pill'>
                                            Vedi prodotto <CaretDown className="icon-rotate-neg-90" />
                                        </button>
                                    </Link>

                                </div>

                            ))
                        }
                    </div>

                </div>

            </div>
        </>
    )
}