import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import "./style.css";

function App() {
  const [darkValor, alterarValorDark] = useState(true);

  function trocarTema(){
    alterarValorDark(!darkValor)
  }

  return (
    <>
    <button onClick={trocarTema}>Trocar Tema</button>
      <Header dark={darkValor} />
      <Main dark={darkValor} />
      <Footer dark={darkValor} />
    </>
  );
}

export default App;