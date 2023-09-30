import React, { useState } from 'react';
import './ItemList.css';

const Card = ({item,addToCart,removeFromCart,isChecked}) => {
  const {imageSource,title,price}= item;
  const [addRemoveButton,setAddButton]=useState(false);

  // to toggle between add to cart and remove from cart
  function toggleAddCartButton(){
    setAddButton(!addRemoveButton);
  } 
  
  return (
    <div className='flex gap-5 justify-center items-center p-3 border-4 border-teal-500 rounded-[15px] bg-white  hover:scale-[0.95] hover:border-[black] hover:shadow-xl hover:shadow-black transition duration-[250]'>
    <figcaption>
        <img src={imageSource} alt="Item Image" className='h-[150px] w-[150px] object-contain rounded-[15px] md:h-[15em] md:w-[200px] bg-white'/>
      </figcaption>
      <div className='flex flex-col w-[40%] gap-5 items-center justify-center font-poppins'>
            <h1 className='text-center text-[1.5em] font-bold'>
              {title}
            </h1>
            <h3 className='text-[#03045e] font-bold text-[1.1em]'>
            <span className='text-[1.5em]'>&#8377; {price}</span>/ {(isChecked) ? "day" : "நாள்"}
            </h3>
            {(!addRemoveButton) ?
            <button onClick={()=>{addToCart(item);toggleAddCartButton()}} className='add-to-cart-btn'>
              {(isChecked) ? "Add To Cart" : "சேர்க்க"}
            </button> :
            <button onClick={()=>{removeFromCart(item.id);toggleAddCartButton()}} className='add-to-cart-btn bg-red-800'>
              {(isChecked) ? "Remove" : "நீக்கு"}
            </button>
            }
      </div>
    </div>
  )
}

export default Card