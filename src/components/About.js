import React from 'react';
// import './About.css'; 

const About = () => {
  return (
    <div className="about-page">
      <header className="about-header">
        <h1>About Us</h1>
        <p>Delivering Freshness to Your Doorstep</p>
      </header>

      <section className="company-overview">
        <h2>Our Story</h2>
        <p>We are committed to providing the best food delivery experience with quality and speed. Our journey began with a simple idea: to make delicious food accessible to everyone.</p>
      </section>

      <section className="team-section">
        <h2>Meet Our Team</h2>
        <div className="team-members">
          {/* Example team member */}
          <div className="team-member">
            <img src="https://img.freepik.com/premium-photo/hand-drawn-cartoon-chef-illustration_561641-9813.jpg?w=740" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://img.freepik.com/premium-photo/hand-drawn-cartoon-chef-illustration_561641-9813.jpg?w=740" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
          <div className="team-member">
            <img src="https://img.freepik.com/premium-photo/cooking-culinary-expertise-joyful-moments-with-people_1101231-11534.jpg?w=826" alt="Team Member" />
            <h3>John Doe</h3>
            <p>CEO & Founder</p>
          </div>
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Fast delivery times</li>
          <li>Wide selection of restaurants</li>
          <li>High-quality food</li>
          <li>Excellent customer service</li>
        </ul>
      </section>

      <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <blockquote>"Best food delivery service ever! Highly recommended!" - Jane Smith</blockquote>
      </section>

      <footer className="about-footer">
        <p>&copy; 2023 Food Delivery. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;