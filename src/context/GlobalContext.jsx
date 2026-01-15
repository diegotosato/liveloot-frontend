import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import { useMemo } from "react";
import axios from "axios";


const GlobalContext = createContext();

function GlobalProvider({ children }) {


    const [techs, setTechs] = useState([])
    const [prodotto, setProdotto] = useState([]);
    const [categoriesProd, setCategoriesProd] = useState([]);
    const [loading, setLoading] = useState(false);
    const [singleProduct, setSingleProduct] = useState({})
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [cart, setCart] = useState([])
    const addToCart = (product, quantity) => {
        setCart(prev => {
            const existing = prev.find(cartProd => cartProd.id === product.id);

            if (existing) {
                return prev.map(cartProd =>
                    cartProd.id === product.id
                        ? { ...cartProd, quantity: quantity }
                        : cartProd
                );
            }

            return [...cart, { ...product, quantity }];
        });
    };

    const values = useMemo(() => ({
        loading,
        setLoading,
        techs,
        setTechs,

        prodotto,
        setProdotto,
        categoriesProd,
        setCategoriesProd,
        singleProduct,
        setSingleProduct,
        setSearch,
        search,
        sortBy,
        setSortBy,
        cart,
        setCart,
        addToCart
    }), [
        loading,
        techs,
        prodotto,
        categoriesProd,
        singleProduct,
        search,
        sortBy,
        cart,
        addToCart
    ]);

    useEffect(() => {
        setLoading(true);
        axios.get('http://localhost:3000/techs/all')
            .then(res => {
                setTechs(res.data)
            }).catch(err => {
                console.log(err)
            }).finally(() => {
                setLoading(false);
            })
    }, [])




    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    )
}

function useGlobalContext() {
    return useContext(GlobalContext);
}

export { GlobalProvider, useGlobalContext };