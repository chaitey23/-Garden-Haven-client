import React, { useContext, useEffect, useState } from 'react';
import { FaArrowRight, FaHeart, FaLeaf, FaSeedling, FaEye, FaStar, FaCarrot, FaAppleAlt, FaRecycle, FaTree, FaFire } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ThemeContext } from '../Context/ThemeContext';


const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

const TopGardeningTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    fetch("https://gardening-hub-server-ten.vercel.app/tips?status=public")
      .then(res => res.json())
      .then(data => {
        setTips(data.slice(0, 6));
        setLoading(false);
      });
  }, []);

  const getCategoryIcon = (category) => {
    const iconMap = {
      vegetable: <FaCarrot className="text-emerald-500 text-sm" />,
      herb: <FaLeaf className="text-green-500 text-sm" />,
      fruit: <FaAppleAlt className="text-red-500 text-sm" />,
      organic: <FaRecycle className="text-lime-500 text-sm" />,
      fertilizer: <FaStar className="text-amber-500 text-sm" />,
      tree: <FaTree className="text-emerald-600 text-sm" />,
    };
    return iconMap[category?.toLowerCase()] || <FaSeedling className="text-gray-500 text-sm" />;
  };

  const getCategoryColor = (category) => {
    const colorMap = {
      vegetable: theme === 'dark' ? 'bg-emerald-900/40 text-emerald-300 border-emerald-800' : 'bg-emerald-50 text-emerald-700 border-emerald-200',
      flower: theme === 'dark' ? 'bg-pink-900/40 text-pink-300 border-pink-800' : 'bg-pink-50 text-pink-700 border-pink-200',
      herb: theme === 'dark' ? 'bg-green-900/40 text-green-300 border-green-800' : 'bg-green-50 text-green-700 border-green-200',
      fruit: theme === 'dark' ? 'bg-red-900/40 text-red-300 border-red-800' : 'bg-red-50 text-red-700 border-red-200',
      organic: theme === 'dark' ? 'bg-lime-900/40 text-lime-300 border-lime-800' : 'bg-lime-50 text-lime-700 border-lime-200',
      fertilizer: theme === 'dark' ? 'bg-amber-900/40 text-amber-300 border-amber-800' : 'bg-amber-50 text-amber-700 border-amber-200',
      tree: theme === 'dark' ? 'bg-emerald-900/40 text-emerald-300 border-emerald-800' : 'bg-emerald-50 text-emerald-700 border-emerald-200',
    };
    return colorMap[category?.toLowerCase()] || (theme === 'dark' ? 'bg-gray-800 text-gray-300 border-gray-700' : 'bg-gray-50 text-gray-700 border-gray-200');
  };

  if (loading) {
    return (
      <div className={`flex justify-center items-center min-h-[50vh] ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
        <div className="relative">
          <div className={`w-16 h-16 border-4 ${theme === 'dark' ? 'border-gray-700 border-t-lime-500' : 'border-lime-200 border-t-lime-600'} rounded-full animate-spin`}></div>
          <FaSeedling className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${theme === 'dark' ? 'text-lime-500' : 'text-lime-600'} text-xl`} />
        </div>
      </div>
    );
  }

  return (
    <div className={`py-12 px-4 ${theme === 'dark' ? 'bg-gray-900' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-4"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center ${theme === 'dark' ? 'bg-lime-900/30' : 'bg-lime-100'}`}>
                <FaLeaf className={`text-lg ${theme === 'dark' ? 'text-lime-400' : 'text-lime-600'}`} />
              </div>
              <h2 className={`text-3xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                Top <span className="text-lime-600">Gardening Tips</span>
              </h2>
            </div>
          </motion.div>
          <p className={`max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'} mb-2`}>
            Expert advice from our gardening community
          </p>
          <div className={`w-16 h-0.5 mx-auto ${theme === 'dark' ? 'bg-lime-700' : 'bg-lime-400'} rounded-full`}></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {tips.map((tip) => (
            <motion.div
              key={tip._id}
              variants={cardVariants}
              className="group"
            >
              <div className={`relative rounded-xl overflow-hidden h-full flex flex-col ${theme === 'dark'
                ? 'bg-gray-800 border border-gray-700 hover:border-lime-600'
                : 'bg-white border border-gray-200 hover:border-lime-400'} transition-all duration-300 shadow-sm hover:shadow-md`}>

                <div className="relative h-48 overflow-hidden">
                  <img
                    src={tip.image}
                    alt={tip.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute top-3 left-3">
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full ${getCategoryColor(tip.category)}`}>
                      {getCategoryIcon(tip.category)}
                      <span className="text-xs font-medium">
                        {tip.category?.charAt(0).toUpperCase() + tip.category?.slice(1) || 'General'}
                      </span>
                    </div>
                  </div>

                  <div className="absolute top-3 right-3">
                    <div className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-full ${theme === 'dark'
                      ? 'bg-gray-900/80'
                      : 'bg-white/90'} backdrop-blur-sm border ${theme === 'dark' ? 'border-gray-700' : 'border-white/50'}`}>
                      <FaHeart className="text-pink-500 text-xs" />
                      <span className={`text-xs font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                        {tip.totalLiked || 0}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-5 flex-1 flex flex-col">
                  <div className="flex justify-between items-start mb-3">
                    <h3 className={`text-lg font-bold pr-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {tip.title}
                    </h3>
                    {tip.totalLiked > 30 && (
                      <div className="flex items-center gap-1">
                        <FaFire className="text-orange-500 text-xs" />
                      </div>
                    )}
                  </div>

                  <div className="mb-4">
                    <div className="flex items-center gap-1.5">
                      <span className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                        Category:
                      </span>
                      <div className="flex items-center gap-1">
                        {getCategoryIcon(tip.category)}
                        <span className={`text-xs font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                          {tip.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className={`text-sm mb-4 line-clamp-2 ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {tip.shortDescription || tip.description?.substring(0, 80) + '...' || 'Discover expert gardening tips...'}
                  </p>

                  <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Link
                      to={`/tips/${tip._id}`}
                      className={`inline-flex items-center gap-2 text-sm font-medium transition-all ${theme === 'dark'
                        ? 'text-lime-400 hover:text-lime-300'
                        : 'text-lime-600 hover:text-lime-700'}`}
                    >
                      <span>View Details</span>
                      <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-10">
          <Link to="/browseTips">
            <button className={`px-6 py-3 rounded-full font-bold transition-all ${theme === 'dark'
              ? 'bg-lime-700 hover:bg-lime-600 text-white'
              : 'bg-lime-600 hover:bg-lime-700 text-white'} shadow-sm hover:shadow-md`}>
              Explore More Gardening Tips
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopGardeningTips;