import { useGlobalContext } from "../context/GlobalContext"

export default function SingleItemCard() {

    const { singleProduct } = useGlobalContext()



    return (
        <>

            <div className="single py-4 row">


                <div className="col-4" key={singleProduct.id}>
                    <img src={`http://localhost:3000/${singleProduct.image}`} alt="" />
                    <div className="col m-4">
                        <h2>{singleProduct.title}</h2>
                        <p>{singleProduct.brand}</p>
                        <p>Prezzo: € {singleProduct.price}</p>
                    </div>
                </div>
            </div>


        </>
    )
}