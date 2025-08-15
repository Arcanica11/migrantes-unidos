import React from 'react';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/Navbar.css'; // <-- Mueve esta importación aquí
import '../styles/Footer.css'; // <-- Mueve esta importación aquí

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;