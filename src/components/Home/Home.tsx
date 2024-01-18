import TimeForm from "../TimeForm/TimeForm";
import TaskForm from "../TaskForm/TaskForm";
import TaskContainer from "../TaskContainer/TaskContainer";
import DoughnutContainer from "../DoughnutContainer/DoughnutContainer";
import Navbar from "../Navbar/Navbar";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";

const Home = () => {
  const [date, setDate] = useState(dayjs(new Date).format("DD/MM/YYYY"));

  const dateHandler = (date: any) => {
    setDate(date.format("DD/MM/YYYY"));
  }

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="p-5">
        <div className="mx-auto flex justify-center my-3">
          <DatePicker label="SelectDate" defaultValue={dayjs(new Date).format("DD/MM/YYYY")} value={date} onChange={newDate => dateHandler(newDate)} />
        </div>
        <TimeForm date={date}/>
        <TaskForm />
        <TaskContainer />
        <DoughnutContainer />
      </main>
    </div>
  );
};

export default Home;
