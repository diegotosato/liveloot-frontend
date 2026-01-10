import { createContext } from "react";
import { useContext, useState } from "react";
const GlobalContext = createContext();


function GlobalProvider({ children }) {

    const [loading, setLoading] = useState(false);
    const values = {
        loading,
        setLoading
    };

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