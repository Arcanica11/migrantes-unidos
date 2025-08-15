// src/pages/index.js
import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection'; // <-- NUEVO
import AboutSection from '../components/landing/AboutSection';   // <-- NUEVO
import MisionVisionSection from '../components/landing/MisionVisionSection';
import ServiciosSection from '../components/landing/ServiciosSection';
import TestimoniosSection from '../components/landing/TestimoniosSection';
import ContactoSection from '../components/landing/ContactoSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <FeaturesSection /> {/* <-- AÑADIDO */}
      <AboutSection />    {/* <-- AÑADIDO */}
      <MisionVisionSection />
      <ServiciosSection />
      <TestimoniosSection />
      <ContactoSection />
    </>
  );
};

export default HomePage;