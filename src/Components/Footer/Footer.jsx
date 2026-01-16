import React from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt, FaSeedling } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-emerald-800 to-emerald-900 mt-16'>
      <footer className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <FaSeedling className="text-3xl text-lime-400" />
              <div>
                <h2 className="text-2xl font-bold text-white">GardenHaven</h2>
                <p className="text-lime-200 text-sm">Grow with Nature</p>
              </div>
            </div>
            <p className="text-emerald-100 text-sm">
              Your gardening companion for expert tips, tools, and community support.
            </p>
          </div>

          {/* Services */}
          <div>
            <h6 className="text-lg font-bold text-white mb-4">🌿 Services</h6>
            <div className="space-y-2">
              {['Plant Care Tips', 'Gardening Tools', 'Organic Fertilizers', 'Gardener Booking'].map((service) => (
                <a key={service} href="#" className="block text-emerald-100 hover:text-lime-300 transition-colors hover:pl-2 duration-200">
                  {service}
                </a>
              ))}
            </div>
          </div>

          {/* Community */}
          <div>
            <h6 className="text-lg font-bold text-white mb-4">👥 Community</h6>
            <div className="space-y-2">
              {['Explore Gardeners', 'Ask Questions', 'Events & Meetups', 'Blogs & Tips'].map((item) => (
                <a key={item} href="#" className="block text-emerald-100 hover:text-lime-300 transition-colors hover:pl-2 duration-200">
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h6 className="text-lg font-bold text-white mb-4">📞 Contact</h6>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-emerald-100">
                <FaPhone className="text-lime-400" />
                <span>+880 1234 567890</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-100">
                <FaEnvelope className="text-lime-400" />
                <span>info@gardenhaven.com</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-100">
                <FaMapMarkerAlt className="text-lime-400" />
                <span>Dhaka, Bangladesh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-emerald-700 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Copyright */}
          <div className="text-center md:text-left">
            <p className="text-emerald-200 text-sm">
              © {new Date().getFullYear()} GardenHaven. All rights reserved.
            </p>
          </div>

          {/* Links */}
          <div className="flex gap-6">
            <a href="#" className="text-emerald-100 hover:text-lime-300 transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-emerald-100 hover:text-lime-300 transition-colors text-sm">
              Privacy Policy
            </a>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/chaetey001?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaFacebook className="text-lg" />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaTwitter className="text-lg" />
            </a>
            <a
              href="https://www.instagram.com/chaitey12?igsh=cnQ0dHkzZXZqdDZk"
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <FaInstagram className="text-lg" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;