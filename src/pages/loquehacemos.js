// src/pages/loquehacemos.js
import React from "react";
import HeroServices from "../components/services/HeroServices";
import ServicesCategories from "../components/services/ServicesCategories";
import WorkProcess from "../components/services/WorkProcess";
import SuccessStories from "../components/services/SuccessStories";
import { supabase } from "../supabase/client"; // <-- AÑADIR ESTA LÍNEA
import Navbar from "../components/Navbar";

const LoQueHacemosPage = ({ siteData }) => {
  return (
    <>
      <Navbar siteConfig={siteData.config} />
      <HeroServices />
      <ServicesCategories />
      <WorkProcess />
      <SuccessStories />
    </>
  );
};

export default LoQueHacemosPage;

export async function getStaticProps() {
  const slug = process.env.WEBSITE_SLUG;

  const { data, error } = await supabase
    .from("websites")
    .select("label, site_configurations ( key, value )")
    .eq("slug", slug)
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
