import { useState } from 'react';
import './App.css';
import About from './Components/About/About';
import ItemsList from './Components/Items/ItemsList';
import Navbar from './Components/Navbar/Navbar';


function App() {
  const [showItems,setItems]=useState(true);
  const [isChecked, setIsChecked] = useState(false);

  // toggle between home and product page
  function toggleBetween(){
      setItems(previousState=>!previousState);
  }
  return (
    <>
      <Navbar isChecked={isChecked} setIsChecked={setIsChecked}/>
      {
        (showItems)?<About onButtonClick={()=>toggleBetween()}  isChecked={isChecked}/> : <ItemsList onButtonClick={()=>toggleBetween()} isChecked={isChecked} />
      }
    </>
  )
}

export default App
