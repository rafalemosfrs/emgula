import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import "./style.css";

function App() {
  const [dark, alterarDark] = useState(true);

  function trocarTema() {
    alterarDark(!dark);
  }

  return (
    <>
      <button onClick={trocarTema}>Trocar Tema</button>
      <Header dark={dark} />
      <Main dark={dark} />
      <Footer dark={dark} />
    </>
  );
}

export default App;
