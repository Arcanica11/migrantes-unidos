// src/components/landing/TestimoniosSection.js
import React, { useState, useEffect } from 'react';
import styles from '../../styles/landing/Testimonios.module.css';

const testimonialsData = [
  {
    quote: "No podría estar más agradecido. El equipo de la fundación manejó mi caso de residencia con un profesionalismo increíble y siempre estuvieron ahí para responder mis dudas. Hoy, gracias a ellos, tengo mi Green Card.",
    name: "Carlos R.",
    details: "Residencia Obtenida | Desde Venezuela"
  },
  {
    quote: "El proceso de ciudadanía parecía abrumador, pero ellos lo hicieron simple y claro. Su guía fue fundamental en cada paso, desde la aplicación hasta la entrevista. ¡Recomendados al 100%!",
    name: "Maria G.",
    details: "Ciudadanía Americana | Desde Colombia"
  },
  {
    quote: "Enfrentar un proceso de deportación fue el momento más difícil de mi vida. Su defensa legal fue mi única esperanza. Lucharon por mi caso incansablemente y lograron un resultado que cambió mi futuro.",
    name: "Javier L.",
    details: "Caso de Deportación | Desde México"
  }
];

const TestimoniosSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Cambia el testimonio cada 6 segundos
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 6000); // 6000 milisegundos = 6 segundos

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={`${styles.testimonialsSection} section-white`}>
      <div className="container">
        <div className={styles.header}>
          <h2>Historias que Inspiran Confianza</h2>
        </div>
        <div className={styles.carouselContainer}>
          <div className={styles.carouselInner} style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
            {testimonialsData.map((testimonial, index) => (
              <div className={styles.slide} key={index}>
                <p className={styles.quote}>“{testimonial.quote}”</p>
                <p className={styles.name}>{testimonial.name}</p>
                <p className={styles.details}>{testimonial.details}</p>
              </div>
            ))}
          </div>
          <div className={styles.dotsContainer}>
            {testimonialsData.map((_, index) => (
              <button
                key={index}
                className={`${styles.dot} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => goToSlide(index)}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosSection;