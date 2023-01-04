import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import {RiRefreshFill} from 'react-icons/ri'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import emptyCart from "../img/undraw_empty_cart_co35.svg"
import CartItem from './CartItem'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import {app} from '../firebase.config'

const Cart = () => {

  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()
  const [{cartShow, cartItems, user}, dispatch] = useStateValue()
  const [tot, setTot] = useState(0)
  const [flag, setFlag] = useState(1)
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow,
    })
  }
  useEffect(() => {
    let totalPrice = cartItems.reduce(function (accumulator, item){
      return accumulator + item.qty * item.price
    }, 0);
    setTot(totalPrice)
  }, [tot, flag])

  const clearCart = () => {
    dispatch({
      type: actionType.SET_CARTITEMS,
      cartItems: [],
    });

    localStorage.setItem("cartItems", JSON.stringify([]));
  };
  const login = async () =>{
    if(!user){
     const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
     dispatch ({
         type: actionType.SET_USER,
         user: providerData[0],
     })
     localStorage.setItem('user', JSON.stringify(providerData[0]))
    }
 }
  return (
    <motion.div 
    initial={{opacity: 0, x:200}}
    animate={{opacity: 1, x:0}}
    exit={{opacity: 0, x:200}}
    className=' fixed top-0 right-0 w-full md:w-375 h-screen bg-white 
    drop-shadow flex flex-col z-[101]'>
        <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
           <motion.div whileTap={{scale:0.8}} onClick={showCart}>
            <MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
           </motion.div>
           <p className='text-textColor text-lg font-semibold'>
                Cart
            </p>
            <motion.p 
            whileTap={{scale: 0.8}} 
            className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100
            rounded-md hover:shadow-md duration-100 ease-in-out transition-all cursor-pointer
            text-textColor text-base'
            onClick={clearCart}>
                Clear <RiRefreshFill/>
            </motion.p>
        </div>
        <div className='w-full h-full bg-cartBg rounded-t-[2rem] flex flex-col'>
            {/* Cart Items Section */}
            <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3
            overflow-y-scroll scrollbar-none'>
              {
                cartItems && cartItems.map(item => (
                  <CartItem key={item.id} 
                  item={item}
                  setFlag={setFlag}
                  flag={flag}
                  />
                ))
              }
            </div>

            {/* cart summary section */}
            {cartItems && cartItems.length > 0 ? (
            <div className='w-full flex-1 bg-cartSummary rounded-t-[2rem]
            flex flex-col items-center justify-evenly px-8 py-2'>
              <div className='w-full flex items-center justify-between'>
                <p className='text-gray-300 text-lg'>Sub Total</p>
                <p className='text-gray-300 text-lg'>#{tot}</p>
              </div>
              <div className='w-full flex items-center justify-between'>
                <p className='text-gray-300 text-lg'>Delivery</p>
                <p className='text-gray-300 text-lg'>#500</p>
              </div>

              <div className='w-full border-b border-gray-100 my-2'></div>

              <div className='w-full flex items-center justify-between'>
                <p className='text-gray-200 text-xl font-semibold'>Total</p>
                <p className='text-gray-200 text-xl font-semibold'>#{tot + 500}</p>
              </div>
             {
              user ? (
                <motion.button 
                whileTap={{scale: 0.8}}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-green-400 
                to-green-600 text-gray-50 text-lg my-2 hover:shadow-lg">
                  Check Out
                </motion.button>
              ): (
                <motion.button 
                whileTap={{scale: 0.8}}
                type="button"
                className="w-full p-2 rounded-full bg-gradient-to-tr from-green-400 
                to-green-600 text-gray-50 text-lg my-2 hover:shadow-lg"
                onClick={login}>
                  Login to checkout
                </motion.button>
              )
             }
            </div>
            ): (
              <div className='w-full h-full flex flex-col items-center
              justify-center gap-6 '>
                <img src={emptyCart} alt="Empty Cart" className='w-275'/>
                <p className='text-xl text-gray-200 font-semibold'>
                  Add some delights to your cart
                </p>
              </div>
            )}
           
        </div>
    </motion.div>
  )
}

export default Cart