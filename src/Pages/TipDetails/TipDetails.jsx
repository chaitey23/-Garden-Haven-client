import React, { useEffect, useState } from 'react';
import { BiLike } from 'react-icons/bi';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router';

const TipDetails = () => {
    const {id} = useParams();
    const [tip,setTip] = useState(null);
    useEffect(()=>{
        fetch(`https://gardening-hub-server-ten.vercel.app/tips/${id}`)
        .then(res => res.json())
        .then(data => {
            console.log(data);
            setTip(data)
        })
    },[id])
    if(!tip){
        return(
                  <div className="flex justify-center items-center h-[50vh]">
        <span className="loading loading-spinner text-lime-600 loading-lg"></span>
      </div>
        )
    }
    const handleLike = () => {
        fetch(`https://gardening-hub-server-ten.vercel.app/tips/like/${id}`,{
            method:"PATCH",
            headers:{
                'content-type' : "application/json"
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if (data.modifiedCount >0) {
                setTip(prev => ({...prev, totalLiked: prev.totalLiked + 1}))
            }
        })
    }
    return (
         <div className="max-w-3xl mx-auto p-6 bg-green-50 shadow-sm rounded-lg mt-6">
      <img src={tip.image} alt={tip.title} className="w-full h-60 object-cover rounded mb-4" />
      <Link to='/browseTips' className='flex gap-2 text-blue-500 items-center'>
      <FaArrowLeft />
            <a href="">back to All tips</a>
            </Link>
      <h2 className="text-3xl font-bold text-lime-600 mb-2">{tip.title}</h2>
      <p className="mb-2"><strong>Category:</strong> {tip.category}</p>
      <div className='flex gap-3 items-center'>
        <p className="mb-2"><strong>Difficulty:</strong> {tip.difficulty}</p>
        <p className='border p-1.5 rounded-xl'><strong>Likes:</strong> {tip.totalLiked}</p>
      </div>
      <p className="mb-2"><strong>Plant Type:</strong> {tip.plantType}</p>
      <p className="mb-2"><strong>Author:</strong> {tip.userName}</p>
      <p className="mb-4"><strong>Description:</strong> {tip.description}</p>
      <div className='flex items-center gap-2 mt-4 justify-end p-3'>
  <button
    onClick={handleLike}
    className='px-4 py-1 bg-blue-400 text-white rounded shadow text-sm flex items-center gap-2 cursor-pointer'
  >
   <BiLike />{tip.totalLiked} Like
  </button>
</div>

    </div>
    );
};

export default TipDetails;