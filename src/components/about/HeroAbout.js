import React from 'react';
import styles from '../../styles/about/HeroAbout.module.css';
import Image from 'next/image';

const HeroAbout = () => {
  return (
    <section className={styles.heroAbout}>
      <div className={styles.imageContainer}>
        <Image
          src="/images/placeholder.jpg" // Reemplaza con la ruta de tu imagen
          alt="Equipo de migrantes"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className={styles.content}>
        <p className={styles.tagline}>Sobre Nuestra Firma</p>
        <h1 className={styles.title}>
          Más de una Década <br /> Creando Historias de Éxito
        </h1>
        <p className={styles.text}>
          En Migrantes Unidos & Asociados, no solo manejamos casos; construimos
          futuros. Desde nuestra fundación, hemos ayudado a cientos de familias a
          navegar el complejo sistema migratorio de EE. UU. con claridad,
          honestidad y un profundo compromiso con cada historia.
        </p>
        <p className={styles.text}>
          Nuestra experiencia nos permite anticipar desafíos y diseñar estrategias
          efectivas para una amplia gama de visas y procesos de residencia.
        </p>
        <button className={styles.button}>Conoce Más</button>
      </div>
    </section>
  );
};

export default HeroAbout;