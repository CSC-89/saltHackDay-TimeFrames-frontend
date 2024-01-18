import TimeForm from "../TimeForm/TimeForm";
import TaskForm from "../TaskForm/TaskForm";
import TaskContainer from "../TaskContainer/TaskContainer";
import DoughnutContainer from "../DoughnutContainer/DoughnutContainer";
import Navbar from "../Navbar/Navbar";
import { DatePicker } from "@mui/x-date-pickers";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { addNewTask, deleteTask, readTasks } from "../api/TaskApi";
import { UserContext } from "../../context/userContext";

const Home = () => {
  const [selectedDate, setDate] = useState(dayjs(new Date).format("DD/MM/YYYY"));
  const [tasks, setTasks] = useState<Task[]>([]);
  const ctx = useContext(UserContext);
  const freeTime = 6.0;
  // const userId = ctx.id;

  // const dateHandler = (newDate: any) => {
  //   setDate(newDate.format("DD/MM/YYYY"));
  //   console.log(newDate);
  // }

  const addTaskHandler = async (data: Task) => {
    const response = await addNewTask(data);
    console.log(response);

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
      <main className="p-5">
        {/* <div className="mx-auto flex justify-center my-3">
          <DatePicker label="SelectDate" value={selectedDate} onChange={newDate => dateHandler(newDate)} />
        </div>
        <TimeForm date={selectedDate}/> */}
        <TaskForm addTask={addTaskHandler}/>
        <TaskContainer tasks={tasks} deleteTask={removeTaskfromList} freeTime={freeTime}/>
        <DoughnutContainer />
      </main>
    </div>
  );
};

export default Home;
