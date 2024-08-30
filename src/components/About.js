import React from 'react';
// import './About.css'; 

const About = () => {
  return (
    <>
    <div className='bg-aboutus'>
      
    </div>
    {/* <section className="company-overview">
        <h2>Our Story</h2>
        <p>We are committed to providing the best food delivery experience with quality and speed. Our journey began with a simple idea: to make delicious food accessible to everyone.</p>
      </section> */}
    <div className="about-page">
      {/* <div className="about-header">
        <h1>About Us</h1>
        <p>Delivering Freshness to Your Doorstep</p>
      </div> */}
     
  
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
      <div className='overview-container'>
      {/* <section className="why-choose-us">
        <h2>Why Choose Us?</h2>
        <ul>
          <li>Fast delivery times</li>
          <li>Wide selection of restaurants</li>
          <li>High-quality food</li>
          <li>Excellent customer service</li>
        </ul>
      </section> */}

    </div>
    

     

      {/* <section className="testimonials">
        <h2>Customer Testimonials</h2>
        <blockquote>"Best food delivery service ever! Highly recommended!" - Jane Smith</blockquote>
      </section> */}

    
    </div> 
    <footer className="about-footer">
      <footer class="footer">
  <div class="footer-container">
    <div class="footer-logo">
      <h1>𝔣σ𝓞ᗪ ρ𝐀ᎶＥ</h1>
    </div>

    <div class="footer-social">
      <a href="#" class="social-icon" target="_blank" aria-label="Facebook"><i class="pi pi-facebook"></i></a>
      <a href="#" class="social-icon" target="_blank" aria-label="Twitter"><i class="pi pi-twitter"></i></a>
      <a href="#" class="social-icon" target="_blank" aria-label="Instagram"><i class="pi pi-instagram"></i></a>
      <a href="#" class="social-icon" target="_blank" aria-label="YouTube"><i class="pi pi-youtube"></i></a>
    </div>

    <div class="footer-links">
      <a href="#">Home</a>
      <a href="#">Menu</a>
      <a href="#">About Us</a>
      <a href="#">Contact</a>
    </div>

    {/* <p class="footer-text">© 2024 𝔣σ𝓞ᗪ ρ𝐀ᎶＥ. All rights reserved.</p> */}
  </div>
</footer>


      
      </footer>
       </>
  );
};

export default About;