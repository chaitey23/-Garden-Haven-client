import React, { use, useState }  from 'react';
import { AuthContext } from '../../Context/AuthContext';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router';


const ShareTip = () => {
const {user} = use(AuthContext);
const navigate = useNavigate();
const [loading,setLoading] = useState(false);
const handleShareTipSubmit = e =>{
    e.preventDefault();
    setLoading(true);
    const form = e.target;
    const tip = {
        title : form.title.value,
      topic: form.topic.value,
      difficulty: form.difficulty.value,
      description: form.description.value,
      image: form.image.value,
      category: form.category.value,
      availability: form.availability.value,
      userEmail: user?.email,
      userName: user?.displayName,

    }
    fetch("http://localhost:3000/tips",{
    method:'POST',
    headers:{
        "content-type" : "application/json"
    },
    body:JSON.stringify(tip)
})
.then(res => res.json())
.then(data => {
    setLoading(false);
    console.log(data);
    if(data.insertedId || data.acknowledged){
        toast.success("Tip shared successfully!!");
        navigate("/myTips")
    }
    else{
        toast.error("Something went wrong!")
    }
})
.catch(err => {
    setLoading(false)
    console.log(err);
    toast.error("Failed to submit tip!")
    
})
}

    return (
        <div className='max-w-3xl mx-auto p-8 bg-white shadow-2xl rounded-lg '>
            <h1 className='text-3xl font-bold text-center mb-4 text-lime-600'>Share Your Gardening Wisdom</h1>
            <p className='text-center mb-6 text-lim'>
                Inspire fellow gardeners by sharing your knowledge and experiences.
                Fill out the details <br /> below to add your tip to our community hub!
            </p>

            <form onSubmit={handleShareTipSubmit} className='space-y-4'>
                <div>
                    <label className="font-semibold">Tip Title *</label>
                    <input type="text" name="title" placeholder="Title" className="input input-bordered w-full" required />
                </div>

                <div>
                    <label className="font-semibold">Plant Type / Topic *</label>
                    <input type="text" name="topic" placeholder="e.g., Tomato, Indoor Plants" className="input input-bordered w-full" required />
                </div>


                <div>
                    <label className="font-semibold">Difficulty Level *</label>
                    <select name="difficulty" className='select select-bordered w-full' required>
                        <option value="">Select Difficulty</option>
                        <option value="Easy">Easy</option>
                        <option value="Medium">Medium</option>
                        <option value="Hard">Hard</option>
                    </select>
                </div>

                <div>
                    <label className="font-semibold">Detailed Description *</label>
                    <textarea name="description" placeholder="Write your gardening tip..." className="textarea textarea-bordered w-full" rows="4" required />
                </div>


                <div>
                    <label className="font-semibold">Image URL (Optional)</label>
                    <input type="text" name="image" placeholder="Image URL" className="input input-bordered w-full" />
                </div>


                <div>
                    <label className="font-semibold">Category *</label>
                    <select name="category" className="select select-bordered w-full" required>
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
                    <select name="availability" className="select select-bordered w-full" required>
                        <option value="">Select Availability</option>
                        <option value="public">Public</option>
                        <option value="hidden">Hidden</option>
                    </select>
                </div>

  
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                 <legend className="fieldset-legend">User Email</legend>
                      <input type="email" value={user?.email || ""}  readOnly className="input input-bordered bg-gray-100 w-full" />
              </div>
                   <div>
                     <legend className="fieldset-legend">User Name</legend>
                     <input type="text" value={user.displayName || ""}  readOnly className="input input-bordered bg-gray-100 w-full" />
                   </div>
                </div>

                <button type="submit" className="btn btn-success w-full mt-4 bg-lime-600 text-white" disabled={loading}>{loading ? "Submitting ..." : "Submit Tip"}</button>
            </form>
        </div>
    );
};

export default ShareTip;
