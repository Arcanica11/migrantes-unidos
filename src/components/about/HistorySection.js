import React from 'react';
import styles from '../../styles/about/History.module.css';

const HistorySection = () => {
  return (
    <section className={styles.historySection}>
      <div className={styles.container}>
        <h2 className={styles.title}>Nuestra Trayectoria</h2>
        <p className={styles.text}>
          Fundada en 2010, Migrantes Unidos nació de una simple idea: simplificar el camino hacia una nueva vida. En sus inicios, operábamos desde una pequeña oficina, con un equipo de solo dos personas y un gran compromiso. Nos enfocamos en ayudar a un puñado de familias a obtener sus primeras visas, entendiendo que detrás de cada trámite hay un sueño y una historia.
        </p>
        <p className={styles.text}>
          Con el paso del tiempo, nuestro enfoque meticuloso y la honestidad en cada proceso nos ganaron la confianza de la comunidad. Lo que empezó como un pequeño proyecto se expandió rápidamente, permitiéndonos crecer y abrir nuevas sedes. Hoy, con más de una década de experiencia, nos enorgullece ser un referente en el sector, habiendo asistido a miles de personas en su proceso de migración a más de 35 países.
        </p>
        <p className={styles.text}>
          A pesar de nuestra expansión, nuestra esencia sigue siendo la misma: una asesoría personalizada, ética y humana. Cada caso es un nuevo capítulo en nuestra historia y en la de nuestros clientes.
        </p>
      </div>
    </section>
  );
};

export default HistorySection;