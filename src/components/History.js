import { FaHistory } from "react-icons/fa";
import { SiBuymeacoffee } from "react-icons/si";

import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, getCaffeineAmount, timeSinceConsumption } from "../utils";

function History (){

  return (
    <section className="p-6">
      <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-semibold tracking-tight"><FaHistory /> History</h2>
      <p className="text-lg md:text-xl tracking-tight my-4 font-medium">Hover for more information!</p>
      <div className="mx-auto my-6 max-w-[1000px] grid grid-cols-8 sm:grid-cols-10 md:grid-cols-12 gap-4">
        {
          Object.keys(coffeeConsumptionHistory)
          .sort((a,b)=> b - a)
          .map((utcTime, index)=> {
            const coffee = coffeeConsumptionHistory[utcTime];
            const timeSinceConsume = timeSinceConsumption(utcTime);
            const originalAmount = getCaffeineAmount(coffee.name);
            const remainingAmount = calculateCurrentCaffeineLevel({ [utcTime]: coffee });
            const summery = `${coffee.name} | ${timeSinceConsume} | (${remainingAmount}mg/${originalAmount}mg)`
            return(
              <div title={summery} key={index} className="cursor-pointer relative hover:[&>span]:!block">
                <SiBuymeacoffee size={30} />
              </div>
            )
          })
        }
      </div>
    </section>
  )
}

export default History