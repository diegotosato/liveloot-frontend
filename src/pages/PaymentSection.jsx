import {
    ShoppingCart
} from "@phosphor-icons/react";
import { useGlobalContext } from "../context/GlobalContext";
import React, { useState } from "react";
import axios from "axios";
import Checkout from "../components/Checkout";

export default function PaymentSection() {

    const { cartProducts, cartTotalPrice } = useGlobalContext()
    console.log(cartProducts);


    const buyer = {
        name: '',
        lastname: '',
        email: '',
        number: '',
        address: '',
        country: '',
        city: '',
        province: '',
        postalCode: '',
        notes: '',
        total_price: cartTotalPrice,
        products: cartProducts
    }
    const [formBuyer, setFormBuyer] = useState(buyer)


    function handleSumbit(e) {
        e.preventDefault();

        axios.post('http://localhost:3000/techs/carrello/pagamento', formBuyer)
            .then(res => {
                if (res.status === 200) {
                    console.log('success');
                    console.log(res.data);
                    console.log(formBuyer);
                }
            }).catch(err => {
                console.log(err.message);
            })
    }

    return (
        <div className="back-gradient">

            {/* sfere sul fondo */}
            <div className="all-prod all-prod-fixed sphere sphere-purple sphere-bigger"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-medium"></div>
            <div className="all-prod all-prod-fixed sphere sphere-blue sphere-smaller"></div>
            <div className="all-prod all-prod-fixed sphere sphere-red sphere-smaller "></div>

            <div className="container">

                <section className="payment-container">
                    <form onSubmit={e => handleSumbit(e)}>
                        <div className="title-section">
                            <h3 className="cart-title">Pagamento</h3>
                        </div>

                        <div className="payment-card">
                            <h3 className="title-address">Indirizzo di spedizione</h3>
                            <div className="card-form">
                                <div className="pagamento">
                                    {/* riga 1 */}
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Name">Nome</label>
                                            <input
                                                type="text"
                                                id="nome"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci nome"
                                                value={formBuyer.name}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, name: e.target.value })}
                                            />
                                        </div>

                                        <div className="col">
                                            <label htmlFor="Surname">Cognome</label>
                                            <input
                                                type="text"
                                                id="cognome"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci cognome"
                                                value={formBuyer.lastname}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, lastname: e.target.value })}
                                            />
                                        </div>


                                        <div className="col">
                                            <label htmlFor="tel">Email</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci telefono"
                                                value={formBuyer.email}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, email: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    {/* riga 2 */}
                                    <div className="row line-2">
                                        <div className="col">
                                            <label htmlFor="telefono">Telefono</label>
                                            <input
                                                type="text"
                                                id="telefono"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Indirizzo"
                                                value={formBuyer.number}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, number: e.target.value })}
                                            />
                                        </div>

                                        <div className="col">
                                            <label htmlFor="address">Indirizzo</label>
                                            <input
                                                type="text"
                                                id="address"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Indirizzo"
                                                value={formBuyer.address}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, address: e.target.value })}
                                            />
                                        </div>

                                        <div className="col-4">
                                            <label htmlFor="state">Stato</label>
                                            <input
                                                type="text"
                                                id="state"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Stato"
                                                value={formBuyer.country}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, country: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    {/* riga 3 */}
                                    <div className="row line-3">
                                        <div className="col">
                                            <label htmlFor="city">Città</label>
                                            <input
                                                type="text"
                                                id="city"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Città"
                                                value={formBuyer.city}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, city: e.target.value })}
                                            />
                                        </div>

                                        <div className="col">
                                            <label htmlFor="Province">Provincia</label>
                                            <input
                                                type="text"
                                                id="Province"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Provincia"
                                                value={formBuyer.province}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, province: e.target.value })}
                                            />
                                        </div>


                                        <div className="col">
                                            <label htmlFor="PostalCode">Codice postale</label>
                                            <input
                                                type="number"
                                                id="PostalCode"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Codice postale"
                                                value={formBuyer.postalCode}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, postalCode: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                    {/* riga 4 */}
                                    <div className="row line-4">
                                        <div className="col">
                                            <label htmlFor="notes">Note</label>
                                            <input
                                                type="text"
                                                id="notes"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Note"
                                                value={formBuyer.notes}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, notes: e.target.value })}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* inizio sezione 2 pagamento */}
                            <h3 className="title-address">Metodo di pagamento</h3>
                            <div className="card-form">
                                <div className="pagamento">
                                    {/* riga 1 */}
                                    <div className="row line-2">
                                        <div className="col">
                                            <label htmlFor="name">Nome</label>
                                            <input
                                                type="text"
                                                id="name"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Nome"
                                            />
                                        </div>

                                        <div className="col">
                                            <label htmlFor="surname">Cognome</label>
                                            <input
                                                type="text"
                                                id="surname"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Cognome"
                                            />
                                        </div>
                                    </div>
                                    {/* riga 2 */}
                                    <Checkout />
                                    <div>
                                        <button type="submit" className="payment-button">PROCEDI ALL'ORDINE</button>
                                        <button className="confirm-button">CONFERMA PAGAMENTO</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </form>
                </section>
            </div>
        </div>
    );
}