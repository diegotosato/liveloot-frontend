import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useGlobalContext } from "../context/GlobalContext";
import Loader from "../components/Loader";
import ChatBotReal from "../components/ChatBotReal";
import RefactorChatWindow from "../components/RefactorChatWindow";



export default function DefaultLayout() {
    const { loading } = useGlobalContext();

    return (
        <>
            <Header />
            {loading && <Loader />}
            <main>
                <Outlet />
                {/* <RefactorChatWindow /> */}
                <ChatBotReal />

            </main>
            <Footer />
        </>
    )
}