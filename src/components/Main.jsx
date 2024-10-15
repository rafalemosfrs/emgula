import Cardapio from "./Cardapio";
import Section from "./Section";

function Main(props) {
  return (
    <main className={`p-6 ${props.dark ? "bg-gray-900" : "bg-gray-100"}`}>
      <Section>
        <h2 className="text-2xl font-bold mb-4">Sobre Nós</h2>
        <p className="text-gray-600">
          No EmGula, oferecemos pratos preparados com ingredientes frescos e um toque especial. Venha experimentar nossas especialidades!
        </p>
      </Section>

      <Cardapio />

      <Section>
        <h2 className="text-2xl font-bold mb-4">Contato</h2>
        <p className="text-gray-600">
          Para reservas, entre em contato pelo telefone (XX) XXXX-XXXX ou visite nosso site.
        </p>
      </Section>
    </main>
  );
}

export default Main;
