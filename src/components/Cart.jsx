export default function Cart() {
    return (
        <section className="cart-container">
            <h3 className="cart-title">Carrello</h3>

            <div className="cart-card">
                <div className="cart-header">
                    <span className="col-name">Nome</span>
                    <span className="col-prezzo">Prezzo</span>
                    <span className="col-quantity">Quantità</span>
                    <span className="col-total">Prezzo totale</span>
                    <div className="delete">

                    </div>
                </div>
                <div className="product-row">
                    <div className="col-name">
                        <div className="img-category"></div>
                        <div className="title-category"></div>
                    </div>
                    <div className="line-prezzo">€ 0.00</div>
                    <div className="line-quantity">
                        <div className="quantity-selector">000000</div>
                    </div>
                    <div className="line-total">€ 0.00</div>
                    <div className="delete">
                        <button className="remove-btn">×</button>
                    </div>
                </div>
            </div>
            {/* contenitore totale pagamento */}
            <div className="summary-card">
                <div className="cart-summary-card">
                    <div className="subtotale">
                        <span className="title-subtotale">Subtotale</span>
                        <span className="price-subtotale">€ 00.00</span>
                    </div>
                    <div className="shipment">
                        <span className="title-shipment">Spedizione</span>
                        <span className="price-shipment">€ 00.00</span>
                    </div>
                    <p className="shipment-text">
                        spedizione gratuita
                    </p>
                    <div className="total-summary">
                        <span className="total-title">Totale</span>

                        <div className="final-price">
                            <span className="total-price">€ 00.00</span>
                            <button className="order-button">PROCEDI ALL'ORDINE</button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}