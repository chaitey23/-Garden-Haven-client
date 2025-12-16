import React, { useContext, useEffect, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router';
import { ThemeContext } from '../../Context/ThemeContext';
import { FaCalendarAlt, FaVenusMars, FaStar, FaMapMarkerAlt, FaLeaf, FaLightbulb } from 'react-icons/fa';

const Gardeners = () => {
    const [gardeners, setGardeners] = useState([]);
    const [loading, setLoading] = useState(true);
    const { theme } = useContext(ThemeContext);

    useEffect(() => {
        fetch('https://gardening-hub-server-ten.vercel.app/gardeners')
            .then(res => res.json())
            .then(data => {
                setGardeners(data);
                setLoading(false);
            })
    }, []);

    if (loading) {
        return (
            <div className='flex justify-center items-center h-[50vh]'>
                <div className="relative">
                    <div className="w-20 h-20 border-4 border-lime-200 rounded-full"></div>
                    <div className="w-20 h-20 border-4 border-lime-600 rounded-full animate-spin absolute top-0 left-0 border-t-transparent"></div>
                </div>
            </div>
        );
    }

    return (
        <div className='mt-12 px-4'>
            <h1 className='text-3xl font-bold text-center text-lime-600 mb-12'>
                Meet Our <span className='text-green-500'>Featured Gardeners</span>
            </h1>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {gardeners.map((gardener) => (
                    <Slide
                        key={gardener._id}
                        cascade
                        direction="up"
                        duration={800}
                        triggerOnce
                    >
                        <div className='group relative'>
                            {/* Card Container */}
                            <div className='relative bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700'>


                                <div className='relative pt-8 pb-4 px-6'>

                                    <div className='absolute top-0 left-0 right-0 h-24 bg-gradient-to-r from-lime-400 to-emerald-500 opacity-10 group-hover:opacity-20 transition-opacity duration-500'></div>


                                    <div className='relative mx-auto w-32 h-32 mb-6'>

                                        <div className='absolute inset-0 rounded-full border-4 border-lime-100 dark:border-gray-700'></div>


                                        <div className='absolute inset-0 rounded-full border-4 border-lime-500 opacity-0 group-hover:opacity-100 animate-spin-slow border-t-transparent transition-opacity duration-500'></div>


                                        <img
                                            src={gardener.image}
                                            alt={gardener.name}
                                            className='w-full h-full rounded-full object-cover p-1 border-4 border-white dark:border-gray-800 shadow-lg'
                                        />


                                        <div className='absolute bottom-2 right-2 w-10 h-10 bg-lime-500 rounded-full flex items-center justify-center shadow-lg'>
                                            <FaLeaf className='text-white text-sm' />
                                        </div>
                                    </div>


                                    <div className='text-center mb-4'>
                                        <h3 className='text-xl font-bold text-gray-800 dark:text-white group-hover:text-lime-600 transition-colors duration-300'>
                                            {gardener.name}
                                        </h3>
                                        <p className='text-sm text-lime-600 font-medium mt-1'>
                                            {gardener.speciality}
                                        </p>
                                    </div>
                                </div>


                                <div className='px-6 pb-6'>
                                    <div className='grid grid-cols-2 gap-4 mb-6'>
                                        <div className='flex items-center space-x-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg group-hover:bg-lime-50 dark:group-hover:bg-lime-900/20 transition-colors duration-300'>
                                            <div className='w-10 h-10 bg-lime-100 dark:bg-lime-900/30 rounded-lg flex items-center justify-center'>
                                                <FaCalendarAlt className='text-lime-600' />
                                            </div>
                                            <div>
                                                <p className='text-sm text-gray-500 dark:text-gray-400'>Age</p>
                                                <p className='font-semibold text-gray-800 dark:text-white'>{gardener.age} years</p>
                                            </div>
                                        </div>

                                        <div className='flex items-center space-x-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg group-hover:bg-lime-50 dark:group-hover:bg-lime-900/20 transition-colors duration-300'>
                                            <div className='w-10 h-10 bg-lime-100 dark:bg-lime-900/30 rounded-lg flex items-center justify-center'>
                                                <FaVenusMars className='text-lime-600' />
                                            </div>
                                            <div>
                                                <p className='text-sm text-gray-500 dark:text-gray-400'>Gender</p>
                                                <p className='font-semibold text-gray-800 dark:text-white'>{gardener.gender}</p>
                                            </div>
                                        </div>

                                        <div className='flex items-center space-x-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg group-hover:bg-lime-50 dark:group-hover:bg-lime-900/20 transition-colors duration-300'>
                                            <div className='w-10 h-10 bg-lime-100 dark:bg-lime-900/30 rounded-lg flex items-center justify-center'>
                                                <FaStar className='text-lime-600' />
                                            </div>
                                            <div>
                                                <p className='text-sm text-gray-500 dark:text-gray-400'>Tips</p>
                                                <p className='font-semibold text-gray-800 dark:text-white'>{gardener.totalTips}</p>
                                            </div>
                                        </div>

                                        <div className='flex items-center space-x-3 bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg group-hover:bg-lime-50 dark:group-hover:bg-lime-900/20 transition-colors duration-300'>
                                            <div className='w-10 h-10 bg-lime-100 dark:bg-lime-900/30 rounded-lg flex items-center justify-center'>
                                                <FaMapMarkerAlt className='text-lime-600' />
                                            </div>
                                            <div>
                                                <p className='text-sm text-gray-500 dark:text-gray-400'>Location</p>
                                                <p className='font-semibold text-gray-800 dark:text-white truncate'>{gardener.location}</p>
                                            </div>
                                        </div>
                                    </div>


                                    <div className='mb-6'>
                                        <p className='text-sm text-gray-500 dark:text-gray-400 mb-2'>Expertise Areas:</p>
                                        <div className='flex flex-wrap gap-2'>
                                            {gardener.speciality.split(',').slice(0, 3).map((skill, idx) => (
                                                <span
                                                    key={idx}
                                                    className='px-3 py-1 bg-lime-100 dark:bg-lime-900/30 text-lime-700 dark:text-lime-300 text-xs font-medium rounded-full border border-lime-200 dark:border-lime-800'
                                                >
                                                    {skill.trim()}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                    <Link to={`exploreGardeners`}>
                                        <button className='w-full py-3 bg-gradient-to-r from-lime-500 to-emerald-500 hover:from-lime-600 hover:to-emerald-600 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-[1.02] shadow-md hover:shadow-lg flex items-center justify-center space-x-2'>
                                            <FaLightbulb className='text-sm' />
                                            <span>View Profile</span>
                                        </button>
                                    </Link>
                                </div>

                                {/* Corner Decoration */}
                                <div className='absolute top-0 right-0 w-16 h-16 overflow-hidden'>
                                    <div className='absolute -top-8 -right-8 w-16 h-16 bg-lime-500 opacity-10 group-hover:opacity-20 transition-opacity duration-500 rotate-45'></div>
                                </div>
                            </div>
                        </div>
                    </Slide>
                ))}
            </div>

            <Link to='/exploreGardeners'>
                <button className="btn bg-lime-600 text-white rounded-4xl mx-auto mt-15 block">Explore All Gardeners</button>
            </Link>
        </div>
    );
};

export default Gardeners;