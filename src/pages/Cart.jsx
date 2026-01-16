import { useGlobalContext } from "../context/GlobalContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {

    const { cart, setCart, setCartProducts, setCartTotalPrice } = useGlobalContext()
    const navigate = useNavigate()

    function totalPrice(price, quantity) {
        return (price * quantity).toFixed(2)
    }

    function calculateSubtotal() {
        if (!cart || cart.length === 0) return 0;
        return cart.reduce((total, product) => {
            return total + (product.price * product.quantity);
        }, 0);
    }

    function calculateShipping() {
        const subtotal = calculateSubtotal();
        return subtotal >= 150 ? 0 : 4.99;
    }

    function isFreeShipping() {
        return calculateSubtotal() >= 150;
    }

    function calculateTotal() {
        return calculateSubtotal() + calculateShipping();
    }

    function handleUpdateQuantity(productId, newQuantity) {
        if (newQuantity < 1) return;
        if (newQuantity > 5) return;

        setCart(cart.map(product =>
            product.id === productId
                ? { ...product, quantity: newQuantity }
                : product
        ));
    }


    function handleNavigateToProduct(product) {
        if (product.category_slug && product.slug) {
            navigate(`/categories/${product.category_slug}/${product.slug}`);
        }
    }

    function handleRemoveFromCart(idToRemove) {
        const filtered = cart.filter(prodId => prodId.id !== idToRemove)
        if (filtered.length === 0) {
            setCart([])
        } else {
            setCart(filtered)
        }
    }

    function handleProceed() {
        setCartProducts(cart)
        setCartTotalPrice(calculateTotal())
        navigate('/carrello/pagamento')
    }

    return (
        <div className="back-gradient">

            {/* sfere sul fondo */}
            <div className="all-prod all-prod-fixed sphere sphere-purple sphere-bigger"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-medium"></div>
            <div className="all-prod all-prod-fixed sphere sphere-blue sphere-smaller"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-smaller "></div>

            <div className="container">


                <section className="cart-container">
                    <h3 className="cart-title">Carrello</h3>

                    <div className="cart-card">

                        <div className="cart-header">
                            <span className="col-name">Nome</span>
                            <span className="col-prezzo">Prezzo</span>
                            <span className="col-quantity">Quantità</span>
                            <span className="col-total">Prezzo totale</span>
                            <div className="delete"></div>
                        </div>

                        {
                            cart?.map(addProd => (
                                <div className="product-row" key={addProd?.id}>
                                    <div className="col-name clickable" onClick={() => handleNavigateToProduct(addProd)}>
                                        <div className="img-category">
                                            <img src={`http://localhost:3000/${addProd?.image}`} alt={addProd?.title} />
                                        </div>
                                        <div className="title-category">{addProd?.title}</div>
                                    </div>
                                    <div className="line-prezzo clickable" onClick={() => handleNavigateToProduct(addProd)}>€ {addProd?.price}</div>
                                    <div className="line-quantity">
                                        <button
                                            className="aggiunta-rimozione"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleUpdateQuantity(addProd?.id, addProd?.quantity - 1);
                                            }}>
                                            −
                                        </button>
                                        <input
                                            type="number"
                                            className="number-quantity"
                                            value={addProd?.quantity}
                                            onChange={(e) => handleUpdateQuantity(addProd?.id, Number(e.target.value))} />
                                        <button
                                            className="aggiunta-rimozione"
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                handleUpdateQuantity(addProd?.id, addProd?.quantity + 1);
                                            }}>
                                            +
                                        </button>
                                    </div>
                                    <div className="line-total clickable" onClick={() => handleNavigateToProduct(addProd)}><strong>€ {totalPrice(addProd?.price, addProd?.quantity)}</strong></div>
                                    <div className="delete">
                                        <button className="remove-btn" onClick={(e) => {
                                            e.stopPropagation();
                                            handleRemoveFromCart(addProd?.id);
                                        }}>
                                            ×
                                        </button>
                                    </div>
                                </div>
                            ))

                        }

                    </div>

                    {/* contenitore totale pagamento */}
                    <div className="summary-card">
                        <div className="cart-summary-card">
                            <div className="subtotale">
                                <span className="title-subtotale">Subtotale</span>
                                <span className="price-subtotale">€ {calculateSubtotal().toFixed(2)}</span>
                            </div>
                            <div className="shipment">
                                <span className="title-shipment">Spedizione</span>
                                <span className="price-shipment">€ {calculateShipping().toFixed(2)}</span>
                            </div>
                            <p className={`shipment-text ${isFreeShipping() ? 'shipment-free' : 'shipment-paid'}`}>
                                {isFreeShipping()
                                    ? 'Spedizione gratuita!'
                                    : `Spedizione gratuita per ordini superiori a €150`
                                }
                            </p>
                            <div className="total-summary">
                                <span className="total-title">Totale</span>

                                <div className="final-price">
                                    <span className="total-price">€ {calculateTotal().toFixed(2)}</span>
                                    <button className="order-button rounded-pill" onClick={handleProceed}>PROCEDI ALL'ORDINE</button>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}