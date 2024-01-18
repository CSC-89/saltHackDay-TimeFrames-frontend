import { FC } from "react"

type TaskItemProps = {
  deleteTask: () => void
  taskId: number
  taskInfo: Task
}


const TaskItem: FC<TaskItemProps> = ({taskInfo, deleteTask, taskId}) => {
  const deleteTaskHandler = () => {
    deleteTask();
  }

  return (
    <article className="flex justify-between bg-red-100">
      <h2>{taskInfo.content}</h2>
      <button onClick={deleteTask}>X</button>
    </article>
  )
}

export default TaskItem