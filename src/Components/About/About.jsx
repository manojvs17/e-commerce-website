import React from 'react';
import './About.css';

const About = ({onButtonClick}) => {
  return (
    <div className='h-screen p-[1em] flex flex-col gap-5 border-4 border-[blue] bg-[#eaf4f4] items-center justify-center md:gap-4 md:pt-[5em] md:h-[80vh]'>
       <h3 className='text-[1.4em] text-center font-bold md:text-[2.3em] bg-[skyblue] rounded-[30px]'>உங்கள் நிகழ்வுகளுக்கான பொருட்கள் வாடகைக்கு வேண்டுமா?</h3>
        <h3 className='text-[1.2em] text-center font-bold md:text-[1.6em] '>எங்களிடம் டேபிள்,சேர்,அடுப்பு மற்றும் இதர பாத்திரங்கள் வாடகைக்கு கிடைக்கும்</h3>
        <h2 className='text-[1.2em] text-center font-bold md:text-[2em] '>
          <span className='text-red-700 text-[1.1em]'>இடம்: </span> வேலம்பாளையம்,கவுந்தப்பாடி
        </h2>
        <h5 className='text-[1.4em] font-bold md:text-[2em]'>📞 9486245321</h5>
        <div>
          <button onClick={onButtonClick} className='about-btn text-[1.9em] font-[monospace] bg-[lime] px-[15px] py-[10px]'>Book Now</button>
        </div>
    </div>
  )
}

export default About