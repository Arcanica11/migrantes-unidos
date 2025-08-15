// src/components/landing/FeaturesSection.js
import React from 'react';
import styles from '../../styles/landing/Features.module.css';

// Íconos SVG simples para no tener que instalar librerías.
const icons = {
  asesoria: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
  ),
  experiencia: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
  ),
  estrategia: (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
  ),
};
const featuresData = [
  { icon: icons.asesoria, title: 'Asesoría Personal', description: 'Soluciones a la medida de tus necesidades específicas.' },
  { icon: icons.experiencia, title: 'Experiencia Real', description: 'Cientos de casos de éxito resueltos nos respaldan.' },
  { icon: icons.estrategia, title: 'Estrategia Efectiva', description: 'Diseñamos un plan claro para maximizar tus probabilidades.' },
];

const FeaturesSection = () => {
  return (
    <section className={styles.featuresSection}>
      <div className={`container ${styles.container}`}>
        <div className={styles.featuresGrid}>
          {featuresData.map((feature, index) => (
            // --- Lógica para clases condicionales ---
            <div 
              className={`${styles.featureCard} ${index === 0 ? styles.firstCard : ''}`} 
              key={index}
            >
              <div className={styles.iconContainer}>{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
              
              {/* --- Lógica para añadir el elemento decorativo al final --- */}
              {index === featuresData.length - 1 && (
                <div className={styles.decorativeBracket}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
