import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useGlobalContext } from "../context/GlobalContext";
import Loader from "../components/Loader";
import Chat from "../components/Chat";
export default function DefaultLayout() {
    const { loading } = useGlobalContext();

    return (
        <>
            <Header />
            {loading && <Loader />}
            <main>
                <Outlet />
                {/*  <Chat /> */}
            </main>
            <Footer />
        </>
    )
}