import React from 'react';
import MainLayout from '../layouts/MainLayout';
import ContactForm from '../components/ContactForm';
import AboutUs from '../components/AboutUs';

const Home = () => {
    return (
        <MainLayout>
            <div className="home">
                {/* Hero Section */}
                <section className="hero">
                    <div className="container">
                    <h1>Welcome to MyApp</h1>
                    <p>Your one-stop solution for all your needs.</p>
                    <a href="#about" className="btn">Learn More</a>
                    </div>
                </section>

                {/* About Us Section */}
                <AboutUs></AboutUs>

                {/* Contact Us Section */}
                <ContactForm></ContactForm>

            </div>
        </MainLayout>
    );
};

export default Home;

