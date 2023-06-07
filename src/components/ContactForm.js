import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = "https://inqx7quii8.execute-api.us-east-1.amazonaws.com/SendMailAPI_ALPHA";
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                // Double-stringify the formData content
                body: JSON.stringify({ body: JSON.stringify(formData) })
            });
    
            if (response.ok) {
                alert("Email sent successfully");
                // Reset the form fields
                setFormData({
                    name: '',
                    subject: '',
                    message: ''
                });
            } else {
                alert("Error sending email");
            }
        } catch (error) {
            console.error('Error:', error);
            alert("There was a problem with your request");
        }
    };
    

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Name:
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
            </label>
            <label>
                Subject:
                <input type="text" name="subject" value={formData.subject} onChange={handleChange} />
            </label>
            <label>
                Message:
                <textarea name="message" value={formData.message} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default ContactForm;
