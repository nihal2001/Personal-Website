import React from 'react';
import './Pages.css';
import ContactForm from '../components/ContactForm';

const Contact = () => (
    <div className="contact-container">
        <div className="contact-text">
            <h1>Send a message</h1>
        </div>
        <div className="contact-form">
            <ContactForm />
        </div>
    </div>
);

export default Contact;
