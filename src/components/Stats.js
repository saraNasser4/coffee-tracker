import { IoStatsChart } from "react-icons/io5";
import { calculateCoffeeStats, calculateCurrentCaffeineLevel, getTopThreeCoffees, statusLevels } from "../utils";
import { useAuth } from '../context/AuthProvider'
function Stats(){
  const { globalData } = useAuth();
  const stats = calculateCoffeeStats(globalData);

  const caffeineLevel = calculateCurrentCaffeineLevel(globalData);
  const warningLeverl = Number(caffeineLevel) <= statusLevels['low'].maxLevel ? 
    'low' :
    Number(caffeineLevel) <= statusLevels['moderate'].maxLevel ?
    'moderate' : 
    'high';

  const statsCards = [
    {title: 'Active Caffeine Level', lg: true, data: [caffeineLevel, 'mg']},
    {title: 'Daily Caffeine', lg: false, data: [stats.daily_caffeine, 'mg']},
    {title: 'Avg # of Coffees', lg: false, data: [stats.average_coffees]},
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
                    <h4 className="w-20 inline-block ml-10 text-center" style={{color: statusLevels[warningLeverl].color, background: statusLevels[warningLeverl].background}}>Low</h4>
                    <p className="pt-6">{statusLevels[warningLeverl].description}</p>
                  </>
                  )}
              </p>
              
            </div>
          )
        })}
      </div>
      <table className="w-full">
        <thead className="bg-gray-200/60 dark:bg-[#181818]">
          <tr className="[&>*]:p-4 [&>*]:text-center [&>*]:sm:text-start">
            <th>Coffee Name</th>
            <th>Number of Purchase</th>
            <th>Percentage of Total</th>
          </tr>
        </thead>
        <tbody>
          {getTopThreeCoffees(globalData).map((coffee, index)=> {
            return (
              <tr key={index} className="hover:bg-gray-200/60 dark:hover:bg-[#181818] border dark:border-[#181818] cursor-pointer [&>*]:p-2 [&>*]:md:p-4">
                <td>{coffee.coffeeName}</td>
                <td>{coffee.count}</td>
                <td>{coffee.percentage}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </section>
  )
}

export default Stats