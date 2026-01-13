import { useGlobalContext } from "../context/GlobalContext"

export default function SingleItemCard() {

    const { singleProduct } = useGlobalContext()



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
                                    <p>Prezzo: € {singleProduct.price}</p>
                                    <section className="d-flex align-items-center gap-2">
                                        <p className="mb-0">Quantità:</p>

                                        <button className="aggiunta-rimozione">−</button>

                                        <input
                                            className="number-quantity"

                                            value="1"
                                        />

                                        <button className="aggiunta-rimozione">+</button>
                                    </section>
                                    <section className="d-flex">
                                        <div className="row">
                                            <button className="btn btn-back rounded-pill  col-5 m-2">TORNA INDIETRO</button>
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