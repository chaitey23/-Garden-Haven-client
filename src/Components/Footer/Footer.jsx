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

<footer className="footer border-base-300 text-white border-t px-10 py-4">
  <aside className="items-center grid-flow-col">
    <p>
      <span className="font-bold text-lime-700">GardenHaven</span><br />
      Nurturing green connections since 2025
    </p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4">
    <a href="https://www.facebook.com/chaetey001?mibextid=ZbWKwL" target='_blank'><FaFacebook className=" text-2xl" ></FaFacebook></a>
    <a href=""><FaTwitter className='text-2xl'></FaTwitter></a>
    <a href="https://www.instagram.com/chaitey12?igsh=cnQ0dHkzZXZqdDZk" target='_blank'><FaInstagram className='text-2xl'></FaInstagram></a>
    </div>
  </nav>
</footer>

        </div>
    );
};

export default Footer;