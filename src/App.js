import Authentication from "./components/Authentication";
import CoffeeForm from "./components/CoffeeForm";
import Hero from "./components/Hero";
import History from "./components/History";
import Layout from "./components/Layout";
import Modal from "./components/Modal";
import Stats from "./components/Stats";

function App() {
  return (
    <>
      <Authentication />
      <CoffeeForm />
      <Hero />
      <History /> 
      <Layout />
      <Modal />
      <Stats />
    </>
  );
}

export default App;
