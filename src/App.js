import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CoffeeForm from "./components/CoffeeForm";
import History from "./components/History";
import Stats from "./components/Stats";
import DAL from "./components/DAL"

import { useAuth } from "./context/AuthProvider";
import { useEffect, useState } from "react";

function App() {
  const { globalUser } = useAuth()
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  
  
  const toggleDarkMode = ()=>{
    setIsDarkMode(prev => !prev);
    const isDarkMode = document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-white", !isDarkMode);
    document.body.classList.toggle("bg-black", isDarkMode);
  }
  
  
  const authenticatedContent = (
    <>
      <Stats />
      <History /> 
    </>
  )
  
  useEffect(()=> {
    setIsAuthenticating(!!globalUser);
  }, [globalUser])
  
  return (
    <Layout 
      darkAndLight={<DAL isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />} 
      showModal={showModal} 
      setShowModal={setShowModal}
      setIsAuthenticating={setIsAuthenticating}
      isAuthenticating={isAuthenticating} 
    >
      <Hero />
      <CoffeeForm isAuthenticating={isAuthenticating} setShowModal={setShowModal} />
      {isAuthenticating && authenticatedContent}
    </Layout>
  );
}

export default App;
