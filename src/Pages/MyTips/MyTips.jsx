import React, { useEffect, useState } from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { FaRegEdit } from 'react-icons/fa';
import { RiDeleteBin5Line } from 'react-icons/ri';
import { Link, useLocation } from 'react-router';
import Swal from 'sweetalert2';

const MyTips = () => {
  const { user } = React.useContext(AuthContext);
  const [myTips, setMyTips] = useState([]);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const refresh = query.get('refresh'); 

  useEffect(() => {
    if (user?.email) {
      fetch(`http://localhost:3000/tips?email=${user.email}`)
        .then(res => res.json())
        .then(data => setMyTips(data));
    }
  }, [user?.email, refresh]); 
  const handleDelete = async (id) => {
    const result = await Swal.fire({
    title: 'Are you sure?',
    text: "You won't be able to revert this!",
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Yes, delete it!'
  });
  if(result.isConfirmed){
    try{
      const res = await fetch(`http://localhost:3000/tips/${id}`,{
        method:"DELETE",
      })
     if(!res.ok){
      throw new Error("Failed to delete tip")
     }
     setMyTips(prev => prev.filter(tip => tip._id !== id))
     Swal.fire("Deleted!", 'Your tip has been deleted.', 'success')
    }
    catch (err) {
      console.error(err);
      Swal.fire("Error",'Failed to delete. Try again.', 'error')
    }
  }
  };
  return (
    <div className="p-4 max-w-7xl mx-auto w-full">
      <h1 className="text-3xl font-bold text-lime-600 text-center mb-6">
        My Shared Tips
      </h1>
      {myTips.length === 0 ? (
        <p className="text-center text-gray-500">No tips shared yet.</p>
      ) : (
        <div className="overflow-x-auto w-full">
          <table className="min-w-[800px] w-full bg-white text-sm rounded-lg">
            <thead className="bg-lime-500 text-white">
              <tr>
                <th className="py-3 px-4 uppercase font-semibold">Image</th>
                <th className="py-3 px-4 uppercase font-semibold">Title</th>
                <th className="py-3 px-4 uppercase font-semibold">Difficulty</th>
                <th className="py-3 px-4 uppercase font-semibold">Category</th>
                <th className="py-3 px-4 uppercase font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {myTips.map(tip => (
                <tr
                  key={tip._id}
                  className=" border-b hover:bg-lime-50 transition duration-200"
                >
                  <td className="py-3 px-4">
                    <img
                      src={tip?.image}
                      alt={tip?.title}
                      className="w-20 h-12 object-cover rounded"
                    />
                  </td>
                  <td className="py-3 px-4">{tip.title}</td>
                  <td className="py-3 px-4">
                    <span
                      className={`
                      px-2 py-1 rounded-full text-xs font-semibold
                      ${
                        tip.difficulty === 'Easy'
                          ? 'bg-green-200 text-green-800'
                          : ''
                      }
                      ${
                        tip.difficulty === 'Medium'
                          ? 'bg-yellow-200 text-yellow-800'
                          : ''
                      }
                      ${
                        tip.difficulty === 'Hard'
                          ? 'bg-red-200 text-red-800'
                          : ''
                      }
                    `}
                    >
                      {tip.difficulty}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className="bg-black text-white text-xs rounded-full px-2 py-1">
                      {tip.category}
                    </span>
                  </td>

                  <td className="py-3 px-4 flex items-center gap-3">
                    <Link to={`/editTip/${tip._id}`}>
                      <button className="flex items-center gap-1 text-blue-500 hover:text-blue-700 text-sm cursor-pointer">
                        <FaRegEdit className="text-base" />
                        Edit
                      </button>
                    </Link>
                    <button onClick={()=>handleDelete(tip._id)} className="flex items-center gap-1 text-red-500 hover:text-red-700 text-sm cursor-pointer">
                      <RiDeleteBin5Line />
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyTips;
