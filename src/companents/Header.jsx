import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <div className="fixed z-50 w-[140px] h-[100vh] bg-gray-900 border-2 border-gray-900 rounded-xl">
          <h2 className="text-white text-3xl font-bold px-5 py-3">GET</h2>
          <nav className="flex flex-col px-5 pt-5 gap-3">
            <NavLink to="/home/categories"  
              className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link text-white")}>
              Catergories
            </NavLink>
            <NavLink to="/home/brands" 
               className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link text-white")}>
              Brands
            </NavLink>
            <NavLink to="/home/cities" 
              className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link text-white")}>
              Cities
            </NavLink>
            <NavLink to="/home/locations" 
              className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link text-white")}>
              Locations
            </NavLink>
            <NavLink to="/home/cars" 
              className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link text-white")}>
              Cars
            </NavLink>
            <NavLink to="/home/models" 
              className={({ isActive }) => (isActive ? "nav-link active-link" : "nav-link text-white")}>
              Models
            </NavLink>
            
          </nav>
    </div>
  )
}

export default Header