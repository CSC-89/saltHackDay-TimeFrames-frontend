import { Cancel } from "@mui/icons-material"
import { FC, SyntheticEvent } from "react"

type TaskItemProps = {
  deleteTask: (id: number) => void
  taskInfo: Task
}


const TaskItem: FC<TaskItemProps> = ({taskInfo, deleteTask}) => {

  const deleteTaskHandler = (id: number) => {
    deleteTask(id);
  }
  
  return (
    <article id={`task-${taskInfo.id}`} className="flex justify-between bg-red-100 my-1 p-1">
      <h2 className="text-sm">{taskInfo.content}</h2>
      <Cancel onClick={() => deleteTaskHandler(taskInfo.id as number)} />
    </article>
  )
}

export default TaskItem