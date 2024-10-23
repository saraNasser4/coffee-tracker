
import { CiCoffeeBean } from "react-icons/ci";

function Layout (props){
  
  const Header = (
    <header>
      <>
        <h2>Caffiend</h2>
        <p>For coffee insatiates</p>
      </>
      {props.darkAndLight}
      <button>
        <p>Sig up free</p>
        <CiCoffeeBean />
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