import { FC } from 'react'
import TaskItem from '../TaskItem/TaskItem'

type TaskContainerProps = {
  deleteTask: (id: number, dbId: number) => void;
  tasks: Task[]
}

const TaskContainer: FC<TaskContainerProps> = ({tasks, deleteTask}) => {
  return (
    <div className='shadow-md rounded-lg bg-blue-200 w-full mx-auto px-6 py-2'>
        {tasks.map((elm, i) => {
          return <TaskItem key={i} taskInfo={elm} deleteTask={deleteTask} taskId={i} />
        })} 
        
    </div>
  )
}

export default TaskContainer