import React from 'react'
import Delivery from '../img/delivery.svg'
import HeroBg from '../img/heroBg.png'
import {heroData} from '../utils/data'


const Homepage = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='homepage'>
      <div className="py-2 gap-6 flex-1 flex flex-col items-start  justify-center">
        <div className="flex items-center gap-2 justify-center bg-green-100 px-2 py-1 rounded-full">
          <p className='text-base text-green-500 font-semibold'>Bike Delivery</p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl">
            <img src={Delivery} 
              alt="Delivery" 
              className='w-full h-full object-contain'
            />
          </div>
        </div>
        <p className='text-[2.5rem] font-bold tracking-wide text-textColored   lg:text-[4.5rem] '>
          The Best Delights in  <span className='text-green-600 text-[3rem] lg:text-[5rem]'>Your City</span>
        </p>
        <p className='text-base text-textColor  md:w-[80%]'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. 
          Doloremque nulla ipsum neque deleniti cumque quasi quibusdam! 
          Corporis corrupti illo veritatis neque. 
          Rerum sunt dolorem eveniet?
        </p>
        <button type='button' 
          className='bg-gradient-to-br from-green-400 to-green-500 
          w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg 
          transition-all ease-in-out duration-100'>
          Order Now
        </button>
      </div>
      <div className="py-1 flex-1 items-center mt-6 relative">
        <img src={HeroBg} alt="Hero-bg" 
        className='ml-auto h-800 w-full lg:w-auto lg:h-650'
        />
        <div className="w-full h-full absolute top-0 left-0 flex 
        items-center justify-center lg:px-32 py-2 gap-4 flex-wrap" 
        >
          {heroData && heroData.map(n => (
               <div key={n.id} className="lg:w-190 mt-4  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl 
               flex items-center justify-center flex-col drop-shadow-lg">
                   <img src={n.image} alt="Raychills Yoghurt" 
                   className='lg:-mt-20 lg:w-40 w-20 -mt-10' 
                   />
                   <p className='lg:text-xl text-base text-center mt-2 font-semibold lg:mt-3 text-textColor'>
                      {n.name}
                   </p>
                   <p className=' text[12px] lg:text-sm text-lighttextGray text-center font-semibold my-1 lg:my-3'>
                      {n.description}
                   </p>
                   <p className='text-sm font-semibold text-headingColor'>
                   <span className='text-xs text-green-600'>#</span>{n.price}
                   </p>
               </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Homepage