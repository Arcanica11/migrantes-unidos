import React from 'react';
import styles from '../../styles/services/WorkProcess.module.css';

// Íconos SVG para cada paso
const icons = {
  step1: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"/><path d="M12 8v4l2 2"/></svg>, // Reloj
  step2: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 10 8 9"></polyline></svg>, // Documento
  step3: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>, // Check
};

const processSteps = [
  {
    step: 1,
    title: 'Consulta Inicial y Evaluación',
    description: 'En el primer paso, escuchamos tu historia. Analizamos tu situación migratoria, evaluamos tus opciones y trazamos un plan de acción personalizado y claro para tu caso.'
  },
  {
    step: 2,
    title: 'Preparación y Presentación',
    description: 'Trabajamos en equipo para recopilar todos los documentos necesarios, preparar las solicitudes y presentar tu caso con la máxima precisión y profesionalismo ante las autoridades competentes.'
  },
  {
    step: 3,
    title: 'Seguimiento y Comunicación',
    description: 'Mantenemos una comunicación constante y transparente. Te informamos sobre cada avance de tu caso y resolvemos cualquier duda, garantizando que siempre te sientas acompañado.'
  },
];

const WorkProcess = () => {
  return (
    <section className={styles.workProcessSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>Nuestro Proceso: Claridad Paso a Paso</h2>
          <p className={styles.subtitle}>
            Te guiamos a través de un proceso simple, transparente y estructurado para alcanzar tus objetivos migratorios.
          </p>
        </div>
        <div className={styles.processGrid}>
          {processSteps.map((step, index) => (
            <div className={styles.processCard} key={index}>
              <div className={styles.stepNumber}>{`0${step.step}`}</div>
              <h3 className={styles.cardTitle}>{step.title}</h3>
              <p className={styles.cardText}>{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;