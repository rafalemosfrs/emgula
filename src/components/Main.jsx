import Cardapio from "../pages/Cardapio";
import Contato from "../pages/Contato";
import Sobre from "../pages/Sobre";

function Main(props) {
  let titulo = "";

  switch (location.pathname) {
    case "/sobre":
      titulo = <Sobre />;
      break;

    case "/cardapio":
      titulo = <Cardapio />;
      break;

    case "/contato":
      titulo = <Contato />;
      break;
  }

  return (
    <main className={`p-6 ${props.dark ? "bg-gray-900" : "bg-gray-100"}`}>
      {titulo}
    </main>
  );
}

export default Main;
