// import React, { useEffect, useState } from 'react';
// import { FaEye } from 'react-icons/fa';
// import { Link } from 'react-router';

// const BrowseTips = () => {
//   const [tips, setTips] = useState([]);
//   const [filteredTips, setFilteredTips] = useState([]);
//   const [searchText, setSearchText] = useState('');
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [selectedDifficulty, setSelectedDifficulty] = useState('');
//   const [loading, setLoading] = useState(true);
//   const [imageLoaded, setImageLoaded] = useState({});

//   useEffect(() => {
//     fetch("https://gardening-hub-server-3uha7eut4-chaiteys-projects.vercel.app/tips")
//       .then(res => res.json())
//       .then(data => {
//         setTips(data);
//         setFilteredTips(data);
//         setLoading(false);
//       });
//   }, []);

//   useEffect(() => {
//     filterTips();
//   }, [searchText, selectedCategory, selectedDifficulty]);

//   const filterTips = () => {
//     let filtered = tips;

//     if (searchText) {
//       const lower = searchText.toLowerCase();
//       filtered = filtered.filter(tip =>
//         tip.title.toLowerCase().includes(lower) ||
//         tip.description.toLowerCase().includes(lower)
//       );
//     }

//     if (selectedCategory) {
//       filtered = filtered.filter(tip => tip.category === selectedCategory);
//     }

//     if (selectedDifficulty) {
//       filtered = filtered.filter(tip => tip.difficulty === selectedDifficulty);
//     }

//     setFilteredTips(filtered);
//   };

//   const uniqueCategories = [...new Set(tips.map(tip => tip.category))];

//   if (loading) {
//     return (
//       <div className='flex justify-center items-center h-[50vh]'>
//         <span className="loading loading-spinner loading-xl text-lime-600"></span>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-7xl mx-auto p-4">
//       <h1 className="text-3xl font-bold mb-6 text-lime-600 text-center">Browse Gardening Tips</h1>
//       <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
//         <input
//           type="text"
//           value={searchText}
//           onChange={(e) => setSearchText(e.target.value)}
//           placeholder="Search by title or description..."
//           className="w-full px-4 py-2 border rounded shadow-sm"
//         />
//         <select
//           value={selectedCategory}
//           onChange={(e) => setSelectedCategory(e.target.value)}
//           className="w-full px-4 py-2 border rounded shadow-sm "
//         >
//           <option value="">All Categories</option>
//           {uniqueCategories.map((cat, i) => (
//             <option key={i} value={cat}>{cat}</option>
//           ))}
//         </select>
//         <select
//           value={selectedDifficulty}
//           onChange={(e) => setSelectedDifficulty(e.target.value)}
//           className="w-full px-4 py-2 border rounded shadow-sm"
//         >
//           <option className='' value="">All Difficulties</option>
//           <option value="Easy">Easy</option>
//           <option value="Medium">Medium</option>
//           <option value="Hard">Hard</option>
//         </select>
//       </div>
//       <div className="overflow-x-auto">
//         <table className="min-w-full bg-white rounded-lg shadow-md">
//           <thead className="bg-lime-500 text-white">
//             <tr>
//               <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Image</th>
//               <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Title</th>
//               <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Difficulty</th>
//               <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Category</th>
//               <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredTips.length > 0 ? (
//               filteredTips.map((tip, index) => (
//                 <tr key={index} className="border-b hover:bg-lime-50 transition duration-200">
//                   <td className="py-3 px-4">
//                     <div className='relative w-20 h-12'>
//                       {!imageLoaded[tip._id] && (
//                         <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse rounded"></div>
//                       )}
//                       <img
//                         src={tip.image}
//                         alt={tip.title}
//                         className={`w-20 h-12 object-cover rounded transition-all duration-300 ${imageLoaded[tip._id] ? 'opacity-100' : 'opacity-0'}`}
//                         onLoad={() => setImageLoaded(prev => ({ ...prev, [tip._id]: true }))}
//                         loading='lazy'
//                       />
//                     </div>
//                   </td>
//                   <td className="py-3 px-4">{tip.title}</td>
//                   <td className='py-3 px-4'>
//                     <span className={`
//                       px-2 py-1 rounded-full text-xs font-semibold
//                       ${tip.difficulty === 'Easy' && 'bg-green-300 text-green-700'}
//                       ${tip.difficulty === 'Medium' && 'bg-yellow-300 text-yellow-800'}
//                       ${tip.difficulty === 'Hard' && 'bg-red-300 text-red-700'}
//                     `}>
//                       {tip.difficulty}
//                     </span>
//                   </td>
//                   <td className="py-3 px-4">
//                     <span className='bg-black text-white text-sm rounded-full px-2 py-1 font-semibold'>{tip.category}</span>
//                   </td>
//                   <td className="py-3 px-4">
//                     <Link to={`/tips/${tip._id}`}>
//                       <button className="px-3 py-1 rounded text-xl cursor-pointer flex items-center gap-4 text-blue-500 hover:bg-green-100">
//                         <FaEye />
//                         <span className='text-sm'>View</span>
//                       </button>
//                     </Link>
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5" className="text-center py-6 text-gray-500">
//                   No matching tips found.
//                 </td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default BrowseTips;
import React, { useEffect, useState } from 'react';
import { FaEye } from 'react-icons/fa';
import { Link } from 'react-router';

const BrowseTips = () => {
  const [tips, setTips] = useState([]);
  const [filteredTips, setFilteredTips] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDifficulty, setSelectedDifficulty] = useState('');
  const [loading, setLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState({});

  useEffect(() => {
    fetch("https://gardening-hub-server-3uha7eut4-chaiteys-projects.vercel.app/tips")
      .then(res => res.json())
      .then(data => {
        setTips(data);
        setFilteredTips(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    filterTips();
  }, [searchText, selectedCategory, selectedDifficulty]);

  const filterTips = () => {
    let filtered = tips;

    if (searchText) {
      const lower = searchText.toLowerCase();
      filtered = filtered.filter(tip =>
        tip.title.toLowerCase().includes(lower) ||
        tip.description.toLowerCase().includes(lower)
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(tip => tip.category === selectedCategory);
    }

    if (selectedDifficulty) {
      filtered = filtered.filter(tip => tip.difficulty === selectedDifficulty);
    }

    setFilteredTips(filtered);
  };

  const uniqueCategories = [...new Set(tips.map(tip => tip.category))];

  if (loading) {
    return (
      <div className='flex justify-center items-center h-[50vh]'>
        <span className="loading loading-spinner loading-xl text-lime-600"></span>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6 text-lime-600 text-center">Browse Gardening Tips</h1>

      {/* Search + Filter */}
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 mb-6'>
        <input
          type="text"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          placeholder="Search by title or description..."
          className="w-full px-4 py-2 border rounded shadow-sm"
        />
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="w-full px-4 py-2 border rounded shadow-sm "
        >
          <option value="">All Categories</option>
          {uniqueCategories.map((cat, i) => (
            <option key={i} value={cat}>{cat}</option>
          ))}
        </select>
        <select
          value={selectedDifficulty}
          onChange={(e) => setSelectedDifficulty(e.target.value)}
          className="w-full px-4 py-2 border rounded shadow-sm"
        >
          <option value="">All Difficulties</option>
          <option value="Easy">Easy</option>
          <option value="Medium">Medium</option>
          <option value="Hard">Hard</option>
        </select>
      </div>

      {/* ✅ Responsive Table */}
      <div className="overflow-x-auto w-full">
        <table className="min-w-[800px] w-full bg-white rounded-lg shadow-md">
          <thead className="bg-lime-500 text-white">
            <tr>
              <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Image</th>
              <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Title</th>
              <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Difficulty</th>
              <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Category</th>
              <th className="text-left py-3 px-4 text-sm uppercase font-semibold">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredTips.length > 0 ? (
              filteredTips.map((tip, index) => (
                <tr key={index} className="border-b hover:bg-lime-50 transition duration-200">
                  <td className="py-3 px-4">
                    <div className='relative w-20 h-12'>
                      {!imageLoaded[tip._id] && (
                        <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse rounded"></div>
                      )}
                      <img
                        src={tip.image}
                        alt={tip.title}
                        className={`w-20 h-12 object-cover rounded transition-all duration-300 ${imageLoaded[tip._id] ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(prev => ({ ...prev, [tip._id]: true }))}
                        loading='lazy'
                      />
                    </div>
                  </td>
                  <td className="py-3 px-4">{tip.title}</td>
                  <td className='py-3 px-4'>
                    <span className={`
                      px-2 py-1 rounded-full text-xs font-semibold
                      ${tip.difficulty === 'Easy' ? 'bg-green-300 text-green-700' : ''}
                      ${tip.difficulty === 'Medium' ? 'bg-yellow-300 text-yellow-800' : ''}
                      ${tip.difficulty === 'Hard' ? 'bg-red-300 text-red-700' : ''}
                    `}>
                      {tip.difficulty}
                    </span>
                  </td>
                  <td className="py-3 px-4">
                    <span className='bg-black text-white text-sm rounded-full px-2 py-1 font-semibold'>{tip.category}</span>
                  </td>
                  <td className="py-3 px-4">
                    <Link to={`/tips/${tip._id}`}>
                      <button className="px-3 py-1 rounded text-xl cursor-pointer flex items-center gap-4 text-blue-500 hover:bg-green-100">
                        <FaEye />
                        <span className='text-sm'>View</span>
                      </button>
                    </Link>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-6 text-gray-500">
                  No matching tips found.
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
