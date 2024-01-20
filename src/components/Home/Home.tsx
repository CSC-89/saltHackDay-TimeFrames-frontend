import TimeForm from "../TimeForm/TimeForm";
import TaskForm from "../TaskForm/TaskForm";
import TaskContainer from "../TaskContainer/TaskContainer";
import DoughnutContainer from "../DoughnutContainer/DoughnutContainer";
import Navbar from "../Navbar/Navbar";

import {  useEffect, useState } from "react";
import dayjs from "dayjs";
import { addNewTask, deleteTask, readTasks } from "../../api/TaskApi";
import { Task } from "../../types/GlobalTypes";
import { calculateFreeTime } from "../../helpers/calculateFreeTime";

const Home = () => {
  const [selectedDate] = useState(dayjs().toString());
  const [tasks, setTasks] = useState<Task[]>([]);
  const [freeTime, setFreeTime] = useState(0);

  const updateFreeTime = (calculatedFreeTime: number) => {
    setFreeTime(calculatedFreeTime);
  }

  const addTaskHandler = async (data: Task) => {
    const response = await addNewTask(data);

    setTasks([...tasks, response])
  }
  
  const fetchTasks = async () => {
    setTasks(await readTasks());
  };

  const removeTaskfromList = (id: number) => {
    const toDelete = tasks.findIndex(t => t.id === id);

    const newArr = [...tasks];
    newArr.splice(toDelete, 1);

    setTasks(newArr);
    deleteTask(id);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="p-5 grid grid-cols-1 lg:grid-cols-2">
        <TimeForm date={selectedDate} updateFreeTime={updateFreeTime} freeTime={freeTime} />
        <TaskForm addTask={addTaskHandler}/>
        <TaskContainer tasks={tasks} deleteTask={removeTaskfromList} freeTime={freeTime}/>
        {freeTime > 0 && <DoughnutContainer tasks={tasks} freeTime={freeTime} />}
      </main>
    </div>
  );
};

export default Home;
