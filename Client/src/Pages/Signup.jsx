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