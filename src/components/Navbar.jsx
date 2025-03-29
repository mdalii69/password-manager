import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-slate-800 text-white'>
      <div className='mycontainer flex justify-between items-center px-4 py-5 h-14 '>
        <div className='logo font-bold text-white text-2xl'>
        <span className='text-green-500'>&lt;</span>
        Password-
          <span className='text-green-500'>MANAGER/&gt;</span>
          </div>
        <ul>
          <li className='flex gap-4'>
            <a className='hover:font-bold' href="/">Home</a>
            <a className='hover:font-bold' href="#">About</a>
            <a className='hover:font-bold' href="#">Contact</a>
          </li>
        </ul>
        <div>
          <img src="public\github-icon.png" alt="github-logo" />
        </div>
      </div>
    </nav> 
  )
}

export default Navbar
