// import React, { useContext, useEffect, useState } from 'react';
// import { FaArrowRight } from 'react-icons/fa';
// import { Link } from 'react-router';
// import { motion } from 'framer-motion';
// import { ThemeContext } from '../Context/ThemeContext';
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.5,
//     },
//   },
// };
// const cardVariants = {
//   hidden: { opacity: 0, y: 30 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       duration: 0.5,
//       ease: 'easeOut',
//     },
//   },
// };

// const TopGardeningTips = () => {
//   const [tips, setTips] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const { theme } = useContext(ThemeContext);
//   console.log(theme);
//   useEffect(() => {
//     fetch("https://gardening-hub-server-ten.vercel.app/tips?status=public")
//       .then(res => res.json())
//       .then(data => {
//         setTips(data.slice(0, 6));
//         setLoading(false);
//         console.log(data);

//       });
//   }, []);

//   if (loading) {
//     return (
//       <div className='flex justify-center items-center h-[50vh]'>
//         <span className="loading loading-spinner loading-xl text-lime-600"></span>
//       </div>
//     );
//   }

//   return (
//     <div className='mt-16 px-4'>
//       <h2 className='text-3xl font-bold text-center text-lime-600 mb-8'>
//         Top Gardening Tips 🌿
//       </h2>

//       <motion.div
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         viewport={{ once: true, amount: 0.3 }}
//         className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
//       >
//         {tips.map((tip) => (
//           <motion.div
//             key={tip._id}
//             variants={cardVariants}
//             className='bg-base-100 shadow-md rounded-lg p-4 hover:shadow-lg transition-all'
//           >
//             <img
//               src={tip.image}
//               alt={tip.title}
//               loading='lazy'
//               className='h-40 w-full object-cover rounded mb-3'
//             />
//             <div className='flex justify-between'>
//               <h3 className='text-xl font-semibold text-lime-700'>{tip.title}</h3>
//               <p className='text-sm text-lime-700 font-semibold'>Liked:{tip.totalLiked}</p>
//             </div>
//             <p className='text-sm text-base-content  mb-2'>{tip.category}</p>
//             <Link
//               to={`/tips/${tip._id}`}
//               className='text-blue-500 hover:underline text-sm flex items-center gap-2'
//             >
//               See More <FaArrowRight />
//             </Link>
//           </motion.div>
//         ))}
//       </motion.div>

//       <div className='text-center mt-8'>
//         <Link to="/browseTips">
//           <button className='btn bg-lime-600 text-white rounded-4xl mx-auto mt-15 block'>Explore More</button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default TopGardeningTips;
import React, { useEffect, useState } from 'react';
import {
  FaArrowRight,
  FaHeart,
  FaLeaf,
  FaSeedling,
  FaCarrot,

  FaAppleAlt,
  FaRecycle,
  FaSprayCan,
  FaTree,
  FaUserFriends,
  FaUsers,
  FaUserCircle,
  FaUser
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const TopGardeningTips = () => {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);

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
      vegetable: <FaCarrot className="text-emerald-600 text-base" />,
      herb: <FaLeaf className="text-green-500 text-base" />,
      fruit: <FaAppleAlt className="text-red-500 text-base" />,
      organic: <FaRecycle className="text-lime-600 text-base" />,
      fertilizer: <FaSprayCan className="text-amber-600 text-base" />,
      tree: <FaTree className="text-emerald-700 text-base" />,

      // ✅ সঠিক আইকন নেম:
      beginner: <FaSeedling className="text-blue-500 text-base" />,
      advanced: <FaTree className="text-emerald-800 text-base" />,
      indoor: <FaLeaf className="text-teal-500 text-base" />,
      outdoor: <FaTree className="text-green-700 text-base" />,
      composting: <FaRecycle className="text-brown-500 text-base" />,

      // ✅ যদি "follower" ক্যাটাগরি থাকে:
      follower: <FaUserFriends className="text-blue-600 text-base" />,
      users: <FaUsers className="text-purple-600 text-base" />,
      profile: <FaUserCircle className="text-indigo-600 text-base" />,
      general: <FaUser className="text-gray-600 text-base" />
    };

    return iconMap[category?.toLowerCase()] ||
      <FaSeedling className="text-emerald-600 text-base" />;
  };

  // Category to Color mapping
  const getCategoryColor = (category) => {
    const colorMap = {
      vegetable: 'bg-emerald-50 text-emerald-700 border-emerald-200',
      flower: 'bg-pink-50 text-pink-700 border-pink-200',
      herb: 'bg-green-50 text-green-700 border-green-200',
      fruit: 'bg-red-50 text-red-700 border-red-200',
      organic: 'bg-lime-50 text-lime-700 border-lime-200',
      fertilizer: 'bg-amber-50 text-amber-700 border-amber-200',
      tree: 'bg-emerald-50 text-emerald-800 border-emerald-300',
      beginner: 'bg-blue-50 text-blue-700 border-blue-200',
      advanced: 'bg-purple-50 text-purple-700 border-purple-200',
      indoor: 'bg-teal-50 text-teal-700 border-teal-200',
      outdoor: 'bg-green-50 text-green-800 border-green-300',
      composting: 'bg-yellow-50 text-yellow-800 border-yellow-200',

      // ✅ ফলোয়ার/ইউজার রিলেটেড:
      follower: 'bg-blue-50 text-blue-700 border-blue-200',
      users: 'bg-purple-50 text-purple-700 border-purple-200',
      profile: 'bg-indigo-50 text-indigo-700 border-indigo-200',
      general: 'bg-gray-50 text-gray-700 border-gray-200'
    };

    return colorMap[category?.toLowerCase()] ||
      'bg-gray-50 text-gray-700 border-gray-200';
  };

  // Format category name properly
  const formatCategoryName = (category) => {
    if (!category) return 'Gardening';

    // Remove special characters and capitalize
    const formatted = category
      .replace(/[^a-zA-Z]/g, ' ')
      .replace(/\b\w/g, char => char.toUpperCase())
      .trim();

    return formatted || 'General';
  };

  if (loading) {
    return (
      <div className='flex flex-col justify-center items-center min-h-[400px]'>
        <div className="relative">
          <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-600 rounded-full animate-spin"></div>
          <FaSeedling className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-emerald-600 text-xl" />
        </div>
        <p className="mt-4 text-emerald-700 font-medium">Growing tips for you...</p>
      </div>
    );
  }

  return (
    <div className='py-16 px-4 md:px-8 bg-gradient-to-b from-white to-emerald-50/30'>
      <div className='max-w-7xl mx-auto'>
        {/* Header Section */}
        <div className='text-center mb-12'>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className='inline-flex items-center gap-3 mb-4'
          >
            <div className='w-12 h-12 rounded-full bg-gradient-to-br from-emerald-100 to-lime-100 flex items-center justify-center shadow-sm'>
              <FaLeaf className='text-2xl text-emerald-600' />
            </div>
            <h2 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-emerald-600 via-emerald-500 to-lime-600 bg-clip-text text-transparent'>
              Top Gardening Tips
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className='text-gray-600 max-w-2xl mx-auto text-lg mb-2'
          >
            Expert advice to grow your green space
          </motion.p>
          <div className='w-24 h-1 bg-gradient-to-r from-emerald-400 to-lime-400 mx-auto rounded-full'></div>
        </div>

        {/* Tips Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
          {tips.map((tip, index) => (
            <motion.div
              key={tip._id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ y: -6 }}
              className='group cursor-pointer'
            >
              <div className='bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-xl hover:shadow-emerald-100/40 h-full flex flex-col'>

                {/* Image Container with Overlay */}
                <div className='relative h-48 overflow-hidden'>
                  <img
                    src={tip.image || 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=400&h=300&fit=crop'}
                    alt={tip.title}
                    loading='lazy'
                    className='w-full h-full object-cover transition-transform duration-700 group-hover:scale-110'
                  />
                  <div className='absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent' />

                  {/* Category Badge */}
                  <div className='absolute top-3 left-3'>
                    <div className={`flex items-center gap-2 px-3 py-1.5 rounded-full border ${getCategoryColor(tip.category)} backdrop-blur-sm shadow-sm`}>
                      <span className="text-xs">
                        {getCategoryIcon(tip.category)}
                      </span>
                      <span className="text-xs font-semibold">
                        {formatCategoryName(tip.category)}
                      </span>
                    </div>
                  </div>

                  {/* Like Count with Animation */}
                  <motion.div
                    className='absolute top-3 right-3'
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className='flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-2.5 py-1.5 rounded-full shadow-sm'>
                      <FaHeart className='text-pink-500 text-xs' />
                      <span className='font-semibold text-gray-800 text-xs'>
                        {tip.totalLiked || 0}
                      </span>
                    </div>
                  </motion.div>
                </div>

                {/* Content */}
                <div className='p-5 flex-1 flex flex-col'>
                  <h3 className='text-lg font-bold text-gray-800 mb-2 group-hover:text-emerald-700 transition-colors line-clamp-2 leading-tight'>
                    {tip.title}
                  </h3>

                  <p className='text-gray-600 text-sm mb-4 line-clamp-2 flex-1'>
                    {tip.shortDescription ||
                      (tip.description && tip.description.substring(0, 80) + '...') ||
                      'Learn expert gardening techniques'}
                  </p>

                  {/* Bottom Section */}
                  <div className='flex items-center justify-between mt-4 pt-4 border-t border-gray-100'>
                    <div className='flex items-center gap-2'>
                      <div className='w-7 h-7 rounded-full bg-gradient-to-br from-emerald-100 to-lime-100 flex items-center justify-center'>
                        <FaSeedling className='text-emerald-600 text-xs' />
                      </div>
                      <span className='text-xs text-gray-500 font-medium'>Gardening Hub</span>
                    </div>

                    <Link
                      to={`/tips/${tip._id}`}
                      className='inline-flex items-center gap-1.5 text-sm px-3 py-1.5 bg-emerald-50 text-emerald-700 rounded-lg font-medium hover:bg-emerald-100 transition-all group/link'
                    >
                      View Details
                      <FaArrowRight className='transition-transform group-hover/link:translate-x-1 text-xs' />
                    </Link>
                  </div>
                </div>

                {/* Hover Effect Indicator */}
                <div className='absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-emerald-400 to-lime-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300' />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Explore More Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.4 }}
          viewport={{ once: true }}
          className='text-center mt-12'
        >
          <Link to="/browseTips">
            <button className='group relative inline-flex items-center gap-2.5 px-6 py-3 bg-gradient-to-r from-emerald-500 to-lime-500 text-white rounded-full font-bold text-base hover:shadow-lg hover:shadow-emerald-300/40 transition-all hover:scale-[1.02] active:scale-95'>
              Browse All Gardening Tips
              <FaArrowRight className='group-hover:translate-x-1.5 transition-transform' />
              <span className='absolute inset-0 rounded-full border-2 border-emerald-300/50 animate-ping opacity-0 group-hover:opacity-100 transition-opacity duration-1000'></span>
            </button>
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default TopGardeningTips;