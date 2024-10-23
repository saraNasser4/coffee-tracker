
import { CiCoffeeBean } from "react-icons/ci";

function Layout (props){
  
  const Header = (
    <header className="flex items-center justify-between max-w-[1260px] p-4 mx-auto dark:text-white h-20">
      <div>
        <h2 className="font-bold text-3xl md:text-4xl md:mt-4"><span className="bg-amber-900 pl-3 pr-1 text-white dark:text-black">C</span>affiend</h2>
        <p className="md:mt-1 md:text-lg">For coffee insatiates</p>
      </div>
      {props.darkAndLight}
      <button className="flex items-center gap-3 rounded-md bg-amber-900 text-white px-4 py-2 transition-all duration-500 hover:bg-amber-950 hover:translate-x-2">
        <p>Sign up free</p>
        <CiCoffeeBean size={20} />
      </button>
    </header>
  )

  const Footer = (
    <footer></footer>
  )
  return (
    <>
      {Header}
      <main>
        {props.children}
      </main>
      {Footer}
    </>
  )
}

export default Layout