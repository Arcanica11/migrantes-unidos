import React from 'react';
import Link from 'next/link';
import styles from '../../styles/about/CtaAbout.module.css';

const CtaAboutSection = () => {
  return (
    <section className={styles.ctaAboutSection}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Listos para Escribir el Próximo Capítulo de tu Historia
        </h2>
        <p className={styles.text}>
          Ahora que nos conoces, permítenos conocer tu historia. Estamos listos para aplicar toda nuestra experiencia y dedicación a tu caso, con la misma pasión que nos ha caracterizado por más de una década.
        </p>
        <Link href="/contactanos" legacyBehavior>
          <a className={styles.button}>Agenda tu Consulta Gratuita</a>
        </Link>
      </div>
    </section>
  );
};

export default CtaAboutSection;