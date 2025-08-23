import React from 'react';
import styles from '../../styles/about/Achievements.module.css';

const AchievementsSection = () => {
  return (
    <section className={styles.achievementsSection}>
      <div className={styles.container}>
        <div className={styles.achievement}>
          <span className={styles.number}>10+</span>
          <span className={styles.label}>Años de Experiencia</span>
        </div>
        <div className={styles.achievement}>
          <span className={styles.number}>5,000+</span>
          <span className={styles.label}>Casos Resueltos</span>
        </div>
        <div className={styles.achievement}>
          <span className={styles.number}>35+</span>
          <span className={styles.label}>Países de Procedencia</span>
        </div>
        <div className={styles.achievement}>
          <span className={styles.number}>98%</span>
          <span className={styles.label}>Tasa de Éxito</span>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;