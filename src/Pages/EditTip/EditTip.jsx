import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';

const EditTip = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tip, setTip] = useState(null);

  useEffect(() => {
    fetch(`https://gardening-hub-server-ten.vercel.app/tips/${id}`)
      .then(res => res.json())
      .then(data => {
        setTip(data);
      });
  }, [id]);

  const handleChange = e => {
    const { name, value } = e.target;
    setTip(prev => ({ ...prev, [name]: value }));
  };

  const handleEditTip = async e => {
    e.preventDefault();
    const { _id, ...tipData } = tip;
    try {
      const res = await fetch(`https://gardening-hub-server-ten.vercel.app/tips/${id}`, {
        method: 'PUT',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(tipData),
      });

      if (!res.ok) throw new Error('Failed to update tip');

      toast.success('Tip updated successfully!');
      navigate('/myTips?refresh=true');
    } catch (error) {
      toast.error('Update failed, try again!');
      console.error(error);
    }
  };

  if (!tip) {
    return (
      <div className="text-center py-10">
        <span className="loading loading-spinner text-lime-600 loading-lg"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="max-w-3xl mx-auto p-8 bg-base-100 shadow-2xl rounded-lg">
        <h1 className="text-3xl font-bold text-center mb-4 text-lime-600">
          Edit Your Gardening Tip
        </h1>
        <form onSubmit={handleEditTip} className="space-y-4">
          <div>
            <label className="font-semibold">Tip Title *</label>
            <input
              type="text"
              value={tip.title || ''}
              name="title"
              placeholder="Title"
              onChange={handleChange}
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="font-semibold">Plant Type / Topic *</label>
            <input
              type="text"
              value={tip.topic || ''}
              onChange={handleChange}
              name="topic"
              placeholder="e.g., Tomato, Indoor Plants"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div>
            <label className="font-semibold">Difficulty Level *</label>
            <select
              name="difficulty"
              value={tip.difficulty || ''}
              className="select select-bordered w-full"
              onChange={handleChange}
              required
            >
              <option value="">Select Difficulty</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Detailed Description *</label>
            <textarea
              value={tip.description || ''}
              onChange={handleChange}
              name="description"
              placeholder="Write your gardening tip..."
              className="textarea textarea-bordered w-full"
              rows="4"
              required
            />
          </div>
          <div>
            <label className="font-semibold">Image URL (Optional)</label>
            <input
              value={tip.image || ''}
              type="text"
              onChange={handleChange}
              name="image"
              placeholder="Image URL"
              className="input input-bordered w-full"
            />
          </div>
          <div>
            <label className="font-semibold">Category *</label>
            <select
              value={tip.category || ''}
              name="category"
              className="select select-bordered w-full"
              onChange={handleChange}
              required
            >
              <option value="">Select Category</option>
              <option value="Composting">Composting</option>
              <option value="Plant Care">Plant Care</option>
              <option value="Vertical Gardening">Vertical Gardening</option>
              <option value="Indoor Gardening">Indoor Gardening</option>
              <option value="Herbs">Herbs</option>
              <option value="Pest Control">Pest Control</option>
              <option value="Soil Health">Soil Health</option>
              <option value="Watering Tips">Watering Tips</option>
              <option value="Seasonal Tips">Seasonal Tips</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Availability *</label>
            <select
              name="availability"
              value={tip.availability || ''}
              className="select select-bordered w-full"
              onChange={handleChange}
              required
            >
              <option value="">Select Availability</option>
              <option value="public">Public</option>
              <option value="hidden">Hidden</option>
            </select>
          </div>

          <div className="bg-base-100 p-4 rounded-md text-sm text-base-content">
            <p className="font-semibold">Editing tip by:</p>
            <p>
              <span className="font-semibold">Name:</span> {tip.userName}
            </p>
            <p>
              <span className="font-semibold">Email:</span> {tip.userEmail}
            </p>
            <p className="text-xs text-gray-500 mt-1">
              (Creator information cannot be changed.)
            </p>
          </div>

          <button
            type="submit"
            className="btn btn-success w-full mt-4 bg-lime-600 text-white"
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditTip;
