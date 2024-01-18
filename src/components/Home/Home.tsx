import TimeForm from '../TimeForm/TimeForm'
import TaskForm from '../TaskForm/TaskForm'
import TaskContainer from '../TaskContainer/TaskContainer'
import DoughnutContainer from '../DoughnutContainer/DoughnutContainer'

const Home = () => {
  return (
    <div>Home
      <TimeForm />
      <TaskForm />
      <TaskContainer />
      <DoughnutContainer />
    </div>
    
  )
}

export default Home