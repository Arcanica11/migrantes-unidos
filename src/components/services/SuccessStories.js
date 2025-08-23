import React, { useState, useEffect } from 'react';
import styles from '../../styles/services/SuccessStories.module.css';

const testimonialsData = [
  {
    quote: "Gracias al equipo de Migrantes Unidos, mi solicitud de visa de trabajo fue aprobada en tiempo récord. Su guía experta y atención al detalle fueron invaluables en cada paso.",
    name: "Sofía M.",
    details: "Visa H-1B Aprobada | Ingeniera de Software"
  },
  {
    quote: "La obtención de mi Green Card parecía un proceso interminable, pero con su ayuda, todo fue más sencillo. Me acompañaron en cada trámite y siempre me sentí en buenas manos.",
    name: "Javier G.",
    details: "Residencia Obtenida | Desde México"
  },
  {
    quote: "Enfrentar la deportación era mi mayor miedo. Su defensa legal fue impecable y lograron un resultado favorable que me permitió seguir construyendo mi futuro en el país.",
    name: "Luisa C.",
    details: "Defensa contra Deportación | Desde Colombia"
  }
];

const SuccessStories = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    // Cambia el testimonio cada 6 segundos
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className={styles.successStoriesSection}>
      <div className="container">
        <div className={styles.header}>
          <h2 className={styles.title}>Historias que Inspiran Confianza</h2>
          <p className={styles.subtitle}>
            El éxito de nuestros clientes es la mejor prueba de nuestro compromiso y experiencia.
          </p>
        </div>
        <div className={styles.carouselContainer}>
          <div 
            className={styles.carouselInner} 
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
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

export default SuccessStories;