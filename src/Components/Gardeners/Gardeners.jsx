import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../Context/ThemeContext';
import {
    FaCalendarAlt,
    FaVenusMars,
    FaStar,
    FaMapMarkerAlt,
    FaLeaf,
    FaUserTie,
    FaArrowRight
} from 'react-icons/fa';

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
                <span className="loading loading-spinner loading-lg text-lime-600"></span>
            </div>
        );
    }

    return (
        <div className='mt-32 px-4'>
            <div className='text-center mb-12'>
                <h2 className='text-4xl font-bold text-lime-600 mb-4'>
                    Our Expert Gardeners
                </h2>
                <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    Meet our passionate gardening community
                </p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {gardeners.map((gardener) => (
                    <div
                        key={gardener._id}
                        className='group relative'
                    >
                        <div className={`relative rounded-xl overflow-hidden transition-all duration-300 ${theme === 'dark'
                            ? 'bg-gray-800 hover:shadow-2xl hover:shadow-emerald-900/30'
                            : 'bg-white hover:shadow-2xl hover:shadow-lime-100 border border-gray-100'
                            }`}
                        >
                            <div className={`p-6 ${theme === 'dark' ? 'bg-emerald-900/20' : 'bg-lime-50'}`}>
                                <div className='flex items-center gap-4'>
                                    <div className='relative'>
                                        <img
                                            src={gardener.image}
                                            alt={gardener.name}
                                            className='w-20 h-20 rounded-full object-cover border-4 border-white dark:border-gray-700'
                                        />
                                        <div className='absolute -bottom-1 -right-1 w-8 h-8 bg-lime-500 rounded-full flex items-center justify-center'>
                                            <FaLeaf className='text-white text-xs' />
                                        </div>
                                    </div>


                                    <div className='flex-1'>
                                        <h3 className={`text-xl font-bold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                            {gardener.name}
                                        </h3>
                                        <div className='flex items-center gap-2 mt-1'>
                                            <FaUserTie className='text-lime-600 text-sm' />
                                            <p className='text-sm text-lime-600 font-medium'>
                                                {gardener.speciality}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className='p-6'>
                                <div className='grid grid-cols-2 gap-4 mb-6'>
                                    <div className='flex items-center gap-3'>
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                                            }`}>
                                            <FaCalendarAlt className='text-lime-600' />
                                        </div>
                                        <div>
                                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                Age
                                            </p>
                                            <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                                {gardener.age} years
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-3'>
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                                            }`}>
                                            <FaVenusMars className='text-lime-600' />
                                        </div>
                                        <div>
                                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                Gender
                                            </p>
                                            <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                                {gardener.gender}
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-3'>
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                                            }`}>
                                            <FaStar className='text-lime-600' />
                                        </div>
                                        <div>
                                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                Tips
                                            </p>
                                            <p className={`font-semibold ${theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                                                {gardener.totalTips}
                                            </p>
                                        </div>
                                    </div>

                                    <div className='flex items-center gap-3'>
                                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${theme === 'dark' ? 'bg-gray-700' : 'bg-gray-100'
                                            }`}>
                                            <FaMapMarkerAlt className='text-lime-600' />
                                        </div>
                                        <div>
                                            <p className={`text-xs ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                                                Location
                                            </p>
                                            <p className={`font-semibold text-sm truncate ${theme === 'dark' ? 'text-white' : 'text-gray-800'
                                                }`}>
                                                {gardener.location}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className='mb-6'>
                                    <p className={`text-sm font-medium mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                                        }`}>
                                        Expertise:
                                    </p>
                                    <div className='flex flex-wrap gap-2'>
                                        {gardener.speciality.split(',').slice(0, 3).map((skill, idx) => (
                                            <span
                                                key={idx}
                                                className={`px-3 py-1 text-xs font-medium rounded-full ${theme === 'dark'
                                                    ? 'bg-emerald-900/40 text-emerald-300'
                                                    : 'bg-lime-100 text-lime-700'
                                                    }`}
                                            >
                                                {skill.trim()}
                                            </span>
                                        ))}
                                    </div>
                                </div>


                                <Link to={`/exploreGardeners`}>
                                    <button className={`w-full py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-all ${theme === 'dark'
                                        ? 'bg-lime-700 hover:bg-lime-600 text-white'
                                        : 'bg-lime-600 hover:bg-lime-700 text-white'
                                        }`}>
                                        View Profile
                                        <FaArrowRight />
                                    </button>
                                </Link>
                            </div>


                            <div className='absolute inset-0 pointer-events-none overflow-hidden rounded-xl'>

                                <div className={`absolute top-0 left-0 right-0 h-0.5 ${theme === 'dark' ? 'bg-emerald-500' : 'bg-lime-500'} 
                                    transform md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-300 origin-left`}
                                ></div>

                                <div className={`absolute top-0 right-0 bottom-0 w-0.5 ${theme === 'dark' ? 'bg-emerald-500' : 'bg-lime-500'} 
                                    transform md:scale-y-0 md:group-hover:scale-y-100 transition-transform duration-300 origin-top md:group-hover:delay-75`}
                                ></div>

                                <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${theme === 'dark' ? 'bg-emerald-500' : 'bg-lime-500'} 
                                    transform md:scale-x-0 md:group-hover:scale-x-100 transition-transform duration-300 origin-right md:group-hover:delay-150`}
                                ></div>

                                <div className={`absolute top-0 left-0 bottom-0 w-0.5 ${theme === 'dark' ? 'bg-emerald-500' : 'bg-lime-500'} 
                                    transform md:scale-y-0 md:group-hover:scale-y-100 transition-transform duration-300 origin-bottom md:group-hover:delay-225`}
                                ></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className='text-center mt-12'>
                <Link to='/exploreGardeners'>
                    <button className={`px-8 py-3 rounded-full font-bold transition-all ${theme === 'dark'
                        ? 'bg-lime-700 hover:bg-lime-600 text-white'
                        : 'bg-lime-600 hover:bg-lime-700 text-white'
                        }`}>
                        Explore All Gardeners
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Gardeners;