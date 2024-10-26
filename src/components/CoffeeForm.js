import { MdEdit } from 'react-icons/md';
import { coffeeOptions } from '../utils';
import { useState } from 'react';


function CoffeeForm (){
  const btnsStyle = "text-black rounded-md p-2 hover:border-[3px] hover:p-[2px] hover:border-amber-900 hover:bg-amber-200 dark:hover:bg-amber-900 ";
  const selectStyle = "outline-none w-full bg-amber-100 dark:bg-amber-200 text-black rounded-md p-3";
  
  const [coffeeSelection, setCoffeeSelection] = useState(null)
  const [showCoffeeTypes, setShowCoffeeTypes] = useState(false)
  const [coffeeCost, setCoffeeCost] = useState(0)
  const [hour, setHour] = useState(0)
  const [min, setMin] = useState(0)


  const handleCoffeeBtns = (option)=> {
    setCoffeeSelection(option);
    setShowCoffeeTypes(false)
  }
  const handleSubminForm = ()=> {
    
  }

  return (
    <section className="p-6 [&>h3]:font-semibold [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:tracking-tight [&>h3]:my-6">
      <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-semibold tracking-tight"><span><MdEdit /></span>Start Tracking Today</h2>
      <h3>Select your coffee</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 lg:gap-4">
        {coffeeOptions.slice(0,5).map((option, index)=> {
          return(
            <button key={index} onClick={()=> handleCoffeeBtns(option.name)} className={`${btnsStyle} ${coffeeSelection === option.name && !showCoffeeTypes ? 'border-amber-900 !bg-amber-200 dark:!bg-amber-900 dark:text-white p-[2px] border-[2px]' : 'bg-amber-100 dark:bg-amber-200'}`}>
              <h6 className="font-bold">{option.name}</h6>
              <p>{option.caffeine} mg</p>
            </button>
          )
        })}
        <button 
          onClick={()=> {
            setShowCoffeeTypes(!showCoffeeTypes)
            setCoffeeSelection(null)
          }}
          className={`${btnsStyle} ${showCoffeeTypes ? 'border-amber-900 !bg-amber-200 dark:!bg-amber-900 dark:text-white p-[2px] border-[2px]' : 'bg-amber-100 dark:bg-amber-200'}`}>
          <h6 className="font-bold">Other</h6>
          <p>n/a</p>
        </button>
      </div>
      {showCoffeeTypes &&
       <select id="coffee-list" name="coffee-list" onChange={(e)=> setCoffeeSelection(e.target.value)} className={`${selectStyle} appearance-none my-6`}>
        <option value={null}>Select type</option>
        {coffeeOptions.map((option, index)=> {
          return(
            <option key={index} value={option.name}>{option.name} ({option.caffeine}mg)</option>
          )
        })}
       </select> 
      }
      <h3>Add the cost ($)</h3>
      <input type="number" onChange={(e)=> setCoffeeCost(e.target.value)} value={coffeeCost} placeholder="4.50" min='1' className={selectStyle}/>
      <h3>Time since consumption</h3>
      <div className="sm:flex justify-between [&>*]:w-full gap-4">
        <div>
          <h4 className="font-semibold">Hours</h4>
          <input type="number" min='1' max='23' onChange={(e)=> setHour(e.target.value)} value={hour} className={selectStyle}/>
        </div>
        <div>
          <h4 className="font-semibold mt-6 mb-3 sm:m-0">Mins</h4>
          <input type="number" min='0' max='45' step='5' onChange={(e)=> setMin(e.target.value)} value={min} className={selectStyle}/>
        </div>
      </div>
      <button 
        onClick={handleSubminForm}
        className='bg-amber-900 hover:bg-amber-950 text-white font-bold py-2 px-4 sm:px-8 mx-auto w-[100%] mt-6 sm:flex sm:w-auto rounded-md'>
        <p>Add Entry</p>
      </button>
    </section>
  )
}

export default CoffeeForm