import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router';

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [loading,setLoading] = useState(true);
  const [imageLoaded,setImageLoaded] = useState({})

  useEffect(() => {
    fetch("http://localhost:3000/tips")
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setTips(data);
        setLoading(false)
      });
  }, []);
  if(loading){
    return (
      <div className='flex justify-center items-center h-[50vh]'>
<span className="loading loading-spinner loading-xl text-lime-600"></span>
      </div>
    )
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-lime-600 text-center">Browse Gardening Tips</h1>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-lg shadow-md">
          <thead className="bg-lime-500 text-white">
            <tr>
              <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Image</th>
              <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Title</th>
              <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Category</th>
              <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {tips.map((tip, index) => (
              <tr key={index} className="border-b hover:bg-lime-50 transition duration-200">
                <td className="py-3 px-4">
                  <div className='relative w-20 h-12'>
                    {
                      !imageLoaded[tip._id] && (
                         <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse rounded"></div>
                      )
                    }
   <img
                    src={tip.image}
                    alt={tip.title}
                    className={`w-20 h-12 object-cover rounded transition-all duration-300 ${
                        imageLoaded[tip._id] ? 'opacity-100' : 'opacity-0'
                      }`}
                      onLoad={()=> setImageLoaded(prev => ({...prev,[tip._id]:true}))}
                      loading='lazy'
                  />
                  </div>
                </td>
                <td className="py-3 px-4">{tip.title}</td>
                <td className="py-3 px-4">{tip.category}</td>
                <td className="py-3 px-4">
              <Link to={`/tips/${tip._id}`}>
                  <button className="px-3 py-1 rounded text-xl cursor-pointer flex items-center gap-4 text-blue-500">
                   <FaEye></FaEye>
                   <span className='text-sm'>View</span>
                  </button>
              </Link>

                </td>
              </tr>
            ))}
            {tips.length === 0 && (
              <tr>
                <td colSpan="4" className="text-center py-6 text-gray-500">
                  No tips found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BrowseTips;
