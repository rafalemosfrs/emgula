import { useState } from "react";
import { Link } from "react-router-dom";

function Cadastro({ dark }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Senha:", senha);
  };

  return (
    <section className={`flex items-center justify-center min-h-screen p-4 ${dark ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}>
      <div className={`bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md w-full max-w-md`}>
        <h2 className={`text-3xl font-bold mb-6 text-center ${dark ? "text-red-400" : "text-red-600"}`}>Cadastro</h2>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <div className="mb-4">
            <label htmlFor="email" className={`block mb-2 ${dark ? "text-gray-300" : "text-gray-700"}`}>
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={`w-full p-2 border rounded-md ${dark ? "border-gray-600 text-gray-200 bg-gray-700" : "border-gray-300"}`}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="senha" className={`block mb-2 ${dark ? "text-gray-300" : "text-gray-700"}`}>
              Senha
            </label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              className={`w-full p-2 border rounded-md ${dark ? "border-gray-600 text-gray-200 bg-gray-700" : "border-gray-300"}`}
            />
          </div>
          <button
            type="submit"
            className="bg-red-600 text-white font-bold py-2 rounded-md hover:bg-red-700 transition duration-300"
          >
            Cadastrar
          </button>
          <div className="mt-4 text-center">
            <p>
              Já tem uma conta?{" "}
              <Link to="/login" className="text-red-600 hover:underline">
                Faça login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Cadastro;
