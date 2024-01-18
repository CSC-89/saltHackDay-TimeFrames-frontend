import TimeForm from "../TimeForm/TimeForm";
import TaskForm from "../TaskForm/TaskForm";
import TaskContainer from "../TaskContainer/TaskContainer";
import DoughnutContainer from "../DoughnutContainer/DoughnutContainer";
import Navbar from "../Navbar/Navbar";
import { DatePicker } from "@mui/x-date-pickers";
import { useEffect, useState } from "react";
import dayjs from "dayjs";
import { addNewTask, deleteTask, readTasks } from "../api/TaskApi";

const Home = () => {
  const [selectedDate, setDate] = useState(dayjs(new Date).format("DD/MM/YYYY"));
  const [tasks, setTasks] = useState<Task[]>([]);

  // const dateHandler = (newDate: any) => {
  //   setDate(newDate.format("DD/MM/YYYY"));
  //   console.log(newDate);
  // }

  const addTaskHandler = (data: Task) => {
    addNewTask(data);
    setTasks([...tasks, data])
  }
  
  const fetchTasks = async () => {
    setTasks(await readTasks());
  };

  const removeTaskfromList = (id: number) => {
    const toRemove = tasks.findIndex(t => t.id === id)
    console.log("index: ", toRemove);
    console.log("id", id);
    const newArr = [...tasks];
    
    setTasks(newArr.splice(toRemove, 1));
    deleteTask(id);
  }

  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="p-5">
        {/* <div className="mx-auto flex justify-center my-3">
          <DatePicker label="SelectDate" value={selectedDate} onChange={newDate => dateHandler(newDate)} />
        </div>
        <TimeForm date={selectedDate}/> */}
        <TaskForm addTask={addTaskHandler}/>
        <TaskContainer tasks={tasks} deleteTask={removeTaskfromList} />
        <DoughnutContainer />
      </main>
    </div>
  );
};

export default Home;
