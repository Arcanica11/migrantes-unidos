import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importar el componente Image de Next.js

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // URL de WhatsApp con tu número y un mensaje predeterminado
  const whatsappUrl = "https://wa.me/573112151924?text=Hola,%20estoy%20interesado%20en%20sus%20servicios%20legales.";

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo a la izquierda */}
        <Link href="/" legacyBehavior>
          <a className="logo">
            {/* **RECOMENDACIÓN:** Cuando tengas tu logo, reemplaza el texto por el componente <Image /> */}
            {/* Ejemplo: <Image src="/logo-firma.svg" alt="Logo Migrantes Unidos" width={180} height={50} /> */}
            Fundación Migrantes Unidos
          </a>
        </Link>
        
        {/* Menú Hamburguesa para móvil */}
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>

        {/* Contenedor para agrupar los enlaces de navegación y el botón */}
        <div className={`nav-menu ${isOpen ? 'open' : ''}`}>
          <ul className="nav-links">
            <li><Link href="/" legacyBehavior><a>Inicio</a></Link></li>
            <li><Link href="/nosotros" legacyBehavior><a>Nosotros</a></Link></li>
            <li><Link href="/loquehacemos" legacyBehavior><a>Lo que hacemos</a></Link></li>
            <li><Link href="/#contact-section" legacyBehavior><a>Contáctanos</a></Link></li>
          </ul>

          {/* Botón de WhatsApp al final */}
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="cta-button">
            Chat por WhatsApp
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;