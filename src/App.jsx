import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";

import "./style.css";

function App(props) {
  return (
    <>
      <Header dark={props.dark} />
      <Main dark={props.dark} />
      <Footer dark={props.dark} />
    </>
  );
}

export default App;
