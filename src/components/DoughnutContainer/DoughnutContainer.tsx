import { FC } from "react"
import { useState } from "react";
import { Chart, ArcElement } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { getPercentage } from "../../helpers/getPercentage";
Chart.register(ArcElement);

type DoughtnutProps = {
  tasks: Task[]
}

const DoughnutContainer: FC<DoughtnutProps> = ({tasks}) => {
 
function removeDuplicates(arr: string[]) {
    let unique:string[] = [];
    arr.forEach(element => {
        if (!unique.includes(element)) {
            unique.push(element);
        }
    });
    return unique;
}
const tasksByGroup = removeDuplicates(tasks.map(t => t.taskType));

  const [data, setData] = useState({
    labels: tasks.map((data) => data.taskType),
    datasets: [
      {
        labels: tasks.map((data) => data.taskType),
        data: tasks.map((data) => data.taskType),
        //backgroundColor: tasks.map((data) => data.typeColor),
        backgroundColor: ["red", "blue", "green"],
        hoverOffset: 4,
      },
    ],
    borderColor: "black",
  });

  return (
    <div id="pie-chart">
        <Doughnut data={data} />
      </div>
  )
}

export default DoughnutContainer