import { useGlobalContext } from "../context/GlobalContext"

export default function SingleItemCard() {

    const { singleProduct } = useGlobalContext()

    if (!singleProduct || !singleProduct.title) {
        return <p>Caricamento...</p>;
    }

    return (
        <>
            <p>{singleProduct.title}</p>
            <p>ciao da qui</p>

        </>
    )
}