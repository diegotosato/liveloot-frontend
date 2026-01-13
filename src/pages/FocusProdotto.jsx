import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

export default function FocusProdotto() {

    let { slug, id } = useParams()
    const navigate = useNavigate()



    const { singleProduct, setSingleProduct } = useGlobalContext()
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




    const [prodID, setProdID] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:3000/techs/${slug}`)
            .then(res => {
                res.data.tag.map(item => setProdID(prev => [...prev, item.id]))
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    function handlePrev(slug, id) {
        if (!prodID.includes(Number(id) - 1)) {
            return
        } else {
            navigate(`/categories/${slug}/${parseInt(id) - 1}`)
        }
    }

    function handleNext(slug, id) {
        if (!prodID.includes(Number(id) + 1)) {
            return
        } else {
            navigate(`/categories/${slug}/${parseInt(id) + 1}`)
        }
    }






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



    return (
        <>
            <div className="back-gradient">

                <section className="product-section best-seller">

                    <div className="sphere sphere-purple sphere-bigger"></div>
                    <div className="sphere sphere-red sphere-medium"></div>
                    <div className="sphere sphere-blue sphere-smaller"></div>
                    <div className="sphere sphere-red sphere-smaller "></div>

                    <div className="container">

                        <div className="prod-card">


                            <div className="prod-image col">
                                <img src={`http://localhost:3000/${singleProduct.image}`} alt="" />
                            </div>

                            <div className="prod-details col">

                                <h3 className="prod-title">{singleProduct.title}</h3>
                                <p className="mb-0">Marca: <span className="prod-brand">{singleProduct.brand}</span></p>
                                <p>{singleProduct.description}</p>
                                <p>Prezzo: <strong className="prod-price">€ {updatePrice(singleProduct.price)}</strong></p>

                                <section className="d-flex align-items-center">
                                    <p className="mb-0">Quantità:</p>
                                    <button className="aggiunta-rimozione" onClick={handleSub}>−</button>
                                    <form onSubmit={(e) => handleSubmit(e)}>
                                        <input
                                            type="number"
                                            className="number-quantity"
                                            value={quantity}
                                            onChange={(e) => setQuantity(e.target.value)} />
                                    </form>
                                    <button className="aggiunta-rimozione" onClick={handleAdd}>+</button>
                                </section>

                                <section className="prod-buttons">
                                    <button
                                        className="btn-back rounded-pill"
                                        onClick={() => navigate(-1)}>
                                        TORNA INDIETRO
                                    </button>
                                    <button
                                        className="btn-add-to-cart rounded-pill">
                                        AGGIUNGI AL CARRELLO
                                    </button>
                                    <button
                                        className="btn-avanti-indietro rounded-pill"
                                        onClick={() => handlePrev(slug, id)}>
                                        PRODOTTO PRECEDENTE
                                    </button>
                                    <button
                                        className="btn-avanti-indietro rounded-pill"
                                        onClick={() => handleNext(slug, id)}>
                                        PRODOTTO SUCCESSIVO
                                    </button>
                                </section>

                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}