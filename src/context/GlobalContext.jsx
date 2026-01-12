import { createContext } from "react";
import { useContext, useState, useEffect } from "react";
import { pipeline } from '@huggingface/transformers';
import axios from "axios";


const GlobalContext = createContext();

function GlobalProvider({ children }) {

    const [chatInput, setChatInput] = useState("");
    const [chatResponse, setChatResponse] = useState("");
    const [techs, setTechs] = useState([])
    const [loading, setLoading] = useState(false);
    const values = {
        loading,
        setLoading,
        techs,
        setTechs,
        getAIResponse,
        setChatResponse,
        chatInput,
        setChatInput
    }

    async function translateText(prompt) {
        const translator = await pipeline('translation', 'Xenova/opus-mt-en-it', {
            dtype: 'int8'
        });
        const output = await translator(prompt);
        return output[0].translation_text;
    }

    async function translateDescription(prompt) {
        const translator = await pipeline('translation', 'Xenova/opus-mt-it-en', {
            dtype: 'int8'
        });
        const output = await translator(prompt);
        return output[0].translation_text;
    }

    let categories = [];
    useEffect(() => {

        console.log(chatResponse);

        axios.get(`http://localhost:3000/techs/${chatResponse}`)
            .then(res => {
                categories = res.data.tag
                console.log(res.data);

            }).catch(err => {
                console.log(err)
            }).finally(() => {
                console.log(categories);

            })
    }, [chatResponse]);


    async function generateText() {




        const pipe = await pipeline('question-answering', 'Xenova/distilbert-base-cased-distilled-squad', {
            dtype: 'int8'
        });
        console.log(chatInput);

        const question = await translateDescription(chatInput);
        const context = categories.map(tech => tech.title).join(", ");
        console.log(context);
        const translatedContext = await translateDescription(context);
        console.log(translatedContext);
        const output = await pipe(question, translatedContext);
        return output;
    }



    async function getAIResponse(userInput) {
        const prompt = `User: ${userInput}\nAI:`;
        const aiResponse = await generateText(prompt);
        const translateTextResponse = await translateText(aiResponse.answer);
        console.log(translateTextResponse);



        return translateTextResponse;
    }

    ;





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