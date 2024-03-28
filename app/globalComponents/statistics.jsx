"use client"
import {Bar} from "react-chartjs-2";
import {BarElement, CategoryScale, Chart, LinearScale, Tooltip} from "chart.js";
import {useContext} from "react";
import VisitatorsCountContext from "@/app/globalComponents/statisticsCountContext";

export default function Statistics({totalArticles = 0}) {
  const visitatorCount = useContext(VisitatorsCountContext)
  Chart.register(CategoryScale, LinearScale, BarElement, Tooltip)
  const chartData = {
    labels: ['Luni', 'Marți', 'Miercuri', 'Joi', 'Vineri', 'Sâmbătă', 'Duminică'],
    datasets: [
      {
        label: 'Numărul de postări pe zi',
        data: [12, 51, 15, 10, 13, 8, 18],
        backgroundColor: [
          'rgba(244, 67, 54, 0.2)',
        ],
        borderColor: [
          'rgb(244, 67, 54)',
        ],
        borderWidth: 1,
      },
    ],
  };
  return(
    <section className="container mx-auto">
      <h3 className="text-[35px] text-center font-medium">Statistics</h3>
      <div className="flex flex-wrap justify-center lg:justify-start gap-[50px] mt-[30px] rounded-[10px]">
        <div className="flex flex-col w-full lg:w-auto max-w-[500px] gap-[15px]">
          <div className="h-fit text-center bg-white shadow-md p-[10px_15px] rounded-[10px]">
            <h5 className="text-[25px] font-medium mb-[15px]">{totalArticles}</h5>
            <h4 className="text-[18px] font-medium">Total articles</h4>
          </div>
          <div className="h-fit text-center bg-white shadow-md p-[10px_15px] rounded-[10px]">
            <h5 className="text-[25px] font-medium mb-[15px]">43</h5>
            <h4 className="text-[18px] font-medium">Views today</h4>
          </div>
          <div className="h-fit text-center bg-white shadow-md p-[10px_15px] rounded-[10px]">
            <h5 className="text-[25px] font-medium mb-[15px]">{visitatorCount}</h5>
            <h4 className="text-[18px] font-medium">Online users now</h4>
          </div>
        </div>
        <div className="w-full max-w-[500px] bg-white shadow-md p-[10px_15px] rounded-[10px]">
          <h4 className="text-[18px] font-medium mb-[15px]">Views this week</h4>
          <Bar data={chartData}/>
        </div>
        <div className="w-full max-w-[500px] bg-white shadow-md p-[10px_15px] rounded-[10px]">
          <h4 className="text-[18px] font-medium mb-[15px]">Views this week</h4>
          <Bar data={chartData} options={{indexAxis: 'y'}} />
        </div>
      </div>
    </section>
  )
}