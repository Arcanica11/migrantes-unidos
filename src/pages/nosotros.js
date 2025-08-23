import React from 'react';
import HeroAbout from '../components/about/HeroAbout';
import AchievementsSection from '../components/about/AchievementsSection';
import TeamSection from '../components/about/TeamSection'; 
import CtaAboutSection from '../components/about/CtaAboutSection'; 


const NosotrosPage = () => {
  return (
    <>
      <HeroAbout />
     <AchievementsSection />
 
      <TeamSection /> {/* <-- Nuevo: Agrega el componente aquí */}
      <CtaAboutSection />
    </>
  );
};

export default NosotrosPage;