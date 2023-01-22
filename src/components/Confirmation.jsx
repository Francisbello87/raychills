import React from 'react'
import Confetti from '../img/confetti.png'
import { motion } from 'framer-motion'

const Confirmation = () => {
  return (
    <div className='w-full h-full flex items-center justify-center mt-10 mb-10'>
        <div className='w-full h-300  md:h-495 rounded-md bg-gray-200 flex flex-col items-center gap-6 justify-center'>
            <div className='flex items-center mb-5'>
                <img className='w-10 md:w-20' src={Confetti} alt="Confetti" />
                <h3 className='font-bold text-xl md:text-2xl text-headingColor ml-2 '>Yay!!!</h3>
            </div>
            <p className='text-base md:text-xl text-textColor'>Your Order is on it's way to you.</p>
            <motion.button 
                whileTap={{scale: 0.8}}
                type="button"
                className="w-225 p-2 rounded-full bg-gradient-to-tr from-green-400 
                to-green-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href='/';
                 
                  }}
                >
                  Continue Shopping
                </motion.button>

        </div>
    </div>
  )
}

export default Confirmation