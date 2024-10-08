import { useState } from "react";

function Product(props) {
  const [count, alterarCount] = useState(0);

  function incrementar() {
    alterarCount(count + 1);
  }

  function decrementar() {
    if (count == 0) {
      return;
    }

    alterarCount(count - 1);
  }

  return (
    <div>
      <h3>{props.name || "Produto"}</h3>
      <button onClick={decrementar} disabled={count == 0}>
        -
      </button>
      <span>{count}</span>
      <button onClick={incrementar}>+</button>
    </div>
  );
}

export default Product;
