import React from 'react';
import HeroServices from '../components/services/HeroServices';
import ServicesCategories from '../components/services/ServicesCategories';
import WorkProcess from '../components/services/WorkProcess';
import SuccessStories from '../components/services/SuccessStories'; // <-- Importa la nueva sección

const LoQueHacemosPage = () => {
  return (
    <>
      <HeroServices />
      <ServicesCategories />
      <WorkProcess />
      <SuccessStories /> {/* <-- Añade la sección de historias de éxito aquí */}
    </>
  );
};

export default LoQueHacemosPage;