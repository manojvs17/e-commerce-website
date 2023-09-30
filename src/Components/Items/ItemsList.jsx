import React, { useState } from 'react';
import itemsData from './itemsdata';
import tamilItems from './tamilItemData'
import Card from './Card';
import './ItemList.css';
import Cart from '../Cart/Cart';
import CartList from '../Cart/CartList';

const ItemsList = ({onButtonClick,isChecked}) => {
  const [cartCount,setCartCount]=useState(0);
  const [showCartList,setCartList]=useState(false);
  const [choosedItem,setChoosedItem]=useState('');

  // Adding selected Product to cartList
  function addToCart(item){
    setCartCount(cartCount+1);
    setChoosedItem(prevItems => [...prevItems, item]);
  } 
   
  // Removing selected Product from cartList
  function removeFromCart(itemID){
    setCartCount(cartCount-1);
    setChoosedItem(prevItems => prevItems.filter(item => item.id !== itemID));
  }

  // toggle between product list and cartList  
  function toggleBetweenCartList(){
    setCartList(!showCartList);
  }

  return (
    <>{(isChecked) ? (
    <>
        <div className='h-fit w-[100%] pb-10 p-2 flex flex-col items-center '>
        <div className='w-[100%] flex justify-center items-center gap-5 md:justify-end'>
        <h2 className='font-bold font-poppins text-[1.6em]'>Cart</h2>
        <Cart cartCount={cartCount} toggleBetweenCartList={()=>toggleBetweenCartList()} isChecked={isChecked}/>
        </div>
        {showCartList ? (
            choosedItem.length > 0 ? (
              <CartList choosedItem={choosedItem} isChecked={isChecked}/>
            ) : (
              <div className="text-[red] text-[2em] font-bold font-poppins my-[2em]">Cart is Empty</div>
            )
          ) 
          : null
      }
       <div className='items-arrange' hidden={showCartList}>
        {
          itemsData.map((item)=>(
            <Card item={item} key={item.id} addToCart={()=>addToCart(item)} removeFromCart={()=>removeFromCart(item.id)} isChecked={isChecked}/>
          ))
        }
        </div>
          <button onClick={onButtonClick} className='about-btn mt-[1.2em] text-[1.9em] font-[monospace] bg-[lime] px-[15px] py-[10px]'>Home</button>
        </div>
    </>): (
    <>
        <div className='h-fit w-[100%] pb-10 p-2 flex flex-col items-center '>
        <div className='w-[100%] flex justify-center items-center gap-5 md:justify-end'>
        <h2 className='font-bold font-poppins text-[1.1em]'>தேர்ந்தெடுக்கப்பட்டவை</h2>
        <Cart cartCount={cartCount} toggleBetweenCartList={()=>toggleBetweenCartList()} isChecked={isChecked}/>
        </div>
        {showCartList ? (
            choosedItem.length > 0 ? (
              <CartList choosedItem={choosedItem} isChecked={isChecked}/>
            ) : (
              <div className="text-[red] text-[2em] font-bold font-poppins my-[2em] text-center">நீங்கள் எதையும் தேர்வு செய்யவில்லை</div>
            )
          ) 
          : null
      }
       <div className='items-arrange' hidden={showCartList}>
        {
          tamilItems.map((item)=>(
            <Card item={item} key={item.id} addToCart={()=>addToCart(item)} removeFromCart={()=>removeFromCart(item.id)} isChecked={isChecked}/>
          ))
        }
        </div>
          <button onClick={onButtonClick} className='about-btn font-bold mt-[1.2em] text-[1.9em] font-[monospace] bg-[lime] px-[15px] py-[10px]'>
              தொடக்கப் பக்கம்
          </button>
        </div>
    </>) }
    
    </>
  )
}

export default ItemsList