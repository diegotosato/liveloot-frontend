import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage from "./pages/HomePage"
import Categorie from "./pages/Categorie"
import DefaultLayout from "./Layout/DefaultLayout"
import CategorieProdotti from "./pages/CategorieProdotti"
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
              <Route path="/tech/categories/:slug" element={<CategorieProdotti />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GlobalProvider>
    </>
  );
}

export default App;
