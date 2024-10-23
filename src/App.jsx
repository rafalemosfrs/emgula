import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import "./style.css";

function App() {
  const [dark, alterarDark] = useState(false);

  function trocarTema() {
    alterarDark(!dark);
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
        className="fixed top-4 right-4 bg-red-500 text-white font-bold py-2 px-4 rounded-full shadow-md hover:bg-red-600 transition duration-300"
      >
        {dark ? "🌞 Light Mode" : "🌙 Dark Mode"}
      </button>
      <div className="flex flex-col min-h-screen">

        <Header dark={dark} />

        <main className="flex-grow">
          <Main dark={dark} />
        </main>

        <Footer dark={dark} />
      </div>
    </div>
  );
}

export default App;
