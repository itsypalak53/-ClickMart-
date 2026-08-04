import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import logo from '../assets/logo.png'

const DashboardLayout = () => {
  return (
    <div className="flex min-h-screen bg-[#FFF9F5]">
      {/* Sidebar Section */}
      <div className="w-64 bg-[#FFF9F5] p-6 border-r border-slate-200/60 flex flex-col justify-between shadow-xs"></div>