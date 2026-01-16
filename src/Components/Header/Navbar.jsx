import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import { ThemeContext } from '../../Context/ThemeContext';
import { FaMoon, FaSun, FaBars, FaTimes, FaUser, FaLeaf, FaSeedling } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';

const Navbar = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const handleLogOut = () => {
    logout()
      .then(() => {
        toast.success("Logged out Successfully!");
        setIsMenuOpen(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error("Logout Failed");
      });
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  if (loading) {
    return (
      <div className='h-screen flex justify-center items-center bg-gradient-to-br from-emerald-50 to-white'>
        <div className="relative">
          <div className="w-16 h-16 bg-gradient-to-r from-emerald-400 to-lime-400 rounded-full animate-pulse"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <FaSeedling className="text-2xl text-white" />
          </div>
        </div>
      </div>
    );
  }

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/exploreGardeners', label: 'Explore Gardeners' },
    { path: '/browseTips', label: 'Browse Tips' },
  ];

  const userLinks = user?.email ? [
    { path: '/shareTips', label: 'Share a Tip' },
    { path: '/myTips', label: 'My Tips' }
  ] : [];

  const allLinks = [...navLinks, ...userLinks];

  return (
    <div className={`fixed top-0 left-0 right-0 z-50 ${theme === 'dark' ? 'bg-gray-900 shadow-lg' : 'bg-white shadow-md'}`}>

      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">

          <div className="flex items-center gap-3">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-r from-emerald-500 to-lime-500 rounded-xl flex items-center justify-center shadow-md">
                <FaLeaf className="text-xl text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold">
                  <span className="text-emerald-600">GARDEN</span>
                  <span className={theme === 'dark' ? 'text-white' : 'text-gray-800'}>HAVEN</span>
                </h1>
                <p className="text-xs text-emerald-500">Grow with Nature</p>
              </div>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-1">
            {allLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-4 py-2 rounded-lg font-medium transition-all duration-300 ${isActive
                    ? theme === 'dark'
                      ? 'bg-emerald-800 text-white'
                      : 'bg-gradient-to-r from-emerald-100 to-lime-100 text-emerald-700'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-800 hover:text-white'
                      : 'text-gray-700 hover:bg-emerald-50 hover:text-emerald-600'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${theme === 'dark'
                ? 'bg-gray-800 text-amber-400 hover:bg-gray-700'
                : 'bg-emerald-100 text-emerald-700 hover:bg-emerald-200'
                }`}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <FaMoon className="text-sm" /> : <FaSun className="text-sm" />}
            </button>

            {user && user.email ? (
              <div className="relative group">
                <button className="flex items-center gap-2 group">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400 shadow-md">
                      <img
                        src={user.photoURL || 'https://i.ibb.co.com/6vjvwBsS/avatar.png'}
                        alt={user.displayName || 'User'}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white"></div>
                  </div>
                  <span className="hidden lg:inline font-medium text-gray-700 dark:text-gray-300">
                    {user.displayName?.split(' ')[0] || 'User'}
                  </span>
                </button>


                <div className={`absolute right-0 top-full mt-2 w-48 ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
                  } rounded-xl shadow-2xl border border-emerald-100 dark:border-gray-700 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                  <div className="p-3 border-b border-emerald-50 dark:border-gray-700">
                    <p className="font-semibold text-gray-800 dark:text-white truncate">
                      {user.displayName || 'User'}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400 truncate">
                      {user.email}
                    </p>
                  </div>
                  <div className="p-2">
                    <button
                      onClick={handleLogOut}
                      className="w-full flex items-center gap-3 px-3 py-2 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg transition-colors"
                    >
                      <BiLogOut className="text-lg" />
                      <span>Logout</span>
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <Link to="/login">
                <button className="px-6 py-2 bg-gradient-to-r from-emerald-500 to-lime-500 text-white rounded-full font-medium hover:from-emerald-600 hover:to-lime-600 transition-all shadow-md hover:shadow-lg flex items-center gap-2">
                  <FaUser className="text-sm" />
                  Login
                </button>
              </Link>
            )}

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`md:hidden w-10 h-10 rounded-lg flex items-center justify-center ${theme === 'dark'
                ? 'bg-gray-800 text-white'
                : 'bg-emerald-50 text-emerald-700'
                }`}
            >
              {isMenuOpen ? <FaTimes className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'
        } shadow-xl border-t border-emerald-100 dark:border-gray-700`}>
        <div className="container mx-auto px-4 py-3">
          <div className="space-y-1">
            {allLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `block px-4 py-3 rounded-lg font-medium transition-all ${isActive
                    ? theme === 'dark'
                      ? 'bg-emerald-800 text-white'
                      : 'bg-gradient-to-r from-emerald-100 to-lime-100 text-emerald-700'
                    : theme === 'dark'
                      ? 'text-gray-300 hover:bg-gray-700'
                      : 'text-gray-700 hover:bg-emerald-50'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            {user && user.email && (
              <div className="pt-4 mt-4 border-t border-emerald-100 dark:border-gray-700">
                <div className="px-4 py-3 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-emerald-400">
                    <img
                      src={user.photoURL || 'https://i.ibb.co.com/6vjvwBsS/avatar.png'}
                      alt={user.displayName || 'User'}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 dark:text-white">
                      {user.displayName || 'User'}
                    </p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {user.email}
                    </p>
                  </div>
                </div>
                <button
                  onClick={handleLogOut}
                  className="w-full mt-3 px-4 py-3 text-red-600 hover:bg-red-50 dark:hover:bg-gray-700 rounded-lg flex items-center gap-3"
                >
                  <BiLogOut className="text-lg" />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;