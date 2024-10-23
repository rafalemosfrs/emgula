import { Link } from "react-router-dom";
import AuthButtons from "./AuthButtons";

function Header(props) {
  const classes = `header ${
    props.dark ? "bg-gray-800 text-white" : "bg-gradient-to-r from-red-600 to-red-500 text-white"
  } p-6 shadow-lg`;

  return (
    <header className={classes}>
    <AuthButtons />
      <h1 className="text-5xl font-extrabold text-center mb-6 font-sans">EmGula</h1>

      <nav>
        <ul className="flex justify-center space-x-10 cursor-pointer">
          <li className="hover:text-gray-300 transition duration-300 transform hover:scale-110">
            <Link to="inicio">Início</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 transform hover:scale-110">
            <Link to="sobre">Sobre</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 transform hover:scale-110">
            <Link to="cardapio">Cardápio</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-300 transform hover:scale-110">
            <Link to="contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
