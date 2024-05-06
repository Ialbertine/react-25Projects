import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex items-center justify-center py-5 gap-4 bg-[#b5725a]'>
        <Link to="/" className='text-2xl'>Accordion</Link>
        <Link to="/randomcolors" className='text-2xl'>Random Colors</Link>
    </div>
  )
}

export default NavBar