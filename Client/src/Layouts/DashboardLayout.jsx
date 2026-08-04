import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#FFF9F5]">
      {/* Sidebar Section */}
      <div className="w-64 bg-[#FFF9F5] p-6 border-r border-slate-200/60 flex flex-col justify-between shadow-xs"></div>
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
            ></Link>
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
            ></Link>
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