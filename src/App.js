import Layout from "./components/Layout";
import Hero from "./components/Hero";
import CoffeeForm from "./components/CoffeeForm";
import History from "./components/History";
import Stats from "./components/Stats";
import DAL from "./components/DAL"

import { useState } from "react";

function App() {
  const [state, setState] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  const toggleDarkMode = ()=>{
    setState(!state)
    const isDarkMode = document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-white", !isDarkMode)
    document.body.classList.toggle("bg-black", isDarkMode)
  }

  const authenticatedContent = (
    <>
      <Stats />
      <History /> 
    </>
  )

  return (
    <Layout 
      darkAndLight={<DAL state={state} toggleDarkMode={toggleDarkMode} />} 
      showModal={showModal} 
      setShowModal={setShowModal}
      setIsAuthenticating={setIsAuthenticating} >
      <Hero />
      <CoffeeForm isAuthenticating={isAuthenticating} setShowModal={setShowModal} />
      {isAuthenticating && authenticatedContent}
    </Layout>
  );
}

export default App;
