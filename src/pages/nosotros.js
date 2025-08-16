import React from 'react';
import HeroAbout from '../components/about/HeroAbout';
import HistorySection from '../components/about/HistorySection';
import ValuesSection from '../components/about/ValuesSection'; // <-- Importa el nuevo componente

const NosotrosPage = () => {
  return (
    <>
      <HeroAbout />
      <HistorySection />
      <ValuesSection /> {/* <-- Agrega el nuevo componente aquí */}
    </>
  );
};

export default NosotrosPage;