import React from "react";  
import "../style/Contact.css"; 
 
  
const Contact = () => { 
  return (
    //return (listOfRestaurants.length === 0) ? <ContactUsShimmer />:(
    <div className="contact-page">
      {/* Hero Banner */}
      <section className="contact-hero">
        <div className="hero-overlay">
          <h1>Contact Us</h1>
          <p>We’re here to assist you 24x7 – Reach out for any queries or support</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="info-box">
          <h3>📍 Address</h3>
          <p>ICICI Lombard General Insurance Co. Ltd.<br/> 414, ICICI Bank Towers, Bandra-Kurla Complex, Mumbai - 400051</p>
        </div>
        <div className="info-box">
          <h3>📞 Phone</h3>
          <p>1800 2666 (Toll-Free)<br/> +91 22 6196 1100</p>
        </div>
        <div className="info-box">
          <h3>📧 Email</h3>
          <p>customersupport@icicilombard.com</p>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <h2>Get in Touch</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="5" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>

      {/* Map Section */}
      <section className="map-section">
        <h2>Our Location</h2>
        <div className="map-box">
          {/* If you want real Google Map Embed replace iframe src */}
          <iframe
            title="ICICI Lombard Office"
            src="https://maps.google.com/maps?q=ICICI%20Lombard%20Mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </section>

      {/* Footer */}
      <footer className="contact-footer">
        <p>"Always With You, Always ICICI Lombard"</p>
      </footer>
    </div>
  );
};

export default Contact;
