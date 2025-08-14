import React from 'react';
import Link from 'next/link';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link href="/" legacyBehavior>
          <a className="logo">Migrantes-Web</a>
        </Link>
        <ul className="nav-links">
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
            <Link href="/loquehacemos" legacyBehavior>
              <a>Lo que hacemos</a>
            </Link>
          </li>
          <li>
            <Link href="/contactanos" legacyBehavior>
              <a>Contáctanos</a>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;