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
        </section>
    );
}