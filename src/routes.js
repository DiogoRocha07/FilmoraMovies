import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Filmo from "./pages/Filmo"
import Header from "./components/Header"
import Fav from "./pages/Fav"
import Erro from "./pages/Erro"

function RoutesApp() {
  return (
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/filme/:id" element={ <Filmo /> } />
        <Route path="/fav" element={ <Fav /> } />

        <Route path="*" element={ <Erro />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
