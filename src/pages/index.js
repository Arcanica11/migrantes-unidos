// src/pages/index.js
import React from 'react';
import HeroSection from '../components/landing/HeroSection';
import FeaturesSection from '../components/landing/FeaturesSection';
import AboutSection from '../components/landing/AboutSection';
import MisionVisionSection from '../components/landing/MisionVisionSection';
import ServiciosSection from '../components/landing/ServiciosSection';
import TestimoniosSection from '../components/landing/TestimoniosSection';
import ContactoSection from '../components/landing/ContactoSection';
import Navbar from '../components/Navbar';
// Importamos nuestro cliente de Supabase
import { supabase } from '../supabase/client';

// El componente ahora recibe 'siteData' como prop
const HomePage = ({ siteData }) => {
  return (
    <>
      <Navbar siteConfig={siteData.config}/>
      <HeroSection />
      <FeaturesSection />
      <AboutSection />
      <MisionVisionSection />
      <ServiciosSection />
      <TestimoniosSection />
      {/* Le pasamos la configuración al componente de Contacto */}
      <ContactoSection siteConfig={siteData.config} />
    </>
  );
};

export default HomePage;

// Esta función se ejecuta en el servidor ANTES de construir la página
export async function getStaticProps() {
  const slug = process.env.WEBSITE_SLUG;

  const { data, error } = await supabase
    .from('websites')
    .select('label, site_configurations ( key, value )')
    .eq('slug', slug)
    .single();

  if (error || !data) {
    console.error("Error al obtener datos del sitio:", error);
    return { notFound: true }; // Muestra la página 404 si no encuentra datos
  }
  
  // Convertimos el array de configuraciones en un objeto más fácil de usar
  const configurations = data.site_configurations.reduce((acc, config) => {
    acc[config.key] = config.value;
    return acc;
  }, {});
  
  const siteData = {
    label: data.label,
    config: configurations,
  };

  return {
    props: {
      siteData,
    },
    revalidate: 60, // Opcional: Re-genera la página cada 60 segundos
  };
}