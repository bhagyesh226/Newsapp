import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-secondary text-white  py-4 ">
      <div className="container text-center text-md-left">
        <div className="row">
          {/* Branding */}
          <div className="col-md-6 mb-4">
            <h5 className="text">NEWS -app</h5>
            <p>Your trusted source for the latest news from around the world.</p>
          </div>

          {/* Links */}
          <div className="col-md-3 mb-4">
            <h6 className="text">Quick Links</h6>
            <ul className="list-unstyled">
              <li><a href="/" className="text-white text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-white text-decoration-none">About</a></li>
              <li><a href="/contact" className="text-white text-decoration-none">Contact</a></li>
            </ul>
          </div>

          {/* Social media */}
          <div className="col-md-3 mb-4">
            <h6 className="text-uppercase">Follow Us</h6>
            <ul className="list-unstyled">
              <li><a href="/Footer.js" className="text-white text-decoration-none"><FaPhone className='me-3'/> +91 6353447745</a></li>
              <li><a href="https://www.google.com/maps/place/%E0%AA%B5%E0%AA%BE%E0%AA%B2%E0%AA%BE%E0%AA%B0%E0%AA%A1%E0%AB%80,+%E0%AA%97%E0%AB%81%E0%AA%9C%E0%AA%B0%E0%AA%BE%E0%AA%A4+365410/@21.8182526,71.2126869,16z/data=!3m1!4b1!4m6!3m5!1s0x39588a3da3260077:0xa04edf268e78b881!8m2!3d21.8181763!4d71.2168854!16s%2Fg%2F1tfzf4kz?entry=ttu&g_ep=EgoyMDI1MDQzMC4xIKXMDSoASAFQAw%3D%3D" className="text-white text-decoration-none"> <FaMapMarkerAlt className='me-3'/>loction</a></li>
              <li><a href="/" className="text-white text-decoration-none"><FaEnvelope className="me-2" /> bhagyeshk226@gmail.com</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-3 border-top border-dark">
          <small>© {new Date().getFullYear()} NEWSapp. All rights reserved.</small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
