// src/pages/nosotros.js
import React from "react";
import HeroAbout from "../components/about/HeroAbout";
import AchievementsSection from "../components/about/AchievementsSection";
import TeamSection from "../components/about/TeamSection";
import CtaAboutSection from "../components/about/CtaAboutSection";
import { supabase } from "../supabase/client";
import Navbar from "../components/Navbar";

const NosotrosPage = ({ siteData }) => {
  return (
    <>
      <Navbar siteConfig={siteData.config} />
      <HeroAbout />
      <AchievementsSection />
      <TeamSection />
      <CtaAboutSection />
    </>
  );
};

export default NosotrosPage;

// --- AÑADE TODA ESTA FUNCIÓN AL FINAL DEL ARCHIVO ---
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
