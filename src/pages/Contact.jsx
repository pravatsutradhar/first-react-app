import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <MainLayout>
            <div className="contact-details">
                <p>
                    <strong>Address:</strong> 123 Main Street, Springfield, USA
                </p>
                <p>
                    <strong>Email:</strong> <a href="mailto:info@myapp.com">info@myapp.com</a>
                </p>
                <p>
                    <strong>Phone:</strong> <a href="tel:+1234567890">+1 234 567 890</a>
                </p>
            </div>
            <ContactForm></ContactForm>
        </MainLayout>
    );
};

export default Contact;