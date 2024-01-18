import TimeForm from "../TimeForm/TimeForm";
import TaskForm from "../TaskForm/TaskForm";
import TaskContainer from "../TaskContainer/TaskContainer";
import DoughnutContainer from "../DoughnutContainer/DoughnutContainer";
import Navbar from "../Navbar/Navbar";
import { DatePicker } from "@mui/x-date-pickers";
import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { addNewTask, deleteTask, readTasks } from "../../api/TaskApi";
import { UserContext } from "../../context/userContext";
import { BusyHours, Task } from "../../types/GlobalTypes";
import { calculateFreeTime } from "../../helpers/calculateFreeTime";

const Home = () => {
  const [selectedDate, setDate] = useState(dayjs(new Date).format("DD/MM/YYYY"));
  const [tasks, setTasks] = useState<Task[]>([]);
  const ctx = useContext(UserContext);
  const [freeTime, setFreeTime] = useState(0);
  // const userId = ctx.id;

  // const dateHandler = (newDate: any) => {
  //   setDate(newDate.format("DD/MM/YYYY"));
  //   console.log(newDate);
  // }

  const updateFreeTime = ({wakeTime, sleepTime, workTime}: BusyHours) => {
    setFreeTime(calculateFreeTime(workTime, wakeTime, sleepTime));
  }

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

  console.log(freeTime);
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="p-5">
        {/* <div className="mx-auto flex justify-center my-3">
          <DatePicker label="SelectDate" value={selectedDate} onChange={newDate => dateHandler(newDate)} />
        </div> */}
        <TimeForm date={selectedDate} updateFreeTime={updateFreeTime} freeTime={freeTime} />
        <TaskForm addTask={addTaskHandler}/>
        <TaskContainer tasks={tasks} deleteTask={removeTaskfromList} freeTime={freeTime}/>
        {freeTime > 0 && <DoughnutContainer tasks={tasks} freeTime={freeTime} />}
      </main>
    </div>
  );
};

export default Home;
