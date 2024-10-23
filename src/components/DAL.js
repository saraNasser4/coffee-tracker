import { PiCoffeeFill, PiCoffeeBold } from "react-icons/pi";
function DAL (props){
  return (
    <button
        onClick={props.toggleDarkMode}
        className="bg-amber-100 dark:bg-amber-900 rounded-full p-2">
        {props.state ? <PiCoffeeBold size={30} /> : <PiCoffeeFill size={30}/>}
    </button>
  )
}

export default DAL