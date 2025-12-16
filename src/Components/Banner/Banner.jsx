import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaPlay } from 'react-icons/fa';
import bannerImg from '../../assets/banner1.jpg';

const Banner = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden bg-[#0a0a0a] flex items-center justify-center">
      <motion.div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${bannerImg})` }}
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.3 }}
        transition={{ duration: 1.5 }}
      />

      <div className="container mx-auto px-4 relative z-20 flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20">

        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative flex items-center justify-center"
        >
          <h1
            className="text-[14rem] md:text-[20rem] lg:text-[30rem] font-black leading-none text-transparent bg-cover bg-center select-none"
            style={{
              backgroundImage: `url(${bannerImg})`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextStroke: '6px rgba(255,255,255,0.8)'
            }}
          >
            G
          </h1>

          <div className="absolute flex flex-col items-center justify-center text-center">

          </div>
        </motion.div>

        <div className="max-w-xl text-center lg:text-left">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1]">
              BEST QUALITY <span className="text-lime-600">GARDEN</span> <br />
              LANDSCAPE SERVICE.
            </h1>
            <p className="text-gray-400 mt-6 text-base md:text-lg leading-relaxed">
              We provide the most responsive and functional IT design for companies and businesses worldwide.
            </p>
          </motion.div>

          <motion.div
            className="mt-10 flex flex-col sm:flex-row items-center lg:items-start gap-8 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <Link to="/contact">
              <button className="bg-lime-600 hover:bg-lime-600 text-white px-10 py-4 rounded-full font-bold flex items-center gap-2 transition-all transform hover:-translate-y-1 shadow-lg shadow-green-900/20">
                GET A QUOTE <span className="text-xl">›</span>
              </button>
            </Link>

            <button className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 rounded-full border border-lime-500/50 flex items-center justify-center text-lime-500 group-hover:bg-lime-500 group-hover:text-white transition-all duration-300">
                <FaPlay size={16} className="ml-1" />
              </div>
              <span className="text-white font-bold tracking-widest text-sm">WATCH VIDEO</span>
            </button>
          </motion.div>
        </div>
      </div>


      <div className="absolute inset-0 pointer-events-none opacity-30">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-lime-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`
            }}
            animate={{ opacity: [0.2, 1, 0.2] }}
            transition={{ duration: 2 + i, repeat: Infinity }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
