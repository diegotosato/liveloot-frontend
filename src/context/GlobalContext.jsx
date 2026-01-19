import { createContext, use } from "react";
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

    const [cart, setCart] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    });
    const [cartProducts, setCartProducts] = useState([])
    const [cartTotalPrice, setCartTotalPrice] = useState(0)
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
        cart,
        setCart,
        addToCart,
        cartProducts,
        setCartProducts,
        cartTotalPrice,
        setCartTotalPrice
    }), [
        loading,
        techs,
        prodotto,
        categoriesProd,
        singleProduct,
        cart,
        addToCart,
        cartProducts,
        cartTotalPrice
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

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);




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