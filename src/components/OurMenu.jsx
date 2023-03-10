import React, { useEffect, useState } from 'react'
import {BiDrink} from "react-icons/bi"
import { categories } from '../utils/data'
import { motion } from 'framer-motion'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'

const OurMenu = () => {

    const [filter, setFilter] = useState("parfait")

    const [{storeCollections}, dispatch] = useStateValue()


  return (
    <section className='w-full my-6' id="menu">
       <div className='w-full flex flex-col items-center
       justify-center'>
          <h2 className='text-2xl font-semibold capitalize text-headingColor 
          relative before:absolute before:rounded-lg before:content
          before:w-16 before:h-1 before:-bottom-2 before:right-0 
          before:bg-gradient-to-tr from-green-300 to-green-600 
          transition-all ease-in-out duration-100 mr-auto'>
            Our Menu
          </h2>
          <div className="w-full flex items-center justify-start 
          lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
        {categories && categories.map((category) => (
                <motion.div whileTap={{scale:0.8}} key={category.id} className={`group ${filter === category.urlParamName ? 'bg-green-600' : 'bg-card'} 
                w-24 min-w-[94px] h-28
                cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center
                justify-center  hover:bg-green-600`}
                onClick={() => setFilter(category.urlParamName)}>
                    <div className={`w-10 h-10 rounded-full shadow-lg  group-hover:bg-card
                    flex items-center justify-center ${filter === category.urlParamName ? 'bg-card' : 'bg-green-600'}`}>
                        <BiDrink className={`${filter === category.urlParamName ? 'text-textColor' : 'text-card'} 
                        group-hover:text-textColor text-lg`}/>
                    </div>
                    <p className={`text-sm
                    ${filter === category.urlParamName ? 'text-white' : 'text-textColor'} group-hover:text-white`}>
                        {category.name}
                    </p>
                </motion.div>
        ))}
          </div>

          <div className="w-full">
            <RowContainer flag={false} 
            data={storeCollections?.filter((n)=> n.category === filter)}
            />
          </div>
       </div>
    </section>
  )
}

export default OurMenu