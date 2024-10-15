import { useState } from "react";

function Product({ item }) {
  //const item = props.item
  //const {item} = props

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
    <div class="max-w-sm rounded-lg border border-gray-300 shadow-xl overflow-hidden p-4 bg-white">
      <img
        src={item.image}
        alt={item.title}
        class="w-full h-48 object-cover mb-4"
      />

      <div class="py-2">
        <h3 class="text-xl font-semibold text-gray-800">{item.title}</h3>
        <p class="text-gray-600 mb-2">{item.description}</p>
        <p class="text-lg font-bold text-gray-800">{item.price}</p>
      </div>

      <div class="flex items-center mt-4">
        <button
          onClick={decrementar}
          disabled={count === 0}
          class="bg-red-500 text-white font-bold py-1 px-2 rounded-l hover:bg-red-600 disabled:opacity-50"
        >
          -
        </button>
        <span class="mx-2 text-lg font-semibold">{count}</span>
        <button
          onClick={incrementar}
          class="bg-green-500 text-white font-bold py-1 px-2 rounded-r hover:bg-green-600"
        >
          +
        </button>
      </div>
    </div>
  );
}

export default Product;
