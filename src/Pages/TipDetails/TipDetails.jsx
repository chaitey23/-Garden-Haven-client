import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router';

const TipDetails = () => {
    const {id} = useParams();
    const [tip,setTip] = useState(null);
    useEffect(()=>{
        fetch(`http://localhost:3000/tips/${id}`)
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
    return (
         <div className="max-w-3xl mx-auto p-6 bg-white shadow rounded-lg mt-6">
      <img src={tip.image} alt={tip.title} className="w-full h-60 object-cover rounded mb-4" />
      <Link to='/browseTips'>
            <a href="">back to All tips</a>
            </Link>
      <h2 className="text-3xl font-bold text-lime-600 mb-2">{tip.title}</h2>
      <p className="mb-2"><strong>Category:</strong> {tip.category}</p>
      <p className="mb-2"><strong>Difficulty:</strong> {tip.difficulty}</p>
      <p className="mb-2"><strong>Plant Type:</strong> {tip.plantType}</p>
      <p className="mb-2"><strong>Author:</strong> {tip.userName}</p>
      <p className="mb-4"><strong>Description:</strong> {tip.description}</p>
      <p><strong>Likes:</strong> {tip.totalLiked}</p>
    </div>
    );
};

export default TipDetails;