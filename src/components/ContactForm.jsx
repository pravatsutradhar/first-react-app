import React from 'react';

const ContactForm = () => {
    return (
        <div>
            <section id="contact" className="contact">
                    <div className="container">
                    <h2>Contact Us</h2>
                    <form>
                        <div>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your Name" required />
                        </div>
                        <div>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="Your Email" required />
                        </div>
                        <div>
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                        </div>
                        <button type="submit" className="btn">Send Message</button>
                    </form>
                    </div>
                </section>
        </div>
    );
};

export default ContactForm;