import { FC } from 'react'
import TaskItem from '../TaskItem/TaskItem'

type TaskContainerProps = {
  deleteTask: (id: number) => void;
  freeTime: number
  tasks: Task[]
}

const TaskContainer: FC<TaskContainerProps> = ({tasks, deleteTask, freeTime}) => {
  return (
    <div className='shadow-md rounded-lg bg-blue-200 w-full mx-auto px-6 py-2'>
        {tasks.length ? tasks.map((elm, i) => {
          return <TaskItem key={i} taskInfo={elm} deleteTask={deleteTask} freeTime={freeTime} />
        }) : 
        <h3>Add some tasks</h3>
        } 
        
    </div>
  )
}

export default TaskContainer