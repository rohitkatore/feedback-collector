import React, { useState } from 'react'
import axios from "axios"

function FeedbackForm() {
  const [formData, setFormData] = useState({fullname:"", email:"", message:""});
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  }
  const submitHandler = async (e)=>{
    e.preventDefault() ;
    setError(null) ;
    setLoading(true) ;
    setSuccess(false) ;
      const response = await axios.post("http://localhost:3000/submit-feedback",formData).then((res)=>{
        if(res.status !== 201){
          throw new Error(response.data.message ||"Something wents wrong.");
        }
        setSuccess(true);
        setFormData({fullname:"",email:"",message:""}) ;
      }).catch(err=>{
        setError(err instanceof Error ? err.message : "Failed to send.");
      }).finally(()=>{
        setLoading(false) ;
      }) ;
    console.log(formData);
  }
  return (
    <div className="max-w-md mx-auto my-8 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Share Your Feedback</h2>
      {success && (
                <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-md">
                    Send successful!
                </div>
            )}
      {error && (
                <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-md">
                    {error}
                </div>
            )}

      <form onSubmit={submitHandler} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
          <input 
            type="text" 
            id="name" 
            value={formData.fullname}
            onChange={inputHandler}
            name='fullname'
            required
            placeholder="Your name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <input 
            type="email" 
            id="email" 
            onChange={inputHandler}
            value={formData.email}
            name='email'
            required
            placeholder="your.email@example.com"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          />
        </div>
        
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Feedback</label>
          <textarea 
            id="message"
            name='message'
            onChange={inputHandler}
            value={formData.message}
            rows="4" 
            required
            placeholder="Please share your thoughts..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
          ></textarea>
        </div>
        
        <button 
          type="submit" 
          className={`w-full ${loading ? "bg-blue-500" :"bg-blue-600"}  text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        >
          {loading ? "Loading..." : "Submit Feedback"}
        </button>
      </form>
    </div>
  )
}

export default FeedbackForm
