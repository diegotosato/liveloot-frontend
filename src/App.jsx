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
import NotFound from "./pages/NotFound"


function App() {
  return (
    <>
      <GlobalProvider>
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
              <Route path="/carrello/pagamento" element={<PaymentSection />} />
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
