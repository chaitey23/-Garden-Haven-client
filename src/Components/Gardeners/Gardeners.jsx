import React, { useEffect, useState } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import { Link } from 'react-router';

const Gardeners = () => {
    const [gardeners, setGardeners] = useState([])
    const [loading,setLoading] = useState(true)
    useEffect(() => {
        fetch('http://localhost:3000/gardeners')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setGardeners(data);
                setLoading(false)
            })
    }, [])
     if (loading) {
    return (
      <div className='flex justify-center items-center h-[50vh]'>
        <span className="loading loading-spinner loading-xl text-lime-600"></span>
      </div>
    );
  }
    return (
        <div className='mt-12 px-4'>
            <h1 className='text-3xl font-bold text-center text-lime-600 mb-12'> Meet Our <span className='text-green-500'>Featured Gardeners</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {gardeners.map((gardener) => (
                    <Slide
                        key={gardener._id}
                        cascade
                        direction="up"
                        duration={1500}
                        damping={0.20}
                        triggerOnce>
                        <div
                            className='bg-white rounded-2xl p-6 border border-transparent hover:border-lime-500 shadow-md hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-1'
                        >
                            <div className='w-32 h-32 mx-auto mb-4 rounded-full ring-4 ring-green-500 overflow-hidden'>
                                <img
                                    src={gardener.image}
                                    alt={gardener.name}
                                    className='w-full h-full object-cover'
                                />
                            </div>
                            <h3 className='text-xl font-semibold mb-2 text-center text-lime-700'>{gardener.name}</h3>

                            <div className='flex justify-center gap-4 mb-2 text-gray-700 text-sm'>
                                <p><strong>Age:</strong> {gardener.age}</p>
                                <p><strong>Gender:</strong> {gardener.gender}</p>
                            </div>

                            <p className='text-gray-700 text-center mb-1'><strong>Speciality:</strong> {gardener.speciality}</p>
                            <p className='text-gray-700 text-center mb-1'><strong>Location:</strong> {gardener.location}</p>
                            <p className='text-gray-700 text-center'><strong>Total Tips:</strong> {gardener.totalTips}</p>
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