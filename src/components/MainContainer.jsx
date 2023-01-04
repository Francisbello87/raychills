import React, {  useEffect, useState } from 'react'
import Homepage from './Homepage'
import OurMenu from "./OurMenu"
import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'
import Cart from './Cart'


const MainContainer = () => {
  const [{storeCollections, cartShow}, dispatch] = useStateValue()
  const [scrollValue, setScrollValue] = useState(0)
 useEffect(() => {}, [scrollValue, cartShow])

  return (
    <div className='w-full h-auto flex-cols items-center'>
      <Homepage/>

      {/* <section className='w-full my-6 '>
        <div className="w-full flex items-center justify-between">
          <p className='text-2xl font-semibold capitalize text-headingColor 
          relative before:absolute before:rounded-lg before:content
          before:w-20 before:h-1 before:-bottom-2 before:right-0 
          before:bg-gradient-to-tr from-green-300 to-green-600          transition-all ease-in-out duration-100'>
            Our Parfait
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div whileTap={{scale:0.8}} className='w-8 h-8 rounded-lg bg-green-300 hover:bg-green-500
            cursor-pointer  hover:shadow-lg
             flex items-center justify-center' onClick={() => setScrollValue(-200)}>
              <MdChevronLeft className='text-lg text-white'/>
             </motion.div>
            <motion.div whileTap={{scale:0.8}} className='w-8 h-8 rounded-lg bg-green-300 hover:bg-green-500
            cursor-pointer  hover:shadow-lg
             flex items-center justify-center' onClick={() => setScrollValue(200)}>
              <MdChevronRight className='text-lg text-white'/>
             </motion.div>
          </div>
        </div>
        <RowContainer
        scrollValue={scrollValue}
        flag={true} 
        data={storeCollections?.filter(n => n.category ==="parfait")}/>
      </section> */}
      <OurMenu/>
      {cartShow && (
        <Cart/>
      )}
    </div>
  )
}

export default MainContainer