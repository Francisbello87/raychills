import React, { useState, useEffect } from 'react'
import {MdAddShoppingCart, MdAdd, MdLogout} from 'react-icons/md'
import Avatar from '../img/avatar.png'
import Logo from '../img/logo.jpg'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, 
  signInWithRedirect, GoogleAuthProvider, getRedirectResult, onAuthStateChanged, signOut } from "firebase/auth";
import {app} from '../firebase.config'
import { actionType } from '../context/reducer'
import { useStateValue } from '../context/StateProvider'


const Header = () => {
    const firebaseAuth = getAuth(app)
    const provider = new GoogleAuthProvider()

    const [{user, cartShow, cartItems}, dispatch] = useStateValue()

    const [isMenu, setIsMenu] = useState(false)

    const [users, setUsers] = useState({})

    const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
 
    const login = async () =>{
      if(!user){
       const {user : {refreshToken, providerData}} = await signInWithPopup(firebaseAuth, provider)
       dispatch ({
           type: actionType.SET_USER,
           user: providerData[0],
       })
       localStorage.setItem('user', JSON.stringify(providerData[0]))
      }else{
        setIsMenu(!isMenu)
     }
   }

    const mobileLogin = async () =>{
       if(!users){
        const {users : {refreshToken, providerData}} = 
        await signInWithRedirect(firebaseAuth, provider)
        dispatch ({
            type: actionType.SET_USER,
            users: providerData[0],
        })
        localStorage.setItem('user', JSON.stringify(providerData[0]))
       }else{
          setIsMenu(!isMenu)
       }
    }
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(firebaseAuth, (provider) => {
        setUsers(provider)
        console.log('Users', provider);
      })
      return () => {
        unsubscribe()
      }
    }, [])
    const logout = () =>{
      setIsMenu(false)
      signOut(firebaseAuth)
      localStorage.clear()
      dispatch({
        type: actionType.SET_USER,
        users: null,
      })
    }
    const showCart = () => {
      dispatch({
        type: actionType.SET_CART_SHOW,
        cartShow: !cartShow,
      })
    }
  return (
    <header className='fixed w-screen z-50 p-3 px-4 md:p-6 md:px-16'>
        
        {width > 600 ? 
        /* Desktop Menu */
        <div className="hidden md:flex w-full py-3 h-full items-center justify-between -mt-6 bg-primary">
            <Link to={'/'}   className="flex items-center gap-2">
              <motion.div whileTap={{scale: 0.6}} className='flex items-end  cursor-pointer'>
                <img src={Logo} alt="Logo" className='w-20 rounded-full' />
                <p className='text-sm text-lighttextGray hover:text-headingColor ml-2'>Yoghurt, Smoothies, Yogo Fura, Juices</p>
                </motion.div>
            </Link>
          <div className="flex items-center gap-8">
          <motion.ul 
          initial={{opacity: 0, x:200}} 
          animate={{opacity: 1, x:0}} 
         exit={{opacity: 0, x:200}} 
          className='flex items-center gap-8 '>
                <Link to={'/'}>
                  <motion.li whileTap={{scale: 0.6}}  
                    className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                    Home
                  </motion.li>
                </Link>
                <Link to={'/about'}>
                  <motion.li whileTap={{scale: 0.6}}  
                    className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                    About Us
                  </motion.li>
                </Link>
                <motion.li whileTap={{scale: 0.6}}  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>
                  <Link to={'/contact'}>
                  Contact</Link></motion.li>
            </motion.ul>
            <div className='relative'>
                <motion.img whileTap={{scale: 0.6}} 
                src={user ? user.photoURL : Avatar} 
                onClick={login} 
                className='w-12 min-w-[48px] h-12 min-h-[48px] shadow-2xl cursor-pointer rounded-full
                 border-red-900' 
                 alt="userprofile"
                  />
             {
              isMenu && (
                <motion.div 
                initial={{opacity: 0, scale:0.6}} 
                animate={{opacity: 1, scale:1}} 
                exit={{opacity: 0, scale:0.6}} 
                className="w-40 bg-gray-200  shadow-xl rounded-lg flex flex-col absolute top-12 -right-14 mt-3">
                {
                  user && users.email === "ajadirasheedat@gmail.com" && (
                    <Link to={"/createItem"}><p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}>New Item <MdAdd/></p></Link>
                  )
                }
                <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>Logout <MdLogout/></p>
              </motion.div>
              )
             }
            </div>
            <div className="relative flex items-center justify-center" onClick={showCart}>
                <MdAddShoppingCart className='text-textColor text-2xl  cursor-pointer'/>
                {cartItems  && cartItems.length > 0 && (
                  <div className="w-5 rounded-full bg-textColor flex items-center justify-center absolute -top-3 -right-3">
                    <p className="text-sm text-white font-semibold">{cartItems.length}</p>
                  </div>
                )}
            </div>
          </div>
        </div> : 
        
        /* Mobile Menu */
        <div className="flex justify-between items-center md:hidden w-full h-full py-2 bg-primary -mt-3 ">
        <Link to={'/'}   className="flex items-center gap-2">
        <motion.img 
        src={Logo} alt="Logo" 
        className='w-16 h-15 rounded-full cursor-pointer' 
        whileTap={{scale: 0.6}} whileHover={{scale: 1.2}} 
        />
                {/* <motion.h3 >RayChills</motion.h3> */}
        </Link>
        <div className='relative'>
                <motion.img whileTap={{scale: 0.6}} 
                src={users ? users.photoURL : Avatar} 
                onClick={mobileLogin} 
                className='w-12 min-w-[48px] h-12 min-h-[48px] drop-shadow-md cursor-pointer rounded-full
                 border-red-900' 
                 alt="userprofile"
                  />
             {
              isMenu && (
                <motion.div 
                initial={{opacity: 0, scale:0.6}} 
                animate={{opacity: 1, scale:1}} 
                exit={{opacity: 0, scale:0.6}} 
                className="w-40 bg-gray-200  shadow-xl rounded-lg flex flex-col absolute top-12 -right-12 mt-3">
                {
                  users && users.email ===  "ajadirasheedat@gmail.com" && (
                    <Link to={"/createItem"}><p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}>New Item <MdAdd/></p></Link>
                  )
                }
                   <ul 
                className='flex flex-col'>
                  <Link to={'/'}>
                    <motion.li whileTap={{scale: 0.6}}  
                      className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2' 
                      onClick={() => setIsMenu(false)}>
                      Home
                    </motion.li>
                  </Link>
                  <Link to={'/about'}>
                    <motion.li whileTap={{scale: 0.6}}  
                      className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2' 
                      onClick={() => setIsMenu(false)}>
                      About Us
                    </motion.li>
                  </Link>
                <motion.li whileTap={{scale: 0.6}}  className='text-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer  hover:bg-slate-100 px-4 py-2' onClick={() => setIsMenu(false)}>Menu</motion.li>
            </ul>
                <p className='m-2 p-2 rounded-md shadow-md bg-gray-300 flex items-center justify-center gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out  text-textColor text-base' onClick={logout}>Logout <MdLogout/></p>
              </motion.div>
              )
             }
        </div>
        <div className="relative flex items-center justify-center" onClick={showCart}>
                <MdAddShoppingCart className='text-textColor text-2xl  cursor-pointer'/>
                {cartItems  && cartItems.length > 0 && (
                  <div className="w-5 rounded-full bg-cartNumBg flex items-center justify-center absolute -top-3 -right-3">
                    <p className="text-sm text-white font-semibold">{cartItems.length}</p>
                  </div>
                )}
        </div>
       
        </div>}
        

        
        
    </header>
  )
}

export default Header