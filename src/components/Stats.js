import { IoStatsChart } from "react-icons/io5";
import { calculateCurrentCaffeineLevel, coffeeConsumptionHistory, statusLevels } from "../utils";

function Stats(){
  const stats = {
    daily_caffeine: 240, 
    daily_cost: 6.8,
    average_coffees: 2.3,
    total_cost: 220,
  }
  const caffeineLevel = calculateCurrentCaffeineLevel(coffeeConsumptionHistory)

  const statsCards = [
    {title: 'Active Caffeine Level', lg: true, data: [caffeineLevel, 'mg']},
    {title: 'Daily Caffeine', lg: false, data: [stats.daily_caffeine, 'mg']},
    {title: 'Avg # of Coffees', lg: false, data: [stats.average_coffees, 'mg']},
    {title: 'Daily Cost ($)', lg: false, data: ['$',stats.daily_cost]},
    {title: 'Total cost', lg: false, data: ['$',stats.total_cost]},
  ]


  return (
    <section className="p-6">
      <h2 className="flex items-center gap-2 text-3xl md:text-4xl font-semibold tracking-tight"><IoStatsChart /> Stats</h2>
      <div className="grid grid-cols-2 gap-4 my-8">
        {statsCards.map((card, index)=> {
          return(
            <div key={index} className={`bg-amber-100 dark:bg-amber-200 text-black p-4 ${card.lg ? 'col-span-2' : ''}`}>
              <h3 className=" text-xl md:text-2xl tracking-tight my-4 font-semibold">{card.title}</h3>
              <p className={`${Number(card.data[0]) || card.lg ? '[&>:first-child]:text-3xl [&>:first-child]:font-semibold' : '[&>:last-child]:text-3xl [&>:last-child]:font-semibold'}`}>
                <span>{card.data[0]}</span>
                <span>{card.data[1]}</span>
                {card.lg && (
                  <>
                    <h4 className="w-20 inline-block ml-10 text-center" style={{color: statusLevels['low'].color, background: statusLevels['low'].background}}>Low</h4>
                    <p className="pt-6">{statusLevels['low'].description}</p>
                  </>
                  )}
              </p>
              
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Stats