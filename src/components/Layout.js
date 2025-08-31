import React from 'react';
import Head from 'next/head';
import Footer from './Footer';
// No importes CSS globales aquí, y si no tienes Layout.module.css, elimina la importación.

const Layout = ({ children}) => {
  return (
    <div>
      <Head>
        <title>Migrantes Unidos</title>
        <meta name="description" content="Página web para la comunidad de migrantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;