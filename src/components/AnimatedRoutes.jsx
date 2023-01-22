import React from 'react'
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./About";
import CreateContainer from "./CreateContainer";
import MainContainer from "./MainContainer";
import { AnimatePresence } from 'framer-motion';
import  Confirmation  from './Confirmation';
import  Contact from './Contact';

const AnimatedRoutes = () => {
    const location = useLocation();
  return (
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/*" element={<MainContainer />} />
            <Route path="/createItem" element={<CreateContainer />} />
            <Route path="/about" element={<About />} />
            <Route path="/confirmation" element={<Confirmation />} />
            <Route path="/contact" element={<Contact />} />
        </Routes>
  </AnimatePresence>
  )
}

export default AnimatedRoutes