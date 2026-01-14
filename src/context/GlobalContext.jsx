import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import { pipeline } from '@huggingface/transformers';
import { useMemo } from "react";
import axios from "axios";


const GlobalContext = createContext();

function GlobalProvider({ children }) {

    const [chatRealInput, setChatRealInput] = useState("");
    const [chatResponseReal, setChatResponseReal] = useState([]);
    const [chatInput, setChatInput] = useState("");
    const [chatResponse, setChatResponse] = useState("");
    const [techs, setTechs] = useState([])
    const [prodotto, setProdotto] = useState([]);
    const [categoriesProd, setCategoriesProd] = useState([]);
    const [loading, setLoading] = useState(false);
    const [singleProduct, setSingleProduct] = useState({})
    const [search, setSearch] = useState("");
    const [sortBy, setSortBy] = useState("");
    const [sort, setSort] = useState("");
    const values = useMemo(() => ({
        loading,
        setLoading,
        techs,
        setTechs,
        getAIResponse,
        setChatResponse,
        chatInput,
        setChatInput,
        chatRealInput,
        setChatRealInput,
        chatResponseReal,
        setChatResponseReal,
        chatResponse,
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
        sort,
        setSort
    }), [
        loading,
        techs,
        chatInput,
        chatRealInput,
        chatResponseReal,
        chatResponse,
        prodotto,
        categoriesProd,
        singleProduct,
        search,
        sortBy,
        sort
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


    async function translateText(prompt) {
        const translator = await pipeline('translation', 'Xenova/opus-mt-en-it', {
            dtype: 'fp32'
        });
        const output = await translator(prompt);
        return output[0].translation_text;
    }

    async function translateDescription(prompt) {
        const translator = await pipeline('translation', 'Xenova/opus-mt-it-en', {
            dtype: 'fp32'
        });
        const output = await translator(prompt);
        return output[0].translation_text;
    }

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3000/techs/${chatResponse}`)
            .then(res => {
                setCategories(res.data.tag)

            }).catch(err => {
                console.log(err)
            })
    }, [chatResponse]);


    async function generateText(userInput) {




        const pipe = await pipeline('question-answering', 'Xenova/distilbert-base-cased-distilled-squad', {
            dtype: 'fp32'
        });
        console.log(chatInput);

        const question = await translateDescription(userInput);
        const context = (categories || []).map(tech => tech.title).join(", ");
        const translatedContext = await translateDescription(context);
        const output = await pipe(question, translatedContext);
        return output;
    }



    async function getAIResponse(userInput) {
        const prompt = `User: ${userInput}\nAI:`;
        const aiResponse = await generateText(prompt);
        const translateTextResponse = await translateText(aiResponse.answer);

        return translateTextResponse;
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