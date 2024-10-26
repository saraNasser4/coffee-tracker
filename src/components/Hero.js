import { FaCheck, FaExclamationCircle } from "react-icons/fa";
function Hero (){
  const paragraphs = ['Tracking every coffee', 'Measuring your blood caffeine levels', 'Costing and quanitifying your addition']

    return (
      <section className="mt-32 p-6">
        <h1 className="font-bold text-4xl md:text-5xl">Coffee Tracking for Coffee <span className="border-b-4 border-dotted">Fiends!</span></h1>
        <h3 className="text-2xl md:text-3xl my-6 md:my-8 font-semibold">Try <span className="font-bold"><span className="bg-amber-900 pl-3 pr-1 text-white dark:text-black">C</span>affiend</span> and start...</h3>
        {paragraphs.map((text, index)=> {
          return(
            <div key={index} className="flex items-center gap-3 md:text-xl mb-2">
              <FaCheck />
              <p>{text}</p>
            </div>
          )
        })}
        <div className="bg-amber-100 dark:bg-amber-300 dark:text-black p-4 rounded-md max-w-[650px] my-6">
          <div className="flex items-center gap-2 text-xl md:text-2xl font-bold">
            <FaExclamationCircle /> 
            <h4>Did you know...</h4>
          </div>
          <h5 className="text-[17px] md:text-xl my-4 font-bold">That caffeine's half-life is about 5 hours?</h5>
          <p className="md:text-lg font-medium">This means that after 5 hours, half the caffeine you consumed is still in your system, keeping you alert longer! so if you drink a cup of coffee with 200mg of caffeine, 5 hours, later, you'll still have about 100 mg of caffeine in your system.</p>
        </div>
      </section>
    )
  }
  
  export default Hero