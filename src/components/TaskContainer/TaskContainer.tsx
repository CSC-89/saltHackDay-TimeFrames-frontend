import { FC } from 'react'
import TaskItem from '../TaskItem/TaskItem'

type TaskContainerProps = {
  tasks: Task[]
}

const TaskContainer: FC<TaskContainerProps> = ({tasks}) => {
  return (
    <div className='shadow-md rounded-lg bg-blue-200 w-full mx-auto px-6 py-2'>
        {tasks.map((elm, i) => {
          return <TaskItem key={i} taskInfo={elm} />
        })} 
        
    </div>
  )
}

export default TaskContainer