import React, { useState } from 'react'
import { MdAddShoppingCart } from 'react-icons/md'
import { motion } from 'framer-motion'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useStateValue } from '../context/StateProvider'
import NotFound from '../img/no-products.png'
import { actionType } from '../context/reducer'


const RowContainer = ({flag, data, scrollValue}) => {

    const [{cartItems}, dispatch] = useStateValue()
    const [items, setItems] = useState([])

    const addToCart = () =>{
       
        dispatch ({
            type: actionType.SET_CARTITEMS,
            cartItems: items
        })
        localStorage.setItem("cartItems", JSON.stringify(items))
    }
    // console.log(data);
    const rowContainer = useRef()

    useEffect(() => {
        rowContainer.current.scrollLeft += scrollValue
    }, [scrollValue])

    useEffect(() => {
        addToCart()
    }, [items])


  return (
    <div
    ref={rowContainer}
    className={`w-full my-12 flex items-center gap-3 scroll-smooth ${flag 
        ? "overflow-x-scroll scrollbar-none" 
    : "overflow-x-hidden flex-wrap justify-center"}`}>
        {data && data.length ?
        data.map((item) => (
            <div key={item?.id} className='w-275 min-w-[275px] md:w-300 md:min-w-[300px]: h-[175px] my-12 bg-cardOverlay rounded-lg
            p-2 backdrop-blur-lg hover:drop-shadow-lg flex flex-col items-center justify-between'>
               <div className='w-full flex items-center justify-between'>
                   <motion.div className='w-28 h-28 cursor-pointer -mt-8 drop-shadow-2xl' 
                   whileHover={{scale: 1.1}}>
                   <img  src={item?.imageURL}
                   alt="" className='w-full h-full object-contain'/>
                   </motion.div>
                   <motion.div 
                   whileTap={{scale:0.8}} 
                   className='w-8 h-8 rounded-full bg-green-600 flex items-center
                   justify-center cursor-pointer hover:shadow-md'
                   onClick={() =>  setItems([...cartItems, item])}>
                   <MdAddShoppingCart className='text-lg text-white cursor-pointer'/>
                   </motion.div>
               </div>
               <div className='w-full flex flex-col items-end justify-end'>
                   <p className='text-textColor font-semibold text-base
                   md:text-lg'>
                       {item?.title}
                   </p>
                   <p className='mt-1 text-sm text-gray-500'>{item?.nutrients}</p>
                   <div className='flex items-center gap-8'>
                       <p className='text-lg text-headingColor font-semibold'>
                           <span className='text-sm text-green-500'>#</span> {item?.price}
                       </p>
   
                   </div>
               </div>
           </div>
        )) : (
        <div className='w-full flex items-center justify-center'>
            <img className='h-340' src={NotFound} alt="Product not found"/>
        </div>
        
        )}
    </div>
  )
};

export default RowContainer