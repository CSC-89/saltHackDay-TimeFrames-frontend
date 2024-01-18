import { FC } from "react";
import { useState } from "react";
import { Chart, ArcElement } from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { getPercentage } from "../../helpers/getPercentage";
Chart.register(ArcElement);

type TaskGroupData = {
  type: string;
  totalMinutes: number;
  percentage: number;
  taskColor: string;
};

type DoughtnutProps = {
  tasks: Task[];
  freeTime: number;
};

const DoughnutContainer: FC<DoughtnutProps> = ({ tasks, freeTime }) => {
  function removeDuplicates(arr: string[]) {
    let unique: string[] = [];
    arr.forEach((element) => {
      if (!unique.includes(element)) {
        unique.push(element);
      }
    });
    return unique;
  }

  const tasksByGroup = removeDuplicates(tasks.map((t) => t.taskType));
  const taskGroupData = tasksByGroup.map((t): TaskGroupData => {
    const x = tasks.filter((task) => task.taskType === t);
    const minutes = x
      .map((task) => task.completionTime)
      .reduce((a, b) => a + b);
    const color = x.find((task) => task.taskType == t)?.typeColor;

    return {
      type: t,
      totalMinutes: minutes,
      percentage: getPercentage(minutes, freeTime * 60),
      taskColor: color as any,
    };
  });

  if (taskGroupData.length) {
    taskGroupData.push({
      type: "Free Time",
      totalMinutes: 0,
      percentage:
        100 - taskGroupData.map((x) => x.percentage).reduce((a, b) => a + b),
      taskColor: "green",
    });
  }

  const data = {
    labels: taskGroupData.map((data) => data.type),
    datasets: [
      {
        labels: taskGroupData.map((data) => data.type),
        data: taskGroupData.map((data) => data.percentage),
        //backgroundColor: tasks.map((data) => data.typeColor),
        backgroundColor: taskGroupData.map((data) => data.taskColor),
        hoverOffset: 4,
      },
    ],
    borderColor: "black",
  };

  return (
    <div id="pie-chart">
      <Doughnut data={data} />
    </div>
  );
};

export default DoughnutContainer;
