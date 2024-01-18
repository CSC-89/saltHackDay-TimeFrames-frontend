import { FC } from 'react'
import TaskItem from '../TaskItem/TaskItem'

type TaskContainerProps = {
  deleteTask: (id: number) => void;
  userId: number
  tasks: Task[]
}

const TaskContainer: FC<TaskContainerProps> = ({tasks, deleteTask, userId}) => {
  return (
    <div className='shadow-md rounded-lg bg-blue-200 w-full mx-auto px-6 py-2'>
        {tasks.length ? tasks.map((elm, i) => {
          return <TaskItem key={i} taskInfo={elm} deleteTask={deleteTask} />
        }) : 
        <h3>Add some tasks</h3>
        } 
        
    </div>
  )
}

export default TaskContainer