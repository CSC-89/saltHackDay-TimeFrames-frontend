import TimeForm from "../TimeForm/TimeForm";
import TaskForm from "../TaskForm/TaskForm";
import TaskContainer from "../TaskContainer/TaskContainer";
import DoughnutContainer from "../DoughnutContainer/DoughnutContainer";
import Navbar from "../Navbar/Navbar";
import { DatePicker } from "@mui/x-date-pickers";
import { useState } from "react";
import dayjs from "dayjs";

const Home = () => {
  const [date, setDate] = useState(dayjs(new Date));

  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main className="p-5">
        <div className="mx-auto flex justify-center my-3">
          <DatePicker label="SelectDate" value={date} onChange={newDate => setDate(dayjs(newDate))} />
        </div>
        <TimeForm />
        <TaskForm />
        <TaskContainer />
        <DoughnutContainer />
      </main>
    </div>
  );
};

export default Home;
