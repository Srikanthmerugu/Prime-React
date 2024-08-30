import React from 'react';
import { Carousel } from 'primereact/carousel';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import 'primereact/resources/themes/lara-light-cyan/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import About from './About';

const FoodDeliveryLandingPage = () => {
  const foodItems = [
    {
      image: 'https://img.freepik.com/free-photo/view-ready-eat-delicious-meal-go_23-2151431914.jpg?t=st=1724916477~exp=1724920077~hmac=a75cced00fcf9508beb79676de06733f58dd469bcd1a0f54bb5ce7d0d374345a&w=900',
      name: 'Delicious Burger',
      description: 'Juicy beef patty, melted cheese, crisp lettuce, and tangy sauce.',
    },
    {
      image: 'https://img.freepik.com/premium-photo/3d-render-single-finely-detailed-pakistani-spice-box-masala-dabba_1112756-16627.jpg?w=1060',
      name: 'Savory Pizza',
      description: 'Thin crust topped with tomato sauce, mozzarella, and your favorite toppings.',
    },
    {
      image: 'https://img.freepik.com/free-photo/close-up-delicious-asian-food_23-2150535861.jpg?t=st=1724916533~exp=1724920133~hmac=fb89fad489641d3c6ccab58e8648e52b819df1a662d012b717891760e66d3151&w=900',
      name: 'Hearty Pasta',
      description: 'Al dente pasta in a creamy, flavorful sauce with tender chicken and vegetables.',
    },
  ];

  const itemTemplate = (item) => {
    return (
      <div className="food-item">
        
        <img src={item.image} alt={item.name} />
        <h3>{item.name}</h3>
        <p>{item.description}</p>
      </div>
    );
  };

  return (
    <div className="landing-page">
        <div className='sub-landing-page'>

        <header >
        <div class="marquee-container">
        <div class="marquee-content">
            <p> 30% 𝓞𝓯𝓯 𝓸𝓷 𝓟𝓲𝔃𝔃𝓪𝓼 || 40% 𝓞𝓯𝓯 𝓸𝓷 𝓑𝓾𝓻𝓰𝓮𝓻</p>
            <p> 30% 𝓞𝓯𝓯 𝓸𝓷 𝓟𝓲𝔃𝔃𝓪𝓼 || 40% 𝓞𝓯𝓯 𝓸𝓷 𝓑𝓾𝓻𝓰𝓮𝓻</p>
            <p> 30% 𝓞𝓯𝓯 𝓸𝓷 𝓟𝓲𝔃𝔃𝓪𝓼 || 40% 𝓞𝓯𝓯 𝓸𝓷 𝓑𝓾𝓻𝓰𝓮𝓻</p>
       
        </div>
    </div>
    {/* <div className='fixed-navabar'>   
        <nav  className='fixed-navabar'>
          <ul  className='fixed-navabar'>
            <li><h2 className='landing-page-logo'>𝔣σ𝓞ᗪ ρ𝐀ᎶＥ</h2></li>
            <div className='landing-page-link'>
              <li><a href="#home">Home</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </div>
          </ul>
        </nav>
        </div> */}
        <div className="navbar-container">   
  <nav className="navbar">
    <ul className="navbar-list">
      <li><h2 className="landing-page-logo">𝔣σ𝓞ᗪ ρ𝐀ᎶＥ</h2></li>
      <div className="landing-page-link">
        <li><a href="#home">Home</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </div>
    </ul>
  </nav>
</div>

     
      </header>

      <section className="hero">
        <h1>Delicious <span className='hero-title'>Food Delivered</span> to Your Door</h1>
        <p>Experience the best food in town with our fast and reliable delivery service.</p>
        <div className="search-bar">
          <InputText placeholder="Enter your address" />
          <Button label="Find Food" className="p-button-raised p-button-rounded" />
        </div>
      </section>

        </div>
     

     

      <main>
        <section className="featured-items">
          <h2>Featured Items</h2>
          <Carousel 
            value={foodItems} 
            itemTemplate={itemTemplate} 
            numVisible={3} 
            numScroll={3} 
            circular 
            responsiveOptions={[
              {
                breakpoint: '1024px',
                numVisible: 2,
                numScroll: 2,
              },
              {
                breakpoint: '600px',
                numVisible: 1,
                numScroll: 1,
              },
            ]} 
          />
        </section>

        {/* <section className="about" id="about">
          <h2>About Us</h2>
          <p>We are a team of passionate foodies dedicated to bringing you the best dining experience possible. Our mission is to make it easy for you to enjoy delicious meals from your favorite local restaurants.</p>
          <Button label="Learn More" className="p-button-raised p-button-rounded" />
        </section> */}
        <About />
      </main>

      <footer>
        
        <p  className="landing-page-logo">© 2024 𝔣σ𝓞ᗪ ρ𝐀ᎶＥ. All rights reserved.</p>
        {/* <li><h2 className="landing-page-logo">𝔣σ𝓞ᗪ ρ𝐀ᎶＥ</h2></li> */}

      </footer>
    </div>
  );
};

export default FoodDeliveryLandingPage;
