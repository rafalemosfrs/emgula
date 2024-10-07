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
      <Section>Cardápio</Section>
      <Section>Contato</Section>
    </main>
  );
}

export default Main;
