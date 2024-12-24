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
    <div className='sm:h-[700px] h-[900px] w-full '>
        <img src={bg1} alt="" className='sm:h-[700px] h-[900px]  w-full' />
        <div class="absolute top-0 backdrop-blur-3xl w-full sm:h-[700px] h-[900px] bg-gradient-to-b from-transparent to-blue-600 opacity-90"></div>

        <div className='grid sm:grid-cols-10 absolute top-0'>
          <div className='h-[450px] col-span-6 mx-6 mt-28'>
              <img src={images[index]} className='h-[450px]  rounded-3xl' alt="" />
          </div>
          <div className='sm:mt-28 mx-6 h-[400px] col-span-4  text-5xl  text-white py-5 font-bold'>
          {texts[index]}
          </div>
          {/* <div className='absolute col-span-4  w-[300px] p-5 text-white text-5xl font-bold'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div> */}
        </div>
    </div>
  )
}

export default Front