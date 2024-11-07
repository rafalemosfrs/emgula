import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./style.css";

function App() {
  const [dark, alterarDark] = useState(false);
  const [cartItems, setCartItems] = useState([]); // Estado do carrinho

  function trocarTema() {
    alterarDark(!dark);
  }

  function addToCart(item) {
    setCartItems((prevItems) => [...prevItems, item]); // Função para adicionar itens ao carrinho
  }

  return (
    <div
      className={
        dark
          ? "bg-gray-800 text-white"
          : "bg-white text-gray-800 min-h-screen transition-colors duration-300"
      }
    >
      <button
        onClick={trocarTema}
        className="fixed bottom-4 right-4 bg-[#81D8D0] text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-[#81BEF0] transition duration-300"
      >
        {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="flex flex-col min-h-screen">
        <Header dark={dark} cartItems={cartItems} /> {/* Passa o estado do carrinho */}
        <main className="flex-grow">
          <Main dark={dark} addToCart={addToCart} /> {/* Passa a função para adicionar itens ao carrinho */}
        </main>
        <Footer dark={dark} />
      </div>
    </div>
  );
}

export default App;
