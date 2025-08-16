import React from 'react';
import styles from '../../styles/about/Values.module.css';

const ValuesSection = () => {
  return (
    <section className={styles.valuesSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestros Valores</h2>
        <div className={styles.valuesGrid}>
          <div className={styles.valueCard}>
            <div className={styles.iconPlaceholder}>
              {/* Aquí va un ícono o SVG */}
            </div>
            <h3 className={styles.cardTitle}>Confianza</h3>
            <p className={styles.cardText}>
              Construimos relaciones sólidas basadas en la transparencia y la honestidad en cada etapa de tu proceso migratorio. Tu tranquilidad es nuestra prioridad.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.iconPlaceholder}>
              {/* Aquí va un ícono o SVG */}
            </div>
            <h3 className={styles.cardTitle}>Credibilidad</h3>
            <p className={styles.cardText}>
              Nuestra reputación se basa en años de experiencia y en un profundo conocimiento de las leyes y regulaciones migratorias. Somos tu guía experta.
            </p>
          </div>
          <div className={styles.valueCard}>
            <div className={styles.iconPlaceholder}>
              {/* Aquí va un ícono o SVG */}
            </div>
            <h3 className={styles.cardTitle}>Ética</h3>
            <p className={styles.cardText}>
              Operamos con los más altos estándares éticos, garantizando que cada trámite se maneje con la máxima integridad y profesionalismo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValuesSection;