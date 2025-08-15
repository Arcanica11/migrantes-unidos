// src/components/landing/CtaSection.js
import React from 'react';
import Link from 'next/link';
import styles from '../../styles/Cta.module.css';
import homeStyles from '../../styles/landing/Home.module.css';

const CtaSection = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={`container ${styles.contentWrapper}`}>
        <h2>Su Futuro en USA, Construido con Seguridad y Confianza</h2>
        <p>
          Nuestro equipo de expertos está listo para diseñar la estrategia que asegure su éxito.
          Contáctenos hoy para una evaluación confidencial de su caso.
        </p>
      </div>
    </section>
  );
};

export default CtaSection;