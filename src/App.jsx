import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Categorie from "./pages/Categorie"
import DefaultLayout from "./Layout/DefaultLayout"
import CategorieProdotti from "./pages/CategorieProdotti"
import FocusProdotto from "./pages/FocusProdotto"
import AllProdotti from "./pages/AllProdotti"
import { GlobalProvider } from "./context/GlobalContext"
import { CartProvider } from "./context/CartContext"
import ScrollToTop from "./components/ScrollToTop"
import Cart from "./pages/Cart"
import PaymentSection from './pages/PaymentSection'
import NotFound from "./pages/NotFound"
import PaymentLayout from "./Layout/PaymentLayout"
import CompletePage from "./pages/CompletePage"



function App() {
  return (
    <>
      <GlobalProvider>
        <CartProvider>
          <BrowserRouter>
            <ScrollToTop />
            <Routes>
              <Route element={<DefaultLayout />} >
                <Route path="/" element={<HomePage />} />
                <Route path="/categorie" element={<Categorie />} />
                <Route path="/categorie/:slug" element={<CategorieProdotti />} />
                <Route path="/categorie/:slug/:slug_product" element={<FocusProdotto />} />
                <Route path="/prodotti" element={<AllProdotti />} />
                <Route path="/carrello" element={<Cart />} />
                <Route element={<PaymentLayout />} >
                  <Route path="/carrello/pagamento" element={<PaymentSection />} />
                  <Route path="/PagamentoCompletato" element={<CompletePage />}></Route>
                </Route>
                <Route path="*" element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </CartProvider>
      </GlobalProvider>
    </>
  );
}

export default App;
