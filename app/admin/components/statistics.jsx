"use client"
import {Bar} from "react-chartjs-2";
import {BarElement, CategoryScale, Chart, LinearScale, Tooltip} from "chart.js";

export default function Statistics({articles, categories, messagesCount, commentsCount}) {
  Chart.register(CategoryScale, LinearScale, BarElement, Tooltip)

  const chartDataCategories = {
    labels: categories.map((cat) => cat.name),
    datasets: [
      {
        label: 'Articles',
        data: categories.map((cat) => cat._count.Article),
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

  const chartOptionsCategories = {
    indexAxis: 'y',
    scales: {
      x: {
        ticks: {
          stepSize: 1
        }
      }
    }
  }

  return(
    <section className="container mx-auto">
      <h3 className="text-[35px] text-center font-medium">Statistics</h3>
      <div className="flex flex-wrap justify-center lg:justify-start gap-[50px] mt-[30px] rounded-[10px]">
        <div className="flex flex-col w-full lg:w-auto max-w-[500px] gap-[15px]">
          <div className="h-fit text-center bg-white shadow-md p-[10px_15px] rounded-[10px]">
            <h5 className="text-[25px] font-medium mb-[15px]">{articles.length}</h5>
            <h4 className="text-[18px] font-medium">Total articles</h4>
          </div>
          <div className="h-fit text-center bg-white shadow-md p-[10px_15px] rounded-[10px]">
            <h5 className="text-[25px] font-medium mb-[15px]">{messagesCount}</h5>
            <h4 className="text-[18px] font-medium">Total messages</h4>
          </div>
          <div className="h-fit text-center bg-white shadow-md p-[10px_15px] rounded-[10px]">
            <h5 className="text-[25px] font-medium mb-[15px]">{commentsCount}</h5>
            <h4 className="text-[18px] font-medium">Total comments</h4>
          </div>
        </div>
        <div className="w-full max-w-[500px] bg-white shadow-md p-[10px_15px] rounded-[10px]">
          <h4 className="text-[18px] font-medium mb-[15px]">Articles per category</h4>
          <Bar data={chartDataCategories} options={chartOptionsCategories} />
        </div>
      </div>
    </section>
  )
}