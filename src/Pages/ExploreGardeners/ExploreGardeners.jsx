import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import usePageTitle from '../../hooks/usepageTitle';
import { ThemeContext } from '../../Context/ThemeContext';
import {
  FaUser,
  FaCalendarAlt,
  FaVenusMars,
  FaLeaf,
  FaBriefcase,
  FaMapMarkerAlt,
  FaLightbulb,
  FaSeedling,
  FaUsers,
  FaArrowRight,
  FaStar,
  FaFire,
  FaFilter,
  FaCheckCircle,
  FaSun,
  FaMoon,
  FaSearch
} from 'react-icons/fa';

const ExploreGardeners = () => {
  usePageTitle("Explore Gardeners");
  const [AllGardeners, setAllGardeners] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch('https://gardening-hub-server-ten.vercel.app/exploreGardeners')
      .then(res => res.json())
      .then(data => {
        setAllGardeners(data);
        setLoading(false);
      });
  }, []);

  // Get unique specialities
  const uniqueSpecialities = [...new Set(AllGardeners.map(g => g.speciality))].slice(0, 6);

  // Filter, search and sort gardeners
  let filteredGardeners = AllGardeners.filter(gardener => {
    const matchesCategory = selectedCategory === 'all' ||
      gardener.speciality.toLowerCase().includes(selectedCategory.toLowerCase());

    const matchesSearch = searchQuery === '' ||
      gardener.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gardener.speciality.toLowerCase().includes(searchQuery.toLowerCase()) ||
      gardener.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Apply sorting
  if (sortBy === 'tips_high') {
    filteredGardeners.sort((a, b) => (b.totalTips || 0) - (a.totalTips || 0));
  } else if (sortBy === 'tips_low') {
    filteredGardeners.sort((a, b) => (a.totalTips || 0) - (b.totalTips || 0));
  } else if (sortBy === 'experience_high') {
    filteredGardeners.sort((a, b) => {
      const expA = parseInt(a.experience) || 0;
      const expB = parseInt(b.experience) || 0;
      return expB - expA;
    });
  } else if (sortBy === 'name_asc') {
    filteredGardeners.sort((a, b) => a.name.localeCompare(b.name));
  }

  if (loading) {
    return (
      <div className={`flex flex-col justify-center items-center min-h-[60vh] ${theme === 'dark' ? 'bg-gray-900' : 'bg-gray-50'}`}>
        <div className="relative">
          <div className={`w-20 h-20 border-4 ${theme === 'dark' ? 'border-lime-900 border-t-lime-500' : 'border-lime-200 border-t-lime-600'} rounded-full animate-spin`}></div>
          <FaSeedling className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-lime-500' : 'text-lime-600'} text-xl`} />
        </div>
        <p className={`mt-4 font-medium ${theme === 'dark' ? 'text-lime-400' : 'text-lime-700'}`}>
          Loading gardening community...
        </p>
      </div>
    );
  }

  return (
    <div className={`min-h-screen py-12 px-4 md:px-8 transition-colors duration-300 ${theme === 'dark' ? 'bg-gray-900 text-gray-100' : 'bg-gray-50 text-gray-900'}`}>
      <div className='max-w-7xl mx-auto'>

        {/* Header with Theme Toggle */}
        <div className='mb-12 text-center'>
          <div className='flex justify-between items-center mb-6'>
            <div className='flex items-center gap-3'>
              <div className={`w-12 h-12 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-lime-900/30' : 'bg-lime-100'}`}>
                <FaUsers className={`text-xl ${theme === 'dark' ? 'text-lime-400' : 'text-lime-600'}`} />
              </div>
              <h1 className={`text-3xl md:text-4xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Our Gardening Community
              </h1>
            </div>


          </div>

          <p className={`max-w-2xl mx-auto mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            Connect with expert gardeners, share knowledge, and grow together
          </p>

          <div className={`w-20 h-1 rounded-full ${theme === 'dark' ? 'bg-gradient-to-r from-lime-500 to-emerald-500' : 'bg-gradient-to-r from-lime-400 to-emerald-400'}`}></div>
        </div>

        <div className='mb-8'>
          <div className='relative max-w-2xl mx-auto'>
            <div className='absolute left-4 top-1/2 transform -translate-y-1/2'>
              <FaSearch className={`${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`} />
            </div>
            <input
              type='text'
              placeholder='Search gardeners by name, speciality, or location...'
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={`w-full pl-12 pr-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all ${theme === 'dark' ? 'bg-gray-800 border border-gray-700 text-white placeholder-gray-400' : 'bg-white border border-gray-200 text-gray-900 placeholder-gray-500'}`}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className='absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-lime-600'
              >
                ✕
              </button>
            )}
          </div>
        </div>

        <div className='mb-8'>
          <div className={`rounded-xl p-6 ${theme === 'dark' ? 'bg-gray-800 border border-gray-700' : 'bg-white border border-gray-100 shadow-sm'}`}>
            <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-4'>
              <div className='flex items-center gap-2'>
                <FaFilter className={theme === 'dark' ? 'text-lime-400' : 'text-lime-600'} />
                <h2 className={`text-lg font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Filter & Sort
                </h2>
              </div>

              <div className='flex flex-wrap gap-3'>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className={`px-4 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lime-500 transition-all ${theme === 'dark'
                    ? 'bg-gray-700 border border-gray-600 text-white'
                    : 'bg-gray-50 border border-gray-200 text-gray-900'}`}
                >
                  <option value="default">Sort by</option>
                  <option value="name_asc">Name (A-Z)</option>
                  <option value="tips_high">Most Tips</option>
                  <option value="tips_low">Fewest Tips</option>
                  <option value="experience_high">Most Experience</option>
                </select>
              </div>
            </div>

            <div className='flex flex-wrap gap-2'>
              <button
                onClick={() => setSelectedCategory('all')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === 'all'
                  ? theme === 'dark'
                    ? 'bg-lime-600 text-white'
                    : 'bg-lime-600 text-white shadow-sm'
                  : theme === 'dark'
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              >
                {selectedCategory === 'all' && <FaCheckCircle className='text-sm' />}
                All Gardeners ({AllGardeners.length})
              </button>

              {uniqueSpecialities.map((speciality, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedCategory(speciality)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${selectedCategory === speciality
                    ? theme === 'dark'
                      ? 'bg-lime-900/50 text-lime-300 border border-lime-700'
                      : 'bg-lime-100 text-lime-700 border border-lime-300'
                    : theme === 'dark'
                      ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  {speciality}
                </button>
              ))}
            </div>

            {(selectedCategory !== 'all' || searchQuery) && (
              <div className='mt-4 flex items-center justify-between'>
                <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  Showing <span className={`font-semibold ${theme === 'dark' ? 'text-lime-400' : 'text-lime-600'}`}>
                    {filteredGardeners.length}
                  </span> gardeners
                  {selectedCategory !== 'all' && ` in "${selectedCategory}"`}
                  {searchQuery && ` matching "${searchQuery}"`}
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSearchQuery('');
                  }}
                  className={`text-sm font-medium ${theme === 'dark' ? 'text-lime-400 hover:text-lime-300' : 'text-lime-600 hover:text-lime-700'}`}
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Gardeners Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {filteredGardeners.map((gardener) => (
            <div
              key={gardener._id}
              className='group'
            >
              <div className={`rounded-xl overflow-hidden transition-all duration-300 border h-full flex flex-col ${theme === 'dark'
                ? 'bg-gray-800 border-gray-700 hover:border-lime-600 hover:shadow-2xl hover:shadow-lime-900/20'
                : 'bg-white border-gray-200 hover:border-lime-400 hover:shadow-lg hover:shadow-lime-100/50'
                }`}>

                {/* Card Header */}
                <div className='relative'>
                  {/* Status Badge */}
                  <div className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${gardener.status === 'active'
                    ? theme === 'dark'
                      ? 'bg-green-900/50 text-green-300 border border-green-700'
                      : 'bg-green-100 text-green-800 border border-green-200'
                    : gardener.status === 'premium'
                      ? theme === 'dark'
                        ? 'bg-amber-900/50 text-amber-300 border border-amber-700'
                        : 'bg-amber-100 text-amber-800 border border-amber-200'
                      : theme === 'dark'
                        ? 'bg-gray-700 text-gray-300 border border-gray-600'
                        : 'bg-gray-100 text-gray-800 border border-gray-200'
                    }`}>
                    {gardener.status.charAt(0).toUpperCase() + gardener.status.slice(1)}
                  </div>

                  {/* Profile Image */}
                  <div className='pt-10 pb-6 px-6'>
                    <div className='relative mx-auto w-24 h-24'>
                      <img
                        src={gardener.image}
                        alt={gardener.name}
                        className='w-full h-full rounded-full object-cover border-4 shadow-lg'
                      />
                      <div className={`absolute -bottom-2 -right-2 w-10 h-10 rounded-full flex items-center justify-center shadow-md border-2 ${theme === 'dark' ? 'bg-lime-600 border-gray-800' : 'bg-lime-500 border-white'}`}>
                        <FaUser className='text-white text-sm' />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className='px-6 pb-6 flex-1'>
                  {/* Name & Speciality */}
                  <div className='text-center mb-4'>
                    <h3 className={`text-lg font-bold mb-1 group-hover:text-lime-600 transition-colors ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {gardener.name}
                    </h3>
                    <div className='flex items-center justify-center gap-1'>
                      <FaLeaf className={theme === 'dark' ? 'text-lime-400' : 'text-lime-600'} />
                      <span className={`text-sm font-medium ${theme === 'dark' ? 'text-lime-400' : 'text-lime-600'}`}>
                        {gardener.speciality}
                      </span>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className='space-y-4 mb-6'>
                    {/* Experience */}
                    <div className='flex items-center gap-3'>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${theme === 'dark' ? 'bg-lime-900/30' : 'bg-lime-50'}`}>
                        <FaBriefcase className={theme === 'dark' ? 'text-lime-400' : 'text-lime-600'} />
                      </div>
                      <div className='flex-1'>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Experience</p>
                        <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                          {gardener.experience}
                        </p>
                      </div>
                    </div>

                    {/* Tips Shared */}
                    <div className='flex items-center gap-3'>
                      <div className={`w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0 ${theme === 'dark' ? 'bg-lime-900/30' : 'bg-lime-50'}`}>
                        <FaLightbulb className={theme === 'dark' ? 'text-lime-400' : 'text-lime-600'} />
                      </div>
                      <div className='flex-1'>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Tips Shared</p>
                        <div className='flex items-center gap-2'>
                          <p className={`font-semibold text-sm ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            {gardener.totalTips || 0}
                          </p>
                          {gardener.totalTips > 10 && (
                            <FaStar className={theme === 'dark' ? 'text-amber-400' : 'text-amber-500'} />
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Age & Gender */}
                    <div className='grid grid-cols-2 gap-3'>
                      <div className='flex items-center gap-2'>
                        <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${theme === 'dark' ? 'bg-lime-900/30' : 'bg-lime-50'}`}>
                          <FaCalendarAlt className={theme === 'dark' ? 'text-lime-400' : 'text-lime-600'} />
                        </div>
                        <div>
                          <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Age</p>
                          <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            {gardener.age}
                          </p>
                        </div>
                      </div>

                      <div className='flex items-center gap-2'>
                        <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${theme === 'dark' ? 'bg-lime-900/30' : 'bg-lime-50'}`}>
                          <FaVenusMars className={theme === 'dark' ? 'text-lime-400' : 'text-lime-600'} />
                        </div>
                        <div>
                          <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Gender</p>
                          <p className={`text-sm font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                            {gardener.gender}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Location */}
                    <div className='flex items-center gap-2'>
                      <div className={`w-8 h-8 rounded-md flex items-center justify-center flex-shrink-0 ${theme === 'dark' ? 'bg-lime-900/30' : 'bg-lime-50'}`}>
                        <FaMapMarkerAlt className={theme === 'dark' ? 'text-lime-400' : 'text-lime-600'} />
                      </div>
                      <div className='flex-1'>
                        <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>Location</p>
                        <p className={`text-sm font-semibold truncate ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                          {gardener.location}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* View Profile Button */}
                  <Link to={`/gardener/${gardener._id}`}>
                    <button className={`w-full py-2.5 rounded-lg font-medium text-sm flex items-center justify-center gap-2 transition-all duration-300 border group-hover:border-lime-400 ${theme === 'dark'
                      ? 'bg-lime-900/30 text-lime-300 border-lime-700 hover:bg-lime-800/50'
                      : 'bg-lime-50 text-lime-700 border-lime-200 hover:bg-lime-100'}`}>
                      View Full Profile
                      <FaArrowRight className='text-xs group-hover:translate-x-1 transition-transform' />
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGardeners.length === 0 && (
          <div className='text-center py-16'>
            <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-6 border ${theme === 'dark' ? 'bg-lime-900/20 border-lime-800' : 'bg-lime-50 border-lime-100'}`}>
              <FaSeedling className={theme === 'dark' ? 'text-lime-400 text-2xl' : 'text-lime-600 text-2xl'} />
            </div>
            <h3 className={`text-xl font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
              No Gardeners Found
            </h3>
            <p className={`mb-6 max-w-md mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Try selecting a different category or check back later for new gardeners
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className={`px-5 py-2.5 rounded-lg font-medium text-sm transition-all ${theme === 'dark'
                ? 'bg-lime-600 hover:bg-lime-500 text-white'
                : 'bg-lime-600 hover:bg-lime-700 text-white'}`}
            >
              View All Gardeners
            </button>
          </div>
        )}

        {/* Community Stats */}
        <div className='mt-12 grid grid-cols-1 md:grid-cols-3 gap-6'>
          <div className={`p-6 rounded-xl border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className='flex items-center gap-3 mb-3'>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-lime-900/30' : 'bg-lime-100'}`}>
                <FaUsers className={theme === 'dark' ? 'text-lime-400' : 'text-lime-600'} />
              </div>
              <div>
                <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {AllGardeners.length}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Total Gardeners
                </div>
              </div>
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Active members in our community
            </p>
          </div>

          <div className={`p-6 rounded-xl border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className='flex items-center gap-3 mb-3'>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-lime-900/30' : 'bg-lime-100'}`}>
                <FaLightbulb className={theme === 'dark' ? 'text-lime-400' : 'text-lime-600'} />
              </div>
              <div>
                <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {AllGardeners.reduce((acc, curr) => acc + (curr.totalTips || 0), 0)}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Tips Shared
                </div>
              </div>
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Total gardening tips shared
            </p>
          </div>

          <div className={`p-6 rounded-xl border ${theme === 'dark' ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-100 shadow-sm'}`}>
            <div className='flex items-center gap-3 mb-3'>
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-lime-900/30' : 'bg-lime-100'}`}>
                <FaFire className={theme === 'dark' ? 'text-lime-400' : 'text-lime-600'} />
              </div>
              <div>
                <div className={`text-2xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {AllGardeners.filter(g => g.totalTips > 10).length}
                </div>
                <div className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  Active Contributors
                </div>
              </div>
            </div>
            <p className={`text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
              Members with 10+ tips shared
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreGardeners;