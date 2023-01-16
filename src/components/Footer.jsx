import React from 'react'
import { MdOutlineCopyright } from 'react-icons/md'
import { SocialIcon } from 'react-social-icons';
import { motion } from 'framer-motion'

const Footer = () => {
  return (
    <footer className='  -mb-6 w-screen bg-green-500 p-3 px-4 md:p-6 md:px-16'>
        <div className='md:flex w-full py-3 h-full items-center 
        justify-center  bg-primary drop-shadow-lg rounded-md'>
            <div className='flex items-center flex-col md:flex-row md:justify-between gap-8 px-4'>
                <p className='text-textColor flex items-center gap-2'>Copyright <MdOutlineCopyright/> 2023 Raychills.</p>
                <div className='flex items-center flex-col md:flex-row md: gap-2'>
                    <p className='text-textColor'>
                        Get in touch with us:
                    </p>
                    <div className='flex items-center gap-3'>
                        <motion.div whileTap={{scale: 0.6}} className="drop-shadow-lg">
                            <SocialIcon  style={{ height: 25, width: 25 }} url="https://www.instagram.com/raychills_/"/>
                        </motion.div>
                        <motion.div whileTap={{scale: 0.6}} className="drop-shadow-lg">
                            <SocialIcon  style={{ height: 25, width: 25 }} url="https://www.facebook.com"/>
                        </motion.div>
                        <motion.div whileTap={{scale: 0.6}} className="drop-shadow-lg">
                            <SocialIcon  style={{ height: 25, width: 25 }} url="https://www.twitter.com"/>
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer