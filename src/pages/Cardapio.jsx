import { useEffect, useState } from "react";
import Product from "../components/Product";
import Section from "../components/Section";

function Cardapio() {
  const [produtos, alterarProdutos] = useState([]);

  useEffect(() => {
    buscarProdutos();
  }, []);

  async function buscarProdutos() {
    const resposta = await fetch("https://fakestoreapi.com/products");
    const dados = await resposta.json();
    alterarProdutos(dados);
  }

  function transformarEmJsx(produto) {
    return <Product key={produto.id} item={produto} />;
  }

  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Cardápio</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {produtos.map(transformarEmJsx)}
      </div>
    </Section>
  );
}

export default Cardapio;
