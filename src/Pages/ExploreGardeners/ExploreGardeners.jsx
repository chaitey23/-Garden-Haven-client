import React, { useEffect, useState } from 'react';
const ExploreGardeners = () => {
    const [AllGardeners,setAllGardeners]= useState([]);
useEffect(()=>{
    fetch('http://localhost:3000/exploreGardeners')
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setAllGardeners(data)
    })
},[])

    return (
       <div>
        <h1 className='text-4xl font-bold text-center text-lime-500 mb-20 mt-12'>Meet Our Community Gardeners</h1>
         <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
       {
        AllGardeners.map(allGardener=> <div key={allGardener._id} className='bg-white rounded-2xl shadow-lg p-6 hover:shadow-2xl transition duration-300'>
                    <div className='w-32 h-32 mx-auto mb-4 rounded-full ring-4 ring-green-500 overflow-hidden'>
              <img
                src={allGardener.image}
                alt={allGardener.name}
                className='w-full h-full object-cover'
              />
            </div>
                    <h3 className='text-xl font-semibold mb-2'>{allGardener.name}</h3>
                    <p className="text-gray-700 mb-1"><strong>Speciality:</strong>{allGardener.speciality}</p>
                    <p className='text-gray-700'><strong>Location:</strong>{allGardener.location}</p>
                </div>)
       }
        </div>
       </div>
    );
};

export default ExploreGardeners;