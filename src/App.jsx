import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Categorie from "./pages/Categorie"
import DefaultLayout from "./Layout/DefaultLayout"
import CategorieProdotti from "./pages/CategorieProdotti"
import FocusProdotto from "./pages/FocusProdotto"
import AllProdotti from "./pages/AllProdotti"
import { GlobalProvider } from "./context/GlobalContext"
import ScrollToTop from "./components/ScrollToTop"
import Cart from "./pages/Cart"
import PaymentSection from './pages/PaymentSection'


function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <ScrollToTop />
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<Categorie />} />
              <Route path="/categories/:slug" element={<CategorieProdotti />} />
              <Route path="/categories/:slug/:slug_product" element={<FocusProdotto />} />
              <Route path="/AllProdotti" element={<AllProdotti />} />
              <Route path="/carrello" element={<Cart />} />
              <Route path="/carrello/pagamento" element={<PaymentSection />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
