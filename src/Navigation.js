import React from 'react'
import { BrowserRouter,Link } from 'react-router-dom'

function Navigation() {
  return (
    <BrowserRouter>
        <ul className='w-screen bg-orange-300 font-bold text-[1.5rem] flex gap-[2rem] items-start p-3'>
            <li><Link to="/home">Home</Link></li> 
            <li><Link to="/dashboard">Dashboard</Link></li> 
            <li><Link to="/register">Register</Link></li> 
        </ul>
    </BrowserRouter>
  )
}

export default Navigation