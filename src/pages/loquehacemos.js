// src/pages/loquehacemos.js
import React from "react";
import HeroServices from "../components/services/HeroServices";
import ServicesCategories from "../components/services/ServicesCategories";
import WorkProcess from "../components/services/WorkProcess";
import SuccessStories from "../components/services/SuccessStories";
import { supabase } from "../lib/supabase/client"; // <-- AÑADIR ESTA LÍNEA
import Navbar from "../components/Navbar";

const LoQueHacemosPage = () => {
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

// --- AÑADE TODA ESTA FUNCIÓN AL FINAL DEL ARCHIVO ---
export async function getStaticProps() {
  const slug = process.env.WEBSITE_SLUG;

  const { data, error } = await supabase
    .from("websites")
    .select("label, site_configurations ( key, value )")
    .eq("slug", slug)
    .single();

  if (error || !data) {
    return { notFound: true };
  }

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
    revalidate: 60,
  };
}
