import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Signup from './pages/Signup'
import Login from './pages/Login'
import DashboardLayout from './layouts/DashboardLayout'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Signup />
  },
  {
    path: "/signup",
    element: <Signup />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard",
        element: <div className="text-2xl font-bold">Dashboard Page Coming Soon</div>
      }
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App