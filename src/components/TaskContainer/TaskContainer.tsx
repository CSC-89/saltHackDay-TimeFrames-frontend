import { FC } from 'react'
import TaskItem from '../TaskItem/TaskItem'
import { deleteTask } from '../api/TaskApi'

type TaskContainerProps = {
  deleteTask: () => void;
  tasks: Task[]
}

const TaskContainer: FC<TaskContainerProps> = ({tasks, deleteTask}) => {
  return (
    <div className='shadow-md rounded-lg bg-blue-200 w-full mx-auto px-6 py-2'>
        {tasks.map((elm, i) => {
          return <TaskItem key={i} taskInfo={elm} deleteTask={deleteTask} />
        })} 
        
    </div>
  )
}

export default TaskContainer