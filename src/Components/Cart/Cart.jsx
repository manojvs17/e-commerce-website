import React from 'react';
import cart from '../../assets/cart.png'

const Cart = ({cartCount,toggleBetweenCartList}) => {
  
  return (
    <div onClick={toggleBetweenCartList} className='relative h-[4em] w-[4em] bg-[yellowgreen] rounded-[10px] grid place-items-center cursor-pointer hover:scale-[1.1]'>
        <img src={cart} alt="Cart" className='h-[3em] w-[3em] absolute left-[4px]'/>
        <div className='absolute right-[0em] top-0 bg-[red] rounded-[50%] h-[1.5em] w-[1.5em] flex items-center justify-center'>
            <span className='font-poppins font-bold text-white'>{cartCount}</span>
        </div>
    </div>
  )
}

export default Cart