import React, { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="logo">Migrantes-Web</a>
        </Link>
        <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <div className="line line1"></div>
          <div className="line line2"></div>
          <div className="line line3"></div>
        </div>
        <ul className={`nav-links ${isOpen ? 'open' : ''}`}>
          <li>
            <Link href="/" legacyBehavior>
              <a>Inicio</a>
            </Link>
          </li>
          <li>
            <Link href="/nosotros" legacyBehavior>
              <a>Nosotros</a>
            </Link>
          </li>
          <li>
            <Link href="/contactanos" legacyBehavior>
              <a>Contactanos</a>
            </Link>
          </li>
          <li>
            <Link href="/loquehacemos" legacyBehavior>
              <a>Lo que hacemos</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;