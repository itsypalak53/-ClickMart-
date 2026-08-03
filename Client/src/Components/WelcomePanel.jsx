import React from 'react'
import logo from '../assets/logo.png'

const WelcomePanel = () => {
  return (
    <>
      <div className='flex justify-center flex-col h-screen'>
        <div>
          <h1 className='text-4xl font-bold'>Welcome <span className='text-indigo-600'>Click</span>Mart</h1>
          <p className='text-gray-500 mt-2 font-semibold'>Smart shopping, Better Living.</p>
        </div>
        <div>
          <img className='h-80' src={logo} alt="ClickMart Logo" />
        </div>
      </div>
    </>
  )
}

export default WelcomePanel