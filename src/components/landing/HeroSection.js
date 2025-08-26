// src/components/landing/HeroSection.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import homeStyles from '../../styles/landing/Home.module.css';
import heroStyles from '../../styles/landing/Hero.module.css';

const HeroSection = () => {
  return (
    <section className={heroStyles.hero}>
      <div className={`container ${heroStyles.heroGrid}`}>
        {/* --- Columna Izquierda: Texto --- */}
        <div className={heroStyles.textContainer}>
          <span className={heroStyles.tag}>Fundación Migrantes Unidos</span>
          <h1>Tu Futuro en América, Hecho Posible.</h1>
          <p>
            Te guiamos con experiencia y dedicación en cada paso de tu proceso
            migratorio. Asesoría legal confiable para alcanzar tu sueño.
          </p>
         
        </div>

        {/* --- Columna Derecha: Imagen --- */}
        <div className={heroStyles.imageContainer}>
          <Image
            src="/logoHero.png" // **IMPORTANTE: Coloca aquí la ruta a tu imagen (ej. una abogada). Debe tener fondo transparente.**
            alt="Asesora de migración"
            width={700}
            height={700}
            className={heroStyles.heroImage}
            priority // Carga esta imagen primero por ser importante para el LCP
          />
           {/* <Link href="/contactanos" legacyBehavior>
            <a className={homeStyles.ctaButton}>Empezar Mi Proceso</a>
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;