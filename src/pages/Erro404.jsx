import React from 'react';
import Section from '../components/Section';

function Erro404() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">404 - Página Não Encontrada</h2>
      <p className="text-gray-600">
        Desculpe, a página que você está procurando não existe. 
      </p>
      <p className="text-gray-600">
        Volte para a página inicial ou verifique o URL.
      </p>
    </Section>
  );
}

export default Erro404;
