import TimeForm from "../TimeForm/TimeForm";
import TaskForm from "../TaskForm/TaskForm";
import TaskContainer from "../TaskContainer/TaskContainer";
import DoughnutContainer from "../DoughnutContainer/DoughnutContainer";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <div className="flex flex-col items-center">
      <Navbar />
      <main>
        <TimeForm />
        <TaskForm />
        <TaskContainer />
        <DoughnutContainer />
      </main>
    </div>
  );
};

export default Home;
