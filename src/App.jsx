import { useState } from 'react'
import './App.css'
import About from './Components/About/About'
import ItemsList from './Components/Items/ItemsList'
import Navbar from './Components/Navbar/Navbar'


function App() {
  const [showItems,setItems]=useState(true);

  // toggle between home and product page
  function toggleBetween(){
      setItems(previousState=>!previousState);
  }
  return (
    <>
      <Navbar />
      {
        (showItems)?<About onButtonClick={()=>toggleBetween()}/> : <ItemsList onButtonClick={()=>toggleBetween()} />
      }
    </>
  )
}

export default App
