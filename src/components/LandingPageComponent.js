import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css';

const LandingPageComponent = () => {

  useEffect(() => {
    startSlideShow();
    fadeInImages();
  }, []);

  const startSlideShow = () => {
    let slideIndex = 0;
    const showSlides = () => {
      const slides = document.getElementsByClassName("mySlides");
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.transform = `translateX(-${slideIndex * 100}%)`;
      }
      slideIndex++;
      if (slideIndex >= slides.length) slideIndex = 0;
      setTimeout(showSlides, 2000);
    };
    showSlides();
  };

  const fadeInImages = () => {
    const images = document.querySelectorAll(".img1");
    images.forEach((img, index) => {
      img.style.display = 'none';
      setTimeout(() => {
        img.style.display = 'block';
        img.style.opacity = 0;
        img.style.transition = 'opacity 1s';
        setTimeout(() => img.style.opacity = 1, 0);
      }, 1000 * index);
    });
  };

  return (
    <div>
      <header className="header">
        <div className="header-right">
          <a href="#about" className="about">About us <i className="fas fa-info-circle"></i></a>
          <a href="#services" className="services">Services <i className="fas fa-cogs"></i></a>
          <a href="#help" className="help">Help <i className="fas fa-question-circle"></i></a>
          <Link className="log_in" to="/login">LOG IN</Link>
          <Link className="sign_up" to="/register">SIGN UP</Link>
        </div>
      </header>
      <div className="slideshow-container">
        <div className="mySlides">
          <img src="/images/n.jpg" alt="Slide 1" width="100%" height="600px" />
        </div>
        <div className="mySlides">
          <img src="/images/n1.jpg" alt="Slide 2" width="100%" height="600px" />
        </div>
        <div className="mySlides">
          <img src="/images/n2.jpg" alt="Slide 3" width="100%" height="600px" />
        </div>
      </div>
      <div className="container custom-container">
        <h3 id="about">About Us</h3>
        <p>Welcome to MINIMALS – where thoughtful shoppers discover a curated selection of unique designs and top-quality pieces that defy the ordinary. As your Online Clothing Shop, MINIMALS takes pride in constantly curating fresh, trend-setting collections, always on the lookout for that next style revelation our customers will adore.Founded in India in 2023, MINIMALS has become synonymous with more than just fashion; it's a commitment to providing an unmatched online shopping experience. Our dedication to expert service and genuine care sets us apart, making MINIMALS the destination for those who appreciate distinctive style and reliability. Explore the extraordinary at MINIMALS, where fashion is more than just clothing – it's a statement of individuality.</p>
      </div>
      <div className="container mt-4">
      <div className="row">
        <div className="col-md-4 mb-4">
          <div className="card">
            <img className="card-img-top" src="/images/n.jpg" alt="Image 1" />
            <div className="card-body">
              <h5 className="card-title">Women</h5>
              <p className="card-text">Wide varities ranging from ethnic to partywears</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img className="card-img-top" src="/images/n1.jpg" alt="Image 2" />
            <div className="card-body">
              <h5 className="card-title">Men</h5>
              <p className="card-text">Wide varieties ranging from formals to casuals</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-4">
          <div className="card">
            <img className="card-img-top" src="/images/n2.jpg" alt="Image 3" />
            <div className="card-body">
              <h5 className="card-title">Kids</h5>
              <p className="card-text">Comfortable cotton wears for your toddlers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div style={{ backgroundColor: 'rgba(138, 205, 215, 0.7)', marginBottom: '3cm' }}>
        <div className="container cus-cont">
          <h3 style={{ fontSize: 'xx-large', color: 'white', padding: '10px' }} id="services">KEY SERVICES</h3>
          <div className="service-container">
            <div className="service animated">
              <i className="fas fa-shopping-cart"></i>
              <h4>Product Sourcing</h4>
              <p>Discover a curated selection of unique and top-quality products sourced from around the world.</p>
            </div>
            <div className="service animated">
              <i className="fas fa-shopping-cart"></i>
              <h4>Fashion Consultation</h4>
              <p>Get personalized fashion advice from our expert stylists to enhance your unique style.</p>
            </div>
            <div className="service animated">
              <i className="fas fa-shopping-cart"></i>
              <h4>Express Shipping</h4>
                <p>Enjoy fast and reliable express shipping to get your favorite items delivered to your doorstep quickly.</p>
            </div>
            {}
          </div>
        </div>
      </div>
      <div>
        <div className="container cus-cont">
          <h3 style={{ fontSize: 'xx-large' }} id="help">HOW CAN WE HELP?</h3>
          <div className="service-container">
            <div className="service animated">
              <i className="fas fa-question-circle"></i>
              <h4>FAQs</h4>
              <p>Explore our frequently asked questions to find answers to common queries about our services and products.</p>
            </div>
            <div className="service animated">
              <i className="fas fa-question-circle"></i>
              <h4>Contact Us</h4>
              <p>Reach out to our support team via email. We're here to assist you with any concerns or feedback.</p>
            </div>
            <div className="service animated">
              <i className="fas fa-question-circle"></i>
              <h4>Privacy & Security</h4>
                    <p>Learn more about our commitment to ensuring the privacy and security of your personal information.</p>
            </div>
            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPageComponent;
