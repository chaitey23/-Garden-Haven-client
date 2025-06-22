import React from 'react';
import './Navbar.css'
import { NavLink } from 'react-router';
const Navbar = () => {
  const links = <>
<nav>
    <NavLink to='/'  className='text-lg font-semibold'>Home</NavLink>
  <NavLink to='/exploreGardeners' className='text-lg font-semibold'>Explore Gardeners</NavLink>
  <NavLink to='/browseTips'  className='text-lg font-semibold'>BrowseTips</NavLink>
  <NavLink to='/shareTips'  className='text-lg font-semibold'>Share a Tips</NavLink>
  <NavLink to='/myTips'  className='text-lg font-semibold'>My Tips</NavLink>
</nav>
  </>
  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-white '>
      <div className="navbar container mx-auto px-4 py-3">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {
                links
              }
            </ul>
          </div>
          <div className='flex items-center'>
            <a className="btn btn-ghost md:text-2xl lg:text-3xl font-bold"><span className='text-lime-600'>GARDEN</span><span className=''>HAVEN</span></a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {
              links
            }
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn bg-lime-600 text-white rounded-4xl">Login</a>
        </div>
      </div>

    </div>
  );
};

export default Navbar;