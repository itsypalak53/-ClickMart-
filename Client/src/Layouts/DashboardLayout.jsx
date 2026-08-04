import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#FFF9F5]">
      {/* Sidebar Section */}
      <div className="w-64 bg-[#FFF9F5] p-6 border-r border-slate-200/60 flex flex-col justify-between shadow-xs">
        <div>
          {/* Logo Section (Text hata diya hai, sirf image hai) */}
          <div className="flex flex-col items-center mb-6 px-2">
            <img src={logo} alt="Clickmart Logo" className="w-28 h-28 object-contain" />
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col gap-2.5">
            <Link 
              to="/dashboard" 
              className="p-3 bg-white shadow-xs rounded-xl font-medium hover:bg-blue-50 hover:text-blue-600 transition text-slate-700 text-sm"
            >
              Dashboard
            </Link>
            
            <Link 
              to="/categories" 
              className="p-3 bg-white shadow-xs rounded-xl font-medium hover:bg-blue-50 hover:text-blue-600 transition text-slate-700 text-sm"
            >
              Categories
            </Link>

            <Link 
              to="/products" 
              className="p-3 bg-white shadow-xs rounded-xl font-medium hover:bg-blue-50 hover:text-blue-600 transition text-slate-700 text-sm"
            >
              Products
            </Link>

            <Link 
              to="/agency-list" 
              className="p-3 bg-white shadow-xs rounded-xl font-medium hover:bg-blue-50 hover:text-blue-600 transition text-slate-700 text-sm"
            >
              Agency List
            </Link>

            <Link 
              to="/customer-list" 
              className="p-3 bg-white shadow-xs rounded-xl font-medium hover:bg-blue-50 hover:text-blue-600 transition text-slate-700 text-sm"
            >
              Customer List
            </Link>

            <Link 
              to="/sales-order" 
              className="p-3 bg-white shadow-xs rounded-xl font-medium hover:bg-blue-50 hover:text-blue-600 transition text-slate-700 text-sm"
            >
              Sales Order
            </Link>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col bg-[#FFF9F5]">
        {/* Top Header / Search Bar Section */}
        <div className="h-20 bg-white border-b border-slate-200/60 flex items-center justify-between px-8 shadow-xs">
          <div className="w-96">
            <input 
              type="text" 
              placeholder="Global Search..." 
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-full text-sm focus:outline-none focus:border-blue-600 focus:bg-white transition"
            />
          </div>
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold shadow-xs">
              👤
            </div>
          </div>
        </div>

        {/* Dynamic Page Content */}
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default DashboardLayout