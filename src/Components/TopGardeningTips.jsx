import React, { useContext, useEffect, useState } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router';
import { motion } from 'framer-motion';
import { ThemeContext } from '../Context/ThemeContext';
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
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
  console.log(theme);
  useEffect(() => {
    fetch("https://gardening-hub-server-ten.vercel.app/tips?status=public")
      .then(res => res.json())
      .then(data => {
        setTips(data.slice(0, 6));
        setLoading(false);
        console.log(data);

      });
  }, []);

  if (loading) {
    return (
      <div className='flex justify-center items-center h-[50vh]'>
        <span className="loading loading-spinner loading-xl text-lime-600"></span>
      </div>
    );
  }

  return (
    <div className='mt-16 px-4'>
      <h2 className='text-3xl font-bold text-center text-lime-600 mb-8'>
        Top Gardening Tips 🌿
      </h2>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.3 }}
        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'
      >
        {tips.map((tip) => (
          <motion.div
            key={tip._id}
            variants={cardVariants}
            className='bg-base-100 shadow-md rounded-lg p-4 hover:shadow-lg transition-all'
          >
            <img
              src={tip.image}
              alt={tip.title}
              loading='lazy'
              className='h-40 w-full object-cover rounded mb-3'
            />
            <div className='flex justify-between'>
              <h3 className='text-xl font-semibold text-lime-700'>{tip.title}</h3>
              <p className='text-sm text-lime-700 font-semibold'>Liked:{tip.totalLiked}</p>
            </div>
            <p className='text-sm text-base-content  mb-2'>{tip.category}</p>
            <Link
              to={`/tips/${tip._id}`}
              className='text-blue-500 hover:underline text-sm flex items-center gap-2'
            >
              See More <FaArrowRight />
            </Link>
          </motion.div>
        ))}
      </motion.div>

      <div className='text-center mt-8'>
        <Link to="/browseTips">
          <button className='btn bg-lime-600 text-white rounded-4xl mx-auto mt-15 block'>Explore More</button>
        </Link>
      </div>
    </div>
  );
};

export default TopGardeningTips;
