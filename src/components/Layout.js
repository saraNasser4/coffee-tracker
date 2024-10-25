
import { CiCoffeeBean } from "react-icons/ci";

function Layout (props){
  
  const Header = (
    <header className="z-50 fixed top-0 left-0 right-0 max-w-[1220px] mx-auto flex items-center justify-between p-4 h-20 bg-white dark:bg-black">
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
    <footer className="mt-10 mb-5 text-center">
      <p>
        <span className="font-bold text-xl md:text-2xl mr-2"><span className="bg-amber-900 pl-3 pr-1 text-white dark:text-black">C</span>affiend</span>
        was made by <a target="_blank" href="https://github.com/saraNasser4" rel="noreferrer" className="text-amber-900 text-xl md:text-2xl font-medium underline">Sara</a> using TailwindCSS and React JS
      </p>

    </footer>
  )
  return (
    <div className="max-w-[1260px] mx-auto dark:text-white">
      {Header}
      <main>
        {props.children}
      </main>
      {Footer}
    </div>
  )
}

export default Layout