import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Cart from './Cart'
import { useStateValue } from '../context/StateProvider'
import emailjs from '@emailjs/browser';

const Contact = () => {
    
    const [{storeCollections, cartShow}, dispatch] = useStateValue()
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [message, setMessage] = useState("")

    

    const sendEmail = (e) => {
        e.preventDefault()
        let data = {
            name: name,
            email: email,
            message: message,
        }

        emailjs.send("service_0x8lo81", "template_8kpqaem", data, "yAjDo-Ly6YZZMOkW3")
        .then((result) => {
            alert("Message Sent Successfully! 😊");
        }, (error) => {
            console.log(error.text);
        });

        console.log("sent successfully");
        setName("")
        setEmail("")
        setMessage("")
        
    }

  return (
    <motion.div initial={{width: 0}}
    animate={{width: "100%"}}
    exit={{x: window.innerWidth, transition: {duration: 0.2}}}
    className='w-full flex items-center justify-center h-auto bg-gray-200 py-8 rounded-md drop-shadow mt-10 mb-7'>
        <form onSubmit={sendEmail}>
            <h2 className='text-headingColor font-bold text-xl text-center mb-4'>Contact Us</h2>
            <div className='w-full flex flex-col gap-5 mb-4'>
                <label htmlFor='name'>Name:</label>
                <input className='w-full px-3 py-2 rounded-md placeholder:italic placeholder:text-slate-400 outline-none' type="text" name="Name" 
                value={name} id='name' required  onChange={e => setName(e.target.value)} placeholder="Enter name" />
                
            </div>
            <div className='w-full flex flex-col gap-5 mb-4'>
                <label htmlFor='name'>Email:</label>
                <input className='w-full px-3 py-2 rounded-md placeholder:italic placeholder:text-slate-400 outline-none' type="text" name="Email" 
                value={email} id='email' required placeholder="Enter email" onChange={e => setEmail(e.target.value)} />
            </div>
            <div className='w-full flex flex-col gap-5 mb-4'>
                <label htmlFor='name'>Enter Message</label>
                <textarea value={message} required placeholder="Enter message..." onChange={e => setMessage(e.target.value)} className='placeholder:italic placeholder:text-slate-400 outline-none w-full rounded-md resize-none px-3 py-2'></textarea>
            </div>
            <motion.button 
                whileTap={{scale: 0.8}}
                type="submit"
                className="w-225 p-2 rounded-full bg-gradient-to-tr from-green-400 
                to-green-600 text-gray-50 text-lg my-2 hover:shadow-lg mt-6 "
                
                >
                  Send
                </motion.button>
        </form>


        {cartShow && (
        <Cart/>
      )}
    </motion.div>
  )
}

export default Contact