// src/components/landing/AboutSection.js
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from '../../styles/landing/About.module.css';
import homeStyles from '../../styles/landing/Home.module.css'; // Para el botón

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      <div className={`container ${styles.aboutGrid}`}>
        <div className={styles.imageContainer}>
          <div className={styles.imageWrapper}>
            <Image
              src="/img-1.webp" // **IMPORTANTE: Coloca aquí una imagen de tu equipo o fundadores**
              alt="Equipo de Migrantes Unidos & Asociados"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <div className={styles.textContainer}>
          <span className={styles.tag}>Sobre Nuestra Firma</span>
          <h2>Más de una Década Creando Historias de Éxito</h2>
          <p>
            En Migrantes Unidos & Asociados, no solo manejamos casos; construimos futuros. Desde nuestra fundación, hemos ayudado a cientos de familias e individuos a navegar el complejo sistema migratorio de EE. UU. con claridad, honestidad y un profundo compromiso con cada historia.
          </p>
          <p>
            Nuestra experiencia nos permite anticipar desafíos y diseñar estrategias efectivas para una amplia gama de visas y procesos de residencia.
          </p>
          <Link href="/nosotros" legacyBehavior>
            <a className={homeStyles.ctaButton}>Conoce Más</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;