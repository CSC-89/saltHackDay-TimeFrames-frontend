import { FC } from 'react'
import TaskItem from '../TaskItem/TaskItem'
import { Task } from '../../types/GlobalTypes';

type TaskContainerProps = {
  deleteTask: (id: number) => void;
  freeTime: number
  tasks: Task[]
}

const TaskContainer: FC<TaskContainerProps> = ({tasks, deleteTask, freeTime}) => {
  return (
    <div className='shadow-md rounded-lg bg-primary opacity-90 shadow-md w-full mx-auto px-6 py-2'>
        {tasks.length ? tasks.map((elm, i) => {
          return <TaskItem key={i} taskInfo={elm} deleteTask={deleteTask} freeTime={freeTime} />
        }) : 
        <h3>Add some tasks</h3>
        } 
        
    </div>
  )
}

export default TaskContainer