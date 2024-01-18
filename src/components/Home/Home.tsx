import TimeForm from "../TimeForm/TimeForm";
import TaskForm from "../TaskForm/TaskForm";
import TaskContainer from "../TaskContainer/TaskContainer";
import DoughnutContainer from "../DoughnutContainer/DoughnutContainer";
import Navbar from "../Navbar/Navbar";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";
import { addNewTask } from "../api/TaskApi";

const Home = () => {
  const [selectedDate, setDate] = useState(dayjs(new Date).format("DD/MM/YYYY"));

  // const dateHandler = (newDate: any) => {
  //   setDate(newDate.format("DD/MM/YYYY"));
  //   console.log(newDate);
  // }

  const addTaskHandler = (data:AddTask) => {
    addNewTask(data);
  }

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="p-5">
        {/* <div className="mx-auto flex justify-center my-3">
          <DatePicker label="SelectDate" value={selectedDate} onChange={newDate => dateHandler(newDate)} />
        </div>
        <TimeForm date={selectedDate}/> */}
        <TaskForm addTask={addTaskHandler}/>
        <TaskContainer />
        <DoughnutContainer />
      </main>
    </div>
  );
};

export default Home;
