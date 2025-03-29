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
        <div>
          <button className='flex justify-center items-center bg-green-400 rounded-full w-fit px-2 py-1 cursor-pointer text-black hover:font-bold'><lord-icon
            src="https://cdn.lordicon.com/jjxzcivr.json"
            trigger="hover"
            stroke="bold"
            colors="primary:#121331,secondary:#000000"
          >
          </lord-icon><a href="https://github.com/mdalii69/password-manager" target='_blank'>GitHub</a></button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
