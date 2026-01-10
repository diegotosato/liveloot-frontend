import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useGlobalContext } from "../context/GlobalContext";
import Loader from "../components/Loader";
export default function DefaultLayout() {
    const { loading } = useGlobalContext();

    return (
        <>
            <Header />
            {loading && <Loader />}
            <main>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}