import React, { useEffect, useState } from 'react'
import f1 from '../images/f1.jpg' 
import f2 from '../images/f2.jpg' 
import f3 from '../images/f3.jpg' 
import bg1 from '../images/bg1.jpg' 

function Front() {

  const images = [f1, f2, f3]   
  const texts = [
    " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    " adipisicing elitLorem ipsum dolor sit amet consectetur.",
    " Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet "
  ]   
  const [index, setIndex] = useState(1)
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className='h-[700px] w-full '>
        <img src={bg1} alt="" className='h-[700px]  w-full' />
        <div class="absolute top-0 backdrop-blur-3xl w-full h-[700px] bg-gradient-to-b from-transparent to-blue-600 opacity-90"></div>

        <div className='h-[450px] w-[800px] absolute top-0 right-10 mt-28'>
            <img src={images[index]} className='h-[450px] w-[800px] rounded-3xl' alt="" />
            <div className='absolute bottom-10 text-5xl bg-opacity-40 backdrop-blur-md text-white bg-black p-5 font-bold'>
            {texts[index]}
            </div>
        </div>
        <div className='absolute bottom-10 w-[300px] left-5 p-5 text-white text-5xl font-bold'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </div>
    </div>
  )
}

export default Front