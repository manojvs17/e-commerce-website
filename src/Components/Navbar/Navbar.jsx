import React, { useState } from 'react';
import logo from '../../assets/1.jpeg'

const Navbar = ({isChecked,setIsChecked}) => {


 const handleToggle = () => {
  setIsChecked(!isChecked);
  };

  return (
    <header className='h-fit w-[100%] border-b-4 border-black  md:h-[20vh] nav-bg'>
      <div className='flex flex-wrap gap-1 items-center justify-center md:gap-8'>
        <figure>
          <img src={logo} alt='Logo' className='nav-logo h-[6em] w-[6em] mt-4'></img>
        </figure>
        {(isChecked) ? 
        <h1 className='nav-text text-[1.8em] uppercase tracking-[1.7px]  text-center font-bold text-[#23047a] md:text-[2.1em]'>
              Kumaran Men Self-Help Group 
        </h1> :
        <h1 className='nav-text text-[1.8em] text-center font-bold text-[#23047a] md:text-[2.1em]'>
              குமரன் ஆடவர் சுய உதவிக் குழு 
        </h1>
               
        }
      </div>
      <div className='toggle-language absolute right-0 top-10 min-[620px]:top-[0.3em] md:right-[45%] md:top-[5.5em]'>
        <label className="switch">
          <input type="checkbox" checked={isChecked} onChange={handleToggle} id='language'></input>
          <span className="slider"></span>
        </label>
      </div>
    </header>
  )
}

export default Navbar