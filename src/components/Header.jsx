import { Link } from "react-router-dom";

function Header(props) {
  const classes = `header ${
    props.dark ? "bg-gray-800 text-white" : "bg-red-600 text-white"
  } p-4 shadow-md`;

  return (
    <header className={classes}>
      <h1 className="text-4xl font-bold text-center mb-4">EmGula</h1>

      <nav>
        <ul className="flex justify-center space-x-6 cursor-pointer">
          <li className="hover:text-gray-300 transition duration-200">
            <Link to="inicio">Início</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-200">
            <Link to="sobre">Sobre</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-200">
            <Link to="cardapio">Cardápio</Link>
          </li>
          <li className="hover:text-gray-300 transition duration-200">
            <Link to="contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
