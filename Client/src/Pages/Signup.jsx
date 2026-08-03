import React from 'react'
import WelcomePanel from '../components/WelcomePanel'

const Signup = () => {
  return (
    <>
      <div className='flex justify-between'>
        {/* left section */}
        <div className='w-1/2 bg-indigo-50 flex justify-center'>
          <WelcomePanel />
        </div>

        {/* right section */}
        <div className='w-1/2 bg-indigo-50 flex items-center justify-center'>
          <div className='bg-white rounded-2xl shadow-2xl p-10 w-[450px]'>
            <h1 className='font-bold text-4xl text-indigo-600 text-center mb-1'>
              Create Account
            </h1>
            <p className='text-gray-500 font-semibold text-center text-sm mb-6'>
              Join <span className='text-blue-400'>Click</span><span className='text-indigo-600'>Mart</span> and start shopping today.
            </p>

            <form action="" className='flex flex-col gap-4'>
              <input 
                type="text" 
                placeholder="Full Name" 
                className='border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-600 w-full text-sm' 
              />
              <input 
                type="text" 
                placeholder="Username" 
                className='border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-600 w-full text-sm' 
              />
              <input 
                type="email" 
                placeholder="Email Address" 
                className='border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-600 w-full text-sm' 
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                className='border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-600 w-full text-sm' 
              />
              <input 
                type="password" 
                placeholder="Password" 
                className='border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-600 w-full text-sm' 
              />
              <select 
                className='border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:border-indigo-600 w-full text-sm text-gray-600 bg-white'
              >
                <option value="Admin">Admin</option>
                <option value="Customer">Customer</option>
                <option value="Seller">Seller</option>
              </select>

              <button 
                type="submit" 
                className='bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2.5 rounded-lg transition-colors mt-2 shadow-md shadow-indigo-600/20'
              >
                Create Account
              </button>
            </form>

            <p className='text-center text-xs text-gray-500 mt-5'>
              Already have an account? <span className='text-indigo-600 font-semibold cursor-pointer'>Login</span>
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signup