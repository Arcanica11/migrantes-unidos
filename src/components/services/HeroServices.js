import React from 'react';
import styles from '../../styles/services/HeroServices.module.css';
import Image from 'next/image';
import img from "../../../public/services-img.jpg"

const HeroServices = () => {
  return (
    <section className={styles.heroServices}>
      <div className={`${styles.container} container`}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Soluciones Legales para Tu Camino Migratorio
          </h1>
          <p className={styles.subtitle}>
            Desde la solicitud de una visa hasta la defensa en corte, nuestro equipo de expertos te guiará con claridad y dedicación en cada paso de tu proceso.
          </p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src={img} 
            alt="Servicios legales de inmigración"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroServices;