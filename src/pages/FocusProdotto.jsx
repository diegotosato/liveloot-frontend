import { useEffect, useState } from "react"
import { useGlobalContext } from "../context/GlobalContext"
import { useNavigate, useParams } from "react-router-dom"
import axios from "axios"

export default function FocusProdotto() {

    let { slug, slug_product } = useParams()
    const navigate = useNavigate()



    const { singleProduct, setSingleProduct, addToCart, cart } = useGlobalContext()
    useEffect(() => {
        if (!slug || !slug_product) return;

        const fetchSingle = async () => {
            try {
                const res = await axios.get(
                    `http://localhost:3000/techs/${slug}/${slug_product}`
                );
                setSingleProduct(res.data);
            } catch (err) {
                console.error("Errore API:", err.response?.data || err.message);
            }
        };

        fetchSingle();
    }, [slug, slug_product]);


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

    const [message, setMessage] = useState('')



    function handleAddToCart() {
        const productWithSlugs = {
            ...singleProduct,
            category_slug: slug,
            slug: slug_product
        };
        addToCart(productWithSlugs, Number(quantity))
        setMessage('Prodotto aggiunto al carrello con successo!')
        setTimeout(() => {
            setMessage('')
        }, 3000);
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

                        <div className="message-container text-center d-flex justify-content-center align-items-center">
                            {message.length > 0 ? <p className="success-message rounded-pill">{message}</p> : ''}
                        </div>

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
                                            onChange={(e) => setQuantity(Number(e.target.value))} />
                                    </form>
                                    <button className="aggiunta-rimozione" onClick={handleAdd}>+</button>
                                </section>

                                <section className="prod-buttons">
                                    <button
                                        className="btn-add-to-cart rounded-pill"
                                        onClick={handleAddToCart}>
                                        AGGIUNGI AL CARRELLO
                                    </button>
                                    <button
                                        className="btn-back rounded-pill"
                                        onClick={() => navigate(-1)}>
                                        TORNA INDIETRO
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