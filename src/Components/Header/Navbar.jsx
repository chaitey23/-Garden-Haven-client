import React, { use, useContext } from 'react';
import './Navbar.css';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import { ThemeContext } from '../../Context/ThemeContext';
import { FaMoon, FaSun } from 'react-icons/fa';

const Navbar = () => {
  const { user, logout, loading } = use(AuthContext);
const {theme,toggleTheme} = useContext(ThemeContext);
  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success("Logged out Successfully!");
      })
      .catch((error) => {
        console.log(error);
        toast.error("Logout Failed");
      });
  };

  if (loading) {
    return (
      <div className='h-screen flex justify-center items-center'>
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  }

  const links = (
    <>
      <nav>
        <NavLink to='/' className='text-lg font-semibold'>Home</NavLink>
        <NavLink to='/exploreGardeners' className='text-lg font-semibold'>Explore Gardeners</NavLink>
        <NavLink to='/browseTips' className='text-lg font-semibold'>BrowseTips</NavLink>
        {
          user && user.email && (
            <>
              <NavLink to='/shareTips' className='text-lg font-semibold'>Share a Tips</NavLink>
              <NavLink to='/myTips' className='text-lg font-semibold'>My Tips</NavLink>
            </>
          )
        }
      </nav>
    </>
  );

  return (
    <div className='fixed top-0 left-0 right-0 z-50 bg-base-100'>
      <div className="navbar container mx-auto px-4 py-3">
        <div className="navbar-start">
          <div className="dropdown lg:hidden">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-lime-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[100] p-2 shadow-lg bg-base-100 rounded-box w-56 border border-gray-200"
            >
              <li>
                <NavLink to="/" className="py-2 px-3 rounded hover:bg-lime-100 hover:text-lime-700 transition font-medium">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/exploreGardeners" className="py-2 px-3 rounded hover:bg-lime-100 hover:text-lime-700 transition font-medium">
                  Explore Gardeners
                </NavLink>
              </li>
              <li>
                <NavLink to="/browseTips" className="py-2 px-3 rounded hover:bg-lime-100 hover:text-lime-700 transition font-medium">
                  BrowseTips
                </NavLink>
              </li>
              {user?.email && (
                <>
                  <li>
                    <NavLink to="/shareTips" className="py-2 px-3 rounded hover:bg-lime-100 hover:text-lime-700 transition font-medium">
                      Share a Tips
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/myTips" className="py-2 px-3 rounded hover:bg-lime-100 hover:text-lime-700 transition font-medium">
                      My Tips
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <div className='flex items-center'>
            <a className="btn btn-ghost md:text-2xl lg:text-3xl font-bold">
              <span className='text-lime-600'>GARDEN</span><span>HAVEN</span>
            </a>
          </div>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>

        <div className="navbar-end gap-3">
                <button
            onClick={toggleTheme}
            className="btn btn-circle bg-black text-white  transition"
            aria-label="Toggle Dark/Light Mode"
          >
            {theme === "light" ? <FaMoon /> : <FaSun />}
          </button>
          {
            user && user.email ? (
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full ring ring-lime-500 ring-offset-base-100 ring-offset-2">
                    <img src={user.photoURL} alt="User" />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <p className="text-sm font-semibold">{user.displayName || user.email}</p>
                  </li>
                  <li>
                    <button onClick={handleLogOut} className="text-red-500 hover:text-red-600 btn">
                      Logout
                    </button>
                  </li>
                </ul>
              </div>
            ) : (
              <Link to='/login'>
                <button className='btn bg-lime-600 text-white rounded-4xl'>Login</button>
              </Link>
            )
          }
         

        </div>
      </div>
    </div>
  );
};

export default Navbar;
