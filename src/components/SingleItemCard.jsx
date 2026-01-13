import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import { useNavigate } from "react-router-dom"

export default function SingleItemCard() {

    const { singleProduct } = useGlobalContext()
    const navigate = useNavigate()
    const [quantity, setQuantity] = useState(1)

    useEffect(() => {
        if (quantity > 5) {
            setQuantity(5)
        }
    }, [quantity])

    function handleSub() {
        if (quantity <= 1) {
            setQuantity(1)
        } else {
            setQuantity(quantity - 1)
        }
    }

    function handleAdd() {
        if (quantity >= 5) {
            setQuantity(5)
        } else {
            setQuantity(quantity + 1)
        }
    }

    function updatePrice(price) {
        const decimalNumber = Number(price).toFixed(2)
        const result = Number(decimalNumber).toFixed(2) * Number(quantity).toFixed(2)
        return Number(result).toFixed(2)
    }

    function handleSubmit(e) {
        e.preventDefault()
        if (quantity >= 5) {
            setQuantity(5)
        }
    }

    function prevPage() {
        navigate(-1)
    }


    return (
        <>
            <div className="back-gradient">
                <section className="product-section best-seller">
                    <div className="sphere sphere-purple sphere-bigger"></div>
                    <div className="sphere sphere-red sphere-medium"></div>
                    <div className="sphere sphere-blue sphere-smaller"></div>
                    <div className="sphere sphere-red sphere-smaller "></div>

                    <div className="container py-4 ">

                        <div className="card border-0 d-flex ">
                            <div className=" container row" key={singleProduct.id}>
                                <div className="card-left col-7 py-3 ml-3">
                                    <img src={`http://localhost:3000/${singleProduct.image}`} alt="" />
                                </div>
                                <div className="card-right col-5">
                                    <h2>{singleProduct.title}</h2>
                                    <p>Marca: {singleProduct.brand}</p>
                                    <p>{singleProduct.description}</p>
                                    <p>Prezzo: € {updatePrice(singleProduct.price)}</p>
                                    <section className="d-flex align-items-center gap-2">
                                        <p className="mb-0">Quantità:</p>

                                        <button className="aggiunta-rimozione" onClick={handleSub}>−</button>
                                        <form onSubmit={(e) => handleSubmit(e)}>
                                            <input
                                                type="number"
                                                className="number-quantity"
                                                value={quantity}
                                                onChange={(e) => setQuantity(e.target.value)}
                                            />
                                        </form>


                                        <button className="aggiunta-rimozione" onClick={handleAdd}>+</button>
                                    </section>
                                    <section className="d-flex">
                                        <div className="row">
                                            <button className="btn btn-back rounded-pill  col-5 m-2" onClick={() => prevPage()}>TORNA INDIETRO</button>
                                            <button className="btn btn-add-to-cart rounded-pill  col-5 m-2">AGGIUNGI AL CARRELLO</button>
                                            <button className="btn btn-avanti-indietro rounded-pill bg-light  col-5 m-2">PRODOTTO PRECEDENTE</button>
                                            <button className="btn bg-light rounded-pill  btn-avanti-indietro  col-5 m-2">PRODOTTO SUCCESSIVO</button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}