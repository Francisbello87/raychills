import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import {
  About,
  AnimatedRoutes,
  CreateContainer,
  Footer,
  Header,
  MainContainer,
} from "./components";
import { AnimatePresence } from "framer-motion";
import { useStateValue } from "./context/StateProvider";
import { getAllStoreCollections } from "./utils/firebaseFunctions";
import { useEffect } from "react";
import { actionType } from "./context/reducer";

const App = () => {
  const [{}, dispatch] = useStateValue();

  const fetchData = async () => {
    await getAllStoreCollections().then((data) => {
      dispatch({
        type: actionType.SET_STORE_COLLECTIONS,
        storeCollections: data,
      });
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <AnimatePresence mode="wait">
      <div className="w-screen h-auto flex flex-col bg-primary">
        <Header />

        <main className="mt-14 md:mt-24 px-4 md:px-16 py-8 w-full">
          <AnimatedRoutes />
        </main>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;
