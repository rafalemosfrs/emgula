import React from 'react';
import Section from '../components/Section';

function Inicio() {
  return (
    <Section>
      <h2 className="text-2xl font-bold mb-4">Bem-vindo ao EmGula!</h2>
      <p className="text-gray-600">
        Aqui você encontrará uma variedade de pratos deliciosos feitos com ingredientes frescos.
      </p>
      <p className="text-gray-600">
        Explore nosso cardápio e descubra suas novas especialidades favoritas!
      </p>
    </Section>
  );
}

export default Inicio;
