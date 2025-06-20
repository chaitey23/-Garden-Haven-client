import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='bg-amber-900'>
            <footer className="footer sm:footer-horizontal  text-white p-10">
  <nav>
    <h6 className="footer-title">🌿 Services</h6>
    <a className="link link-hover">Plant Care Tips</a>
    <a className="link link-hover">Gardening Tools</a>
    <a className="link link-hover">Organic Fertilizers</a>
    <a className="link link-hover">Gardener Booking</a>
  </nav>
  <nav>
    <h6 className="footer-title">🌻 Community</h6>
    <a className="link link-hover">Explore Gardeners</a>
    <a className="link link-hover">Ask Questions</a>
    <a className="link link-hover">Events & Meetups</a>
    <a className="link link-hover">Blogs & Tips</a>
  </nav>
  <nav>
    <h6 className="footer-title">🌱 About</h6>
    <a className="link link-hover">Our Story</a>
    <a className="link link-hover">Contact Us</a>
    <a className="link link-hover">Terms & Privacy</a>
  </nav>
</footer>
<div className="flex flex-col md:flex-row items-center justify-between border-t border-gray-600 pt-6 mt-6 gap-4 text-sm text-gray-200">
  <div className="text-center md:text-left">
    <span className="font-bold text-lime-500 text-base">GardenHaven</span>
    <p className="mt-1">Contact: +880 1234 567890 | Email: info@gardenhaven.com</p>
  </div>

 
  <div className="text-center">
    <a href="#" className="hover:underline hover:text-lime-400 transition duration-200 mr-4">Terms of Service</a>
    <a href="#" className="hover:underline hover:text-lime-400 transition duration-200">Privacy Policy</a>
  </div>

  
  <div className="flex space-x-5">
    <a href="https://www.facebook.com/chaetey001?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition duration-200">
      <FaFacebook className="text-2xl" />
    </a>
    <a href="#" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition duration-200">
      <FaTwitter className="text-2xl" />
    </a>
    <a href="https://www.instagram.com/chaitey12?igsh=cnQ0dHkzZXZqdDZk" target="_blank" rel="noopener noreferrer" className="hover:text-lime-400 transition duration-200">
      <FaInstagram className="text-2xl" />
    </a>
  </div>
</div>

        </div>
    );
};

export default Footer;