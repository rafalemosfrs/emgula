import Section from "./Section";
import Cardapio from "../pages/Cardapio";
import Inicio from "../pages/Inicio";
import Erro404 from "../pages/Erro404";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";
import { Routes, Route } from "react-router-dom";

function Main({ dark }) {

  return (
    <main className={`p-6 ${dark ? "bg-gray-900" : "bg-gray-100"} flex-grow`}>

    <Routes>
      <Route path="/sobre" element={<Sobre/>}></Route>
      <Route path="/contato" element={<Contato/>}></Route>
      <Route path="/cardapio" element={<Cardapio/>}></Route>  
      <Route path="/inicio" element={<Inicio/>}></Route>
      
      <Route path="*" element={<Erro404/>}></Route>  

    </Routes>
    </main>
  );
}

export default Main;
