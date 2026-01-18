import {
    ShoppingCart
} from "@phosphor-icons/react";
import { useGlobalContext } from "../context/GlobalContext";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function PaymentSection() {

    const { cart } = useGlobalContext()
    const [checkForm, setCheckForm] = useState(false);



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
        // total_price: cartTotalPrice,
        products: cart
    }

    const [formBuyer, setFormBuyer] = useState(buyer)


    function handleSumbit(e) {
        e.preventDefault();

        if (buyer.name.length === 0 || buyer.lastname.length === 0 || buyer.email.length === 0 || buyer.number.length === 0 || buyer.address.length === 0 || buyer.country.length === 0 || buyer.city.length === 0 || buyer.province.length === 0 || buyer.postalCode.length === 0) {
            setCheckForm(true);
        }

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

    function calculateTotal() {
        return calculateSubtotal() + calculateShipping();
    }

    // useEffect(() => {
    //     if (buyer.name.length === 0 || buyer.lastname.length === 0 || buyer.email.length === 0 || buyer.number.length === 0 || buyer.address.length === 0 || buyer.country.length === 0 || buyer.city.length === 0 || buyer.province.length === 0 || buyer.postalCode.length === 0) {
    //         setCheckForm(true);
    //     }
    // }, [buyer.name, buyer.lastname, buyer.email, buyer.number, buyer.address, buyer.country, buyer.city, buyer.province, buyer.postalCode]);

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

                            <div className="title-section">
                                <h3 className="cart-title">Riepilogo ordine</h3>
                            </div>

                            {(cart.length > 0 || !cart) ?
                                <>
                                    {
                                        cart?.map(addProd => (
                                            <div className="product-row" key={addProd?.id}>
                                                <div className="pay-col-name">
                                                    <div className="img-category">
                                                        <img src={`http://localhost:3000/${addProd?.image}`} alt={addProd?.title} />
                                                    </div>
                                                    <div className="title-prod">
                                                        {addProd?.title}
                                                    </div>
                                                    <span className="prod-price">
                                                        € {addProd?.price}
                                                    </span>
                                                    <input
                                                        type="number"
                                                        className="number-quantity"
                                                        value={addProd?.quantity}
                                                        onChange={(e) => handleUpdateQuantity(addProd?.id, Number(e.target.value))} />
                                                </div>
                                            </div>
                                        ))

                                    }
                                </>


                                : ''}
                            <div className="d-flex align-items-center justify-content-between mt-4 mb-5">
                                <h3 className="title-address">Totale ordine: € {calculateTotal().toFixed(2)}</h3>
                                <Link to={'/carrello'}>
                                    <button type="button" className="payment-button rounded-pill">TORNA AL CARRELLO</button>
                                </Link>
                            </div>

                            <h3 className="title-address cart-title ">Indirizzo di spedizione</h3>

                            <div className="card-form">
                                <div className="pagamento">
                                    {/* riga 1 */}
                                    <div className="row">
                                        <div className="col">
                                            <label htmlFor="Name">Nome *</label>
                                            <input
                                                type="text"
                                                id="nome"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci nome"
                                                value={formBuyer.name}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, name: e.target.value })}
                                            />
                                            {
                                                checkForm && formBuyer.name.length === 0
                                                    ? <small className="text-danger"><i className="bi bi-exclamation-lg"></i>Questo campo è obbligatorio</small>
                                                    : ''
                                            }

                                        </div>

                                        <div className="col">
                                            <label htmlFor="Surname">Cognome *</label>
                                            <input
                                                type="text"
                                                id="cognome"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci cognome"
                                                value={formBuyer.lastname}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, lastname: e.target.value })}
                                            />
                                            {
                                                checkForm && formBuyer.lastname.length === 0
                                                    ? <small className="text-danger"><i className="bi bi-exclamation-lg"></i>Questo campo è obbligatorio</small>
                                                    : ''
                                            }
                                        </div>


                                        <div className="col">
                                            <label htmlFor="tel">Email *</label>
                                            <input
                                                type="email"
                                                id="email"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci telefono"
                                                value={formBuyer.email}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, email: e.target.value })}
                                            />
                                            {
                                                checkForm && formBuyer.email.length === 0
                                                    ? <small className="text-danger"><i className="bi bi-exclamation-lg"></i>Questo campo è obbligatorio</small>
                                                    : ''
                                            }
                                        </div>
                                    </div>
                                    {/* riga 2 */}
                                    <div className="row line-2">
                                        <div className="col">
                                            <label htmlFor="telefono">Telefono *</label>
                                            <input
                                                type="text"
                                                id="telefono"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Indirizzo"
                                                value={formBuyer.number}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, number: e.target.value })}
                                            />
                                            {
                                                checkForm && formBuyer.number.length === 0
                                                    ? <small className="text-danger"><i className="bi bi-exclamation-lg"></i>Questo campo è obbligatorio</small>
                                                    : ''
                                            }
                                        </div>

                                        <div className="col">
                                            <label htmlFor="address">Indirizzo *</label>
                                            <input
                                                type="text"
                                                id="address"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Indirizzo"
                                                value={formBuyer.address}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, address: e.target.value })}
                                            />
                                            {
                                                checkForm && formBuyer.address.length === 0
                                                    ? <small className="text-danger"><i className="bi bi-exclamation-lg"></i>Questo campo è obbligatorio</small>
                                                    : ''
                                            }
                                        </div>

                                        <div className="col-4">
                                            <label htmlFor="state">Stato *</label>
                                            <input
                                                type="text"
                                                id="state"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Stato"
                                                value={formBuyer.country}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, country: e.target.value })}
                                            />
                                            {
                                                checkForm && formBuyer.country.length === 0
                                                    ? <small className="text-danger"><i className="bi bi-exclamation-lg"></i>Questo campo è obbligatorio</small>
                                                    : ''
                                            }
                                        </div>
                                    </div>
                                    {/* riga 3 */}
                                    <div className="row line-3">
                                        <div className="col">
                                            <label htmlFor="city">Città *</label>
                                            <input
                                                type="text"
                                                id="city"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Città"
                                                value={formBuyer.city}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, city: e.target.value })}
                                            />
                                            {
                                                checkForm && formBuyer.city.length === 0
                                                    ? <small className="text-danger"><i className="bi bi-exclamation-lg"></i>Questo campo è obbligatorio</small>
                                                    : ''
                                            }
                                        </div>

                                        <div className="col">
                                            <label htmlFor="Province">Provincia *</label>
                                            <input
                                                type="text"
                                                id="Province"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Provincia"
                                                value={formBuyer.province}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, province: e.target.value })}
                                            />
                                            {
                                                checkForm && formBuyer.province.length === 0
                                                    ? <small className="text-danger"><i className="bi bi-exclamation-lg"></i>Questo campo è obbligatorio</small>
                                                    : ''
                                            }
                                        </div>


                                        <div className="col">
                                            <label htmlFor="PostalCode">Codice postale *</label>
                                            <input
                                                type="number"
                                                id="PostalCode"
                                                className="form-control custom-input-base"
                                                placeholder="Inserisci Codice postale"
                                                value={formBuyer.postalCode}
                                                onChange={(e) => setFormBuyer({ ...formBuyer, postalCode: e.target.value })}
                                            />
                                            {
                                                checkForm && formBuyer.postalCode.length === 0
                                                    ? <small className="text-danger"><i className="bi bi-exclamation-lg"></i>Questo campo è obbligatorio</small>
                                                    : ''
                                            }
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
                                    <div className="pay-recap">
                                        <span style={{ color: 'white' }}>* Campi obbligatori</span>
                                        <button type="submit" className="payment-button">PROCEDI ALL'ORDINE</button>
                                        {/* <button className="confirm-button">CONFERMA PAGAMENTO</button> */}
                                    </div>
                                </div>
                            </div>

                            {/* inizio sezione 2 pagamento */}


                        </div>
                    </form>
                </section>
            </div>
        </div >
    );
}