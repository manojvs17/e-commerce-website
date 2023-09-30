import React from 'react';
import cart from '../../assets/cart.png'

const Cart = ({cartCount,toggleBetweenCartList}) => {
  
  return (
    <div onClick={toggleBetweenCartList} className='relative h-[3em] w-[3em] bg-[yellowgreen] rounded-[10px] grid place-items-center cursor-pointer hover:scale-[1.1] md:h-[4em] md:w-[4em]'>
        <img src={cart} alt="Cart" className='h-[2em] w-[2em] absolute left-[4px] md:h-[3em] md:w-[3em] '/>
        <div className='absolute right-[-.5em] top-0 bg-[red] rounded-[50%] h-[1.5em] w-[1.5em] flex items-center justify-center md:right-[0em]'>
            <span className='font-poppins font-bold text-white'>{cartCount}</span>
        </div>
    </div>
  )
}

export default Cart