// src/components/landing/ContactoSection.js
import React, { useState } from 'react';
import styles from '../../styles/landing/Contacto.module.css';
import homeStyles from '../../styles/landing/Home.module.css';

// Íconos (sin cambios)
const icons = {
  location: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
  phone: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>,
  email: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>,
};

const ContactoSection = () => {
  // 1. CORRECCIÓN: El estado ahora usa 'phone' en lugar de 'subject'
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // 2. NUEVO: Lógica de validación para email O teléfono
    if (!formData.email && !formData.phone) {
      alert('Por favor, ingrese su correo electrónico o su número de teléfono para que podamos contactarlo.');
      return; // Detiene el envío si la validación falla
    }

    console.log('Datos del formulario:', formData);
    alert('¡Mensaje enviado! Revisa la consola para ver los datos.');
    
    // 3. CORRECCIÓN: Limpiamos el campo 'phone' correctamente
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <section id="contact-section" className={styles.contactSection}>
      <div className={`container ${styles.contactGrid}`}>
        {/* --- Columna Izquierda: Información de Contacto --- */}
        <div className={styles.infoContainer}>
          <h2>Iniciemos la Conversación</h2>
          <p>
            Su futuro es nuestra prioridad. Complete el formulario y nuestro equipo de expertos se pondrá en contacto para ofrecerle una asesoría confidencial y personalizada.
          </p>
          <ul className={styles.contactList}>
            <li>
              {icons.location}
              <span>123 Migration Ave, Miami, FL 33101, USA</span>
            </li>
            <li>
              {icons.phone}
              <span>+1 (305) 123-4567</span>
            </li>
            <li>
              {icons.email}
              <span>consulta@migrantesunidos.com</span>
            </li>
          </ul>
        </div>

        {/* --- Columna Derecha: Formulario --- */}
        <div className={styles.formContainer}>
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name">Nombre Completo</label>
              <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="email">Correo Electrónico</label>
              {/* 4. CORRECCIÓN: Se quita 'required' para la validación con JS */}
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="phone">Teléfono</label>
              {/* 5. CORRECCIÓN: Se cambia el 'value', el 'type' y se quita 'required' */}
              <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} />
            </div>
            <div className={styles.formGroup}>
              <label htmlFor="message">Mensaje</label>
              <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} required></textarea>
            </div>
            <button type="submit" className={homeStyles.ctaButton}>
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactoSection;
