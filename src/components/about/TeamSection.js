import React from 'react';
import styles from '../../styles/about/Team.module.css';

// Usamos íconos de usuario como placeholders, ya que no hay fotos.
const userIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
    <circle cx="12" cy="7" r="4"></circle>
  </svg>
);

// Datos de los abogados
const teamMembers = [
  {
    name: "Aníbal Romero",
    license: "Licencia: 679010",
    bio: "Abogado fundador con más de 15 años de experiencia, especializado en procesos de asilo y defensa contra deportaciones. Su compromiso es la base de nuestra firma.",
    featured: true, // Destacado como el cliente principal
  },
  {
    name: "David Ramírez",
    license: "Licencia: # 313544 activa",
    bio: "Abogado admitido en el Colegio de Abogados de California, experto en visas de trabajo e inversión para emprendedores.",
    featured: false,
  },
  {
    name: "Dick Andrew Adam",
    license: "Código: 269148",
    bio: "Especializado en casos de reunificación familiar y residencia permanente. Conecta familias y construye futuros.",
    featured: false,
  },
  {
    name: "Diana Suárez Quintanilla",
    license: "Licencia: 305954",
    bio: "Abogada con una trayectoria notable en casos de ciudadanía y naturalización, simplificando el último paso hacia el sueño americano.",
    featured: false,
  },
  {
    name: "Kathie Sierra",
    license: "Tarjeta: 7602019",
    bio: "Asesora legal para visas de estudiante y permisos especiales. Apoya a los futuros líderes a iniciar su camino en EE. UU.",
    featured: false,
  },
  {
    name: "Anthony Richard Fredery",
    license: "Tarjeta: 7925016",
    bio: "Experto en litigios migratorios, representando a nuestros clientes con determinación y profesionalismo en la corte.",
    featured: false,
  },
];

const TeamSection = () => {
  return (
    <section className={styles.teamSection}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2>Conoce a Nuestro Equipo de Abogados</h2>
          <p>
            Nuestra experiencia y dedicación están respaldadas por un equipo legal
            que entiende la complejidad de cada caso y se compromete con cada
            historia de éxito.
          </p>
        </div>
        <div className={styles.teamGrid}>
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`${styles.memberCard} ${member.featured ? styles.featured : ''}`}
            >
              <div className={styles.iconPlaceholder}>
                {userIcon}
              </div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.license}>{member.license}</p>
              <p className={styles.bio}>{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;