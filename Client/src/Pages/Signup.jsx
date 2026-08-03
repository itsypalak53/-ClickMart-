import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    username: '',
    email: '',
    phone: '',
    password: '',
    role: 'Admin'
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Signup Data:", formData)
  }

  return (
    <div className='flex justify-between items-center h-screen bg-[#FFF9F5] px-24 overflow-hidden'>
      {/* Left Section (Branding & Logo) */}
      <div className='w-1/2 flex flex-col items-start px-12'>
        <div className='mb-6'>
          <h1 className='text-4xl font-bold text-slate-900 tracking-tight'>
            Welcome <span className='text-blue-600'>Click</span><span className='text-violet-600'>Mart</span>
          </h1>
          <p className='text-slate-500 text-sm mt-1'>Smart Shopping, Better Living.</p>
        </div>
        
        <div className='mt-4'>
          <img src={logo} alt="Clickmart Logo" className='w-72 h-72 object-contain' />
        </div>
      </div>

      {/* Right Section (Form Card) */}
      <div className='w-1/2 flex justify-end'>
        <div className='bg-white shadow-xl rounded-2xl w-[480px] p-8 border border-slate-100'>
          <h2 className='text-3xl font-bold text-center text-blue-600 mb-1'>Create Account</h2>
          <p className='text-center text-slate-400 text-xs mb-6'>Join ClickMart and start shopping today.</p>
          
          <form onSubmit={handleSubmit} className='flex flex-col gap-3.5'>
            <div>
              <input 
                type="text" 
                placeholder="Full Name" 
                className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm bg-white text-slate-700 placeholder-slate-400 shadow-xs'
                value={formData.fullName}
                onChange={(e) => setFormData({...formData, fullName: e.target.value})}
              />
            </div>

            <div>
              <input 
                type="text" 
                placeholder="Username" 
                className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm bg-white text-slate-700 placeholder-slate-400 shadow-xs'
                value={formData.username}
                onChange={(e) => setFormData({...formData, username: e.target.value})}
              />
            </div>

            <div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm bg-white text-slate-700 placeholder-slate-400 shadow-xs'
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>

            <div>
              <input 
                type="text" 
                placeholder="Phone Number" 
                className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm bg-white text-slate-700 placeholder-slate-400 shadow-xs'
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>

            <div>
              <input 
                type="password" 
                placeholder="Password" 
                className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm bg-white text-slate-700 placeholder-slate-400 shadow-xs'
                value={formData.password}
                onChange={(e) => setFormData({...formData, password: e.target.value})}
              />
            </div>

            <div>
              <select 
                className='w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-blue-600 text-sm bg-white text-slate-700 shadow-xs'
                value={formData.role}
                onChange={(e) => setFormData({...formData, role: e.target.value})}
              >
                <option value="Admin">Admin</option>
                <option value="Customer">Customer</option>
                <option value="Agency">Agency</option>
              </select>
            </div>

            <button 
              type="submit" 
              className='w-full bg-blue-600 hover:bg-blue-700 transition-all text-white font-semibold py-3.5 rounded-xl shadow-md shadow-blue-600/20 mt-2 text-sm'
            >
              Create Account
            </button>
          </form>

          <p className='text-center text-xs text-slate-500 mt-5'>
            Already have an account?{' '}
            <Link to="/login" className='text-blue-600 font-semibold cursor-pointer hover:underline'>
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Signup