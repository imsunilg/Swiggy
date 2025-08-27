import React from "react"; 
import "../style/About.css"; 

const About = () => {
  return (
    <div className="about-page">
      {/* Hero Banner */}
      <section className="hero-banner">
        <div className="hero-overlay">
          <h1>About ICICI Lombard</h1>
          <p>Trusted Insurance Partner, Protecting Millions of Lives & Businesses</p>
        </div>
      </section>

      {/* Who We Are */}
      <section className="about-section">
        <h2>Who We Are</h2>
        <p>
          ICICI Lombard is one of India’s leading private sector general insurance 
          companies. With a strong presence across the country, we deliver innovative 
          and customer-centric insurance solutions that safeguard your health, motor, 
          travel, home, and business.
        </p>
      </section>

      {/* Vision & Mission */}
      <section className="vision-mission">
        <div className="vision-box">
          <h3>Our Vision</h3>
          <p>
            To be the most trusted insurance company, recognized for delivering 
            excellence in customer service and innovative solutions.
          </p>
        </div>
        <div className="mission-box">
          <h3>Our Mission</h3>
          <p>
            To empower customers with comprehensive risk protection, using technology, 
            trust, and transparency as our foundation.
          </p>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="team-section">
        <h2>Leadership Team</h2>
        <div className="team-grid">
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="CEO" />
            <h4>Bhimaraj Kulkarni</h4>
            <p>Chief Executive Officer</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="CFO" />
            <h4>Kalpana Iyer</h4>
            <p>Chief Financial Officer</p>
          </div>
          <div className="team-card">
            <img src="https://randomuser.me/api/portraits/men/54.jpg" alt="CTO" />
            <h4>Raghav Nair</h4>
            <p>Chief Technology Officer</p>
          </div>
        </div>
      </section>

      {/* Footer Quote */}
      <footer className="about-footer">
        <p>
          "Securing Your Tomorrow, Today – The ICICI Lombard Way."
        </p>
      </footer>
    </div>
  );
};

export default About;

// const About=()=>{
// return (
//     <div>
//         <h1>About Us Page</h1>
//         <p>This is a simple React application that displays a list of restaurants.</p>
//         <p>It allows users to search for restaurants and filter them based on ratings.</p>
//         <p>Built with React, it demonstrates the use of components, state management, and API calls.</p>
//     </div>
// );

// };

// export default About;