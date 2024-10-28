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

  const toggleDarkMode = ()=>{
    setState(!state)
    const isDarkMode = document.body.classList.toggle("dark");
    document.body.classList.toggle("bg-white", !isDarkMode)
    document.body.classList.toggle("bg-black", isDarkMode)
  }

  const isAuthentication = true 
  const authenticatedContent = (
    <>
      <Stats />
      <History /> 
    </>
  )

  return (
    <Layout darkAndLight={<DAL state={state} toggleDarkMode={toggleDarkMode} />} showModal={showModal} setShowModal={setShowModal} >
      <Hero />
      <CoffeeForm isAuthentication={isAuthentication} setShowModal={setShowModal} />
      {isAuthentication && authenticatedContent}
    </Layout>
  );
}

export default App;
