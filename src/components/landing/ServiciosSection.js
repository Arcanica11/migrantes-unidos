// src/components/landing/ServiciosSection.js
import React from 'react';
import styles from '../../styles/landing/Servicios.module.css';
import Link from 'next/link';
import homeStyles from '../../styles/landing/Home.module.css'; // Para el botón

// Íconos SVG para cada servicio
const icons = {
  visas: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2 16.1A5 5 0 0 1 5.9 20M2 12.05A9 9 0 0 1 9.95 20M2 8V2l11 11h6a2 2 0 0 0 0-4h-4.5"/><path d="M22 22l-5-5"/></svg>,
  residencia: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9"/><path d="M9 22V12h6v10M2 10.6L12 2l10 8.6"/></svg>,
  ciudadania: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 15 2 5L6 22l2-5-10-7h18Z"/></svg>,
  asilo: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4l2 1"/><path d="m18 18-6-6"/></svg>,
  defensa: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
  consulta: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1"/><path d="M16 17h.01"/><path d="M12 17h.01"/><path d="M8 17h.01"/><path d="M12 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"/></svg>,
};

const servicesData = [
  { icon: icons.visas, title: 'Visas Americanas', description: 'Asesoría completa para visas de trabajo (H-1B, L-1), de inversionista (E-2), familiares y de estudiante.' },
  { icon: icons.residencia, title: 'Residencia (Green Card)', description: 'Guiamos su proceso de ajuste de estatus o trámite consular para obtener la residencia permanente.' },
  { icon: icons.ciudadania, title: 'Ciudadanía y Naturalización', description: 'Le acompañamos en el último paso de su viaje migratoratorio para convertirse en ciudadano estadounidense.' },
  { icon: icons.asilo, title: 'Asilo y Refugio', description: 'Brindamos apoyo legal y humanitario a quienes buscan protección en los Estados Unidos.' },
  { icon: icons.defensa, title: 'Defensa Migratoria', description: 'Representación legal experta en procesos de deportación y remoción ante cortes de inmigración.' },
  { icon: icons.consulta, title: 'Consulta Inicial', description: 'Evalúe su caso con nuestros expertos para entender sus opciones y trazar un plan de acción claro.' },
];

const ServiciosSection = () => {
  return (
    <section className={`${styles.serviciosSection} section-white`}>
      <div className="container">
        <div className={styles.header}>
          <span className={styles.tag}>Nuestros Servicios</span>
          <h2>Un Espectro Completo de Soluciones Migratorias</h2>
          <p>Desde la solicitud de una visa hasta la defensa en corte, nuestro equipo está preparado para guiarlo con experiencia y dedicación.</p>
        </div>
        <div className={styles.serviciosGrid}>
          {servicesData.map((service, index) => (
            <div className={styles.serviceCard} key={index}>
              <div className={styles.iconContainer}>{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
      <div className={styles.buttoContainer}>
         <Link href="/loquehacemos" legacyBehavior>
                    <a className={homeStyles.ctaButton}>Mas info</a>
                  </Link>
      </div>
    </section>
  );
};

export default ServiciosSection;