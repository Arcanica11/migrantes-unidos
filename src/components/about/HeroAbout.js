import React from 'react';
import styles from '../../styles/about/HeroAbout.module.css';
import Image from 'next/image';
import Link from 'next/link';
import img from '../../../public/img-1.webp';


const HeroAbout = () => {
  return (
    <section className={styles.heroAbout}>
      <div className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={img}
            alt="Equipo de migrantes"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className={styles.content}>
          <p className={styles.tagline}>Sobre Nuestra Firma</p>
          <h1 className={styles.title}>
            Una Década de Compromiso, Cientos de Historias de Éxito
          </h1>
          <p className={styles.text}>
            En Migrantes Unidos & Asociados, no solo manejamos casos; construimos
            futuros. Desde nuestra fundación, hemos ayudado a cientos de familias a
            navegar el complejo sistema migratorio con claridad, honestidad y un profundo compromiso con cada historia.
          </p>
          <p className={styles.text}>
            Nuestra experiencia nos permite anticipar desafíos y diseñar estrategias
            efectivas para una amplia gama de visas y procesos de residencia.
          </p>
          <Link href="/contactanos" legacyBehavior>
            <a className={styles.button}>Inicia tu Proceso Hoy</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroAbout;