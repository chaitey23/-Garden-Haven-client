import React, { useEffect, useState } from 'react';

const Gardeners = () => {
    const [gardeners,setGardeners] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/gardeners')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setGardeners(data)
        })
    },[])
    return (
        <div className='mt-12 px-4'>
            <h1 className='text-3xl font-bold text-center text-lime-700 mb-12'> Meet Our <span className='text-green-500'>Featured Gardeners</span></h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
               {gardeners.map(gardener => (
                <div key={gardener._id} className='bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300'>
                    <div className='w-32 h-32 mx-auto mb-4 rounded-full ring-4 ring-green-500 overflow-hidden'>
              <img
                src={gardener.image}
                alt={gardener.name}
                className='w-full h-full object-cover'
              />
            </div>
                    <h3 className='text-xl font-semibold mb-2'>{gardener.name}</h3>
                    <p className="text-gray-700 mb-1"><strong>Speciality:</strong>{gardener.speciality}</p>
                    <p className='text-gray-700'><strong>Location:</strong>{gardener.location}</p>
                </div>
               ))}
            </div>
        </div>
    );
};

export default Gardeners;