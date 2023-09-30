import React, { useState, useEffect } from 'react';
import './CartList.css';

const CartList = ({choosedItem,isChecked}) => {
    const [totalPrice,setTotalPrice]=useState(0);
    const [quantities, setQuantities] = useState(
        choosedItem.reduce((acc, item) => ({ ...acc, [item.id]: 1 }), {})
      );

    //   Finding Total Amount of Selected Items
      useEffect(() => {
        const total = choosedItem.reduce(
          (acc, item) => acc + (quantities[item.id] || 1) * item.price,
          0
        );
        setTotalPrice(total);
      }, [choosedItem, quantities]);

    //   handling quantity change
      const handleChange = (id, event) => {
        const inputValue = parseInt(event.target.value, 10);
        const newValue = isNaN(inputValue) || inputValue < 1 ? 1 : inputValue;
        setQuantities((prev) => ({ ...prev, [id]: newValue }));
      };
    
    //   Quantity Increment and Decrement
      const increment = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: prev[id] + 1 }));
      };
      const decrement = (id) => {
        setQuantities((prev) => ({ ...prev, [id]: prev[id] - 1 < 1 ? 1 : prev[id] - 1 }));
      };

  return (
    <div className='total-container font-poppins'>
        {choosedItem.map((choosed)=>(
            <div key={choosed.id} className='inner-container'>
                    <div className='image-title'>
                        <img src={choosed.imageSource}></img>
                        <h1>{choosed.title}</h1>
                    </div>
                    <div className='flex md:gap-20 gap-10 '>
                    <div className='flex flex-col items-center justify-center font-bold text-[1.2em] gap-2'>
                        <h2 className='text-[blue]'>{(isChecked) ? "Price" : "விலை"}</h2>
                        <h3> &#8377; {choosed.price}</h3>
                    </div>
                    <div className='flex flex-col items-center justify-center font-bold text-[1.2em] gap-2'>
                        <h2 className='text-[blue]'>{(isChecked) ? "Quantity" : "அளவு"}</h2>
                        <div className='btn-group'>
                            <button onClick={() => decrement(choosed.id)} className=' p-2 border-2 border-black'>-</button>
                                <input 
                                    type="text" 
                                    value={quantities[choosed.id] || 1}
                                    onChange={(e) => handleChange(choosed.id, e)}
                                    id='quantity'
                                    className='p-2 text-center w-[3em] border-2 border-black rounded-[10px]'
                                />
                                <button onClick={() => increment(choosed.id)} className=' p-2 border-2 border-black'>+</button>   
                        </div>
                    </div>
                    </div>
                    <div className='item-price-remove font-bold text-[1.2em]'>
                        <h2 className='text-[blue]'>{(isChecked) ? "Sub-Total" : "கூட்டுத்தொகை"}</h2>
                        <span>&#8377; {(quantities[choosed.id] || 1) * choosed.price}</span>
                    </div>
            </div>
        ))}
        <div className='total-price'>
            <hr className='h-[4px] border-0 bg-black'></hr>
            <span>{(isChecked) ? "Total Price Of your Cart :" : "மொத்த விலை :"}</span>
            <span className='text-[green] text-[1.5em]'> &#8377; {totalPrice}</span>
        </div>
    </div>
  )
}

export default CartList