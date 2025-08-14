import React from 'react';

const HomePage = () => {
  return (
    <div className="home-content">
      {/* Sección 1: Bienvenida */}
      <section id="seccion-bienvenida" className="seccion-bienvenida">
        <h1>Bienvenido a Migrantes-Web</h1>
        <p>Conectando a la comunidad de migrantes con recursos esenciales.</p>
      </section>

      {/* Sección 2: Misión y Visión */}
      <section id="seccion-mision" className="seccion-mision">
        <h2>Nuestra Misión y Visión</h2>
        <p>Ofrecemos una mano amiga para que cada migrante encuentre su camino.</p>
      </section>

      {/* Sección 3: Lo que Hacemos (Destacados) */}
      <section id="seccion-destacados" className="seccion-destacados">
        <h2>Nuestros Servicios Destacados</h2>
        <p>Accede a información sobre trámites, empleo y apoyo legal.</p>
      </section>

      {/* Sección 4: Testimonios */}
      <section id="seccion-testimonios" className="seccion-testimonios">
        <h2>Historias que Inspiran</h2>
        <p>Lee las experiencias de quienes ya han logrado sus metas con nuestra ayuda.</p>
      </section>

      {/* Sección 5: Contacto Rápido / Llamado a la acción */}
      <section id="seccion-contacto-rapido" className="seccion-contacto-rapido">
        <h2>¿Listo para el cambio?</h2>
        <p>Contáctanos hoy mismo y empieza tu proceso de integración.</p>
      </section>
    </div>
  );
};

export default HomePage;