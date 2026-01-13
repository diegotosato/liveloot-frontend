import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Categorie from "./pages/Categorie"
import DefaultLayout from "./Layout/DefaultLayout"
import CategorieProdotti from "./pages/CategorieProdotti"
import PaginaDettaglioItem from "./pages/PaginaDettaglioItem"
import { GlobalProvider } from "./context/GlobalContext"





function App() {
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<DefaultLayout />} >
              <Route path="/" element={<HomePage />} />
              <Route path="/categories" element={<Categorie />} />
              <Route path="/categories/:slug" element={<CategorieProdotti />} />
              <Route path="/categories/:slug/:id" element={<PaginaDettaglioItem />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
