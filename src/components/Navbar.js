import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image'; // Importar el componente Image de Next.js
import img from "../../public/LOGO3.png"

const Navbar = ({ siteConfig }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);


  // URL de WhatsApp con tu número y un mensaje predeterminado
  const whatsappUrl = `https://wa.me/${siteConfig?.whatsapp_number}?text=Hola,%20estoy%20interesado%20en%20sus%20servicios%20legales.`;

  return (
    <nav className="navbar">
      <div className="container navbar-container">
        {/* Logo a la izquierda */}
        <Link href="/" legacyBehavior>
            <Image
            src={img} 
            alt="Asesora de migración"
            width={300}
            height={50}
            // className={heroStyles.heroImage}
            priority // Carga esta imagen primero por ser importante para el LCP
          />
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