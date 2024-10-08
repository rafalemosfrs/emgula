import Product from "./Product";
import Section from "./Section";

function Main(props) {
  let classes;

  if (props.dark) {
    classes = "main dark";
  } else {
    classes = "main";
  }

  return (
    <main className={classes}>
      <Section>Sobre</Section>
      <Section>
        Cardápio
        <Product name="Macarronada" />
        <Product name="Lasanha" />
        <Product name="Escondidinho" />
      </Section>
      <Section>Contato</Section>
    </main>
  );
}

export default Main;
