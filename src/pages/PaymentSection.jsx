import {
    ShoppingCart
} from "@phosphor-icons/react";

export default function PaymentSection() {
    return (
        <div className="back-gradient">

            {/* sfere sul fondo */}
            <div className="all-prod all-prod-fixed sphere sphere-purple sphere-bigger"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-medium"></div>
            <div className="all-prod all-prod-fixed sphere sphere-blue sphere-smaller"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-smaller "></div>

            <div className="container">

                <section className="payment-container">
                    <div className="title-section">
                        <h3 className="cart-title">Pagamento</h3>
                    </div>

                    <div className="payment-card">
                        <h3 className="title-address">Indirizzo di spedizione</h3>
                        <div className="card-form">
                            <form className="pagamento">
                                {/* riga 1 */}
                                <div className="row">
                                    <div className="col">
                                        <label for="Name">Nome</label>
                                        <input
                                            type="text"
                                            id="nome"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci nome"
                                        />
                                    </div>

                                    <div className="col">
                                        <label for="Surname">Cognome</label>
                                        <input
                                            type="text"
                                            id="cognome"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci cognome"
                                        />
                                    </div>


                                    <div className="col">
                                        <label for="tel">Telefono</label>
                                        <input
                                            type="number"
                                            id="telefono"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci telefono"
                                        />
                                    </div>
                                </div>
                                {/* riga 2 */}
                                <div className="row line-2">
                                    <div className="col">
                                        <label for="address">Indirizzo</label>
                                        <input
                                            type="text"
                                            id="address"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci Indirizzo"
                                        />
                                    </div>

                                    <div className="col-4">
                                        <label for="state">Stato</label>
                                        <input
                                            type="text"
                                            id="state"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci Stato"
                                        />
                                    </div>
                                </div>
                                {/* riga 3 */}
                                <div className="row line-3">
                                    <div className="col">
                                        <label for="city">Città</label>
                                        <input
                                            type="text"
                                            id="city"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci Città"
                                        />
                                    </div>

                                    <div className="col">
                                        <label for="Province">Provincia</label>
                                        <input
                                            type="text"
                                            id="Province"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci Provincia"
                                        />
                                    </div>


                                    <div className="col">
                                        <label for="PostalCode">Codice postale</label>
                                        <input
                                            type="number"
                                            id="PostalCode"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci Codice postale "
                                        />
                                    </div>
                                </div>
                                {/* riga 4 */}
                                <div className="row line-4">
                                    <div className="col">
                                        <label for="notes">Note</label>
                                        <input
                                            type="text"
                                            id="notes"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci Note "
                                        />
                                    </div>
                                </div>
                            </form>
                        </div>
                        {/* inizio sezione 2 pagamento */}
                        <h3 className="title-address">Metodo di pagamento</h3>
                        <div className="card-form">
                            <form className="pagamento">
                                {/* riga 1 */}
                                <div className="row line-2">
                                    <div className="col">
                                        <label for="name">Nome</label>
                                        <input
                                            type="text"
                                            id="name"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci Nome"
                                        />
                                    </div>

                                    <div className="col">
                                        <label for="surname">Cognome</label>
                                        <input
                                            type="text"
                                            id="surname"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci Cognome"
                                        />
                                    </div>
                                </div>
                                {/* riga 2 */}
                                <div className="row line-2">
                                    <div className="col-6">
                                        <label for="cardNumber">Numero della carta</label>
                                        <input
                                            type="text"
                                            id="cardNumber"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci numero della carta"
                                        />
                                    </div>

                                    <div className="col">
                                        <label for="expirationDate">Data di scadenza</label>
                                        <input
                                            type="text"
                                            id="expirationDate"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci data di scadenza"
                                        />
                                    </div>


                                    <div className="col">
                                        <label for="cvv">CVV</label>
                                        <input
                                            type="number"
                                            id="cvv"
                                            className="form-control custom-input-base"
                                            placeholder="Inserisci CVV"
                                        />
                                    </div>
                                </div>
                                <div>
                                    <button className="payment-button">PROCEDI ALL'ORDINE</button>
                                    <button className="confirm-button">PROCEDI ALL'ORDINE</button>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}