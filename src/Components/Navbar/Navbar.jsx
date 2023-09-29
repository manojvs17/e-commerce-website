import React from 'react';
import logo from '../../assets/1.jpeg'

const Navbar = () => {
  return (
    <header className='h-fit w-[100%] border-2 border-black  md:h-[20vh] nav-bg'>
      <div className='flex flex-wrap gap-1 items-center justify-center md:gap-8'>
        <figure>
          <img src={logo} alt='Logo' className='nav-logo h-[6em] w-[6em]'></img>
        </figure>
        <h1 className='nav-text text-[1.8em] text-center font-bold text-[#23047a] md:text-[2.1em]'>குமரன் ஆடவர் சுய உதவிக் குழு</h1>
      </div>
    </header>
  )
}

export default Navbar