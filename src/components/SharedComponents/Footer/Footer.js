import React from 'react';
import logo from '../../../images/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faMailBulk, faMap, faPhone } from '@fortawesome/free-solid-svg-icons';
import './Footer.css'
import Gallery1 from '../../../images/footer-gallery-1.jpg'
import Gallery2 from '../../../images/footer-gallery-2.jpg'
import Gallery3 from '../../../images/footer-gallery-3.jpg'
import Gallery4 from '../../../images/footer-gallery-4.jpg'
import Gallery5 from '../../../images/footer-gallery-5.jpg'
import Gallery6 from '../../../images/footer-gallery-6.jpg'


const Footer = () => {
  return (
    <footer className="align-items-center footer-container">

      {/* Brand Column */}
      <div className="container row mx-auto pt-5 footer-brand">
        <div className="col-md-3 col-sm-12 text-white" style={{ textAlign: 'left' }}>
          <img src={logo} alt="" />
          <p>Lorem ipsum dolor amet consetetur adi pisicing elit sed eiusm tempor in cididunt ut labore dolore magna aliqua enim.</p>
          <FontAwesomeIcon icon={faFacebook} className="mr-3" />
          <FontAwesomeIcon icon={faInstagram} className="mr-3" />
          <FontAwesomeIcon icon={faTwitter} className="mr-3" />
          <FontAwesomeIcon icon={faLinkedin} className="mr-3" />
          <FontAwesomeIcon icon={faGoogle} className="mr-3" />
        </div>

        {/* Services Column */}
        <div className="col-md-3 col-sm-12 footer-services">
          <h2>Services</h2>
          <li><a href="/">About Us</a></li>
          <li><a href="/">How It Works</a></li>
          <li><a href="/">Our Blog</a></li>
          <li><a href="/">Our Services</a></li>
          <li><a href="/">Contact Us</a></li>
          <li><a href="/">Listing</a></li>
        </div>

        {/* Gallery Column */}
        <div className="col-md-3 col-sm-12 footer-gallery text-white">
          <h2>Gallery</h2>
          <img src={Gallery1} alt="" />
          <img src={Gallery2} alt="" />
          <img src={Gallery3} alt="" />
          <img src={Gallery4} alt="" />
          <img src={Gallery5} alt="" />
          <img src={Gallery6} alt="" />
        </div>

        {/* Contact Column */}
        <div className="col-md-3 col-sm-12 footer-contact text-white">
          <h2>Contacts</h2>
          <p><FontAwesomeIcon icon={faMap} /> Flat 20, Reynolds Neck, North Helenaville, FV77 8WS</p>
          <p><FontAwesomeIcon icon={faPhone} /> +2(305) 587-3407</p>
          <p><FontAwesomeIcon icon={faMailBulk} /> info@example.com</p>
        </div>
      </div>

      {/* CopyRight */}
      <div className="footer-copyright">
        <div className="container d-flex justify-content-between text-white pt-3">
          <p>Travio © 2021 All Right Reserved</p> <p>Terms of Service Privacy Policy</p>
        </div>
      </div>

    </footer>
  );
};

export default Footer;