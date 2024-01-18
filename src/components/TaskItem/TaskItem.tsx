import { Cancel } from "@mui/icons-material"
import { FC, SyntheticEvent } from "react"

type TaskItemProps = {
  deleteTask: (id: number, dbId: number) => void
  taskId: number,
  taskInfo: Task
}


const TaskItem: FC<TaskItemProps> = ({taskInfo, deleteTask, taskId}) => {

  const deleteTaskHandler = (evt: SyntheticEvent) => {
    const target = evt.target as HTMLButtonElement;
    const listId = target.parentElement!.id.split("-")[1]
    console.log(listId)
    deleteTask(parseInt(listId), taskInfo.id);
  }

  console.log("INFO:", taskInfo);
  return (
    <article id={`task-${taskId}`} className="flex justify-between bg-red-100 my-1 p-1">
      <h2 className="text-sm">{taskInfo.content}</h2>
      <Cancel onClick={deleteTaskHandler} />
    </article>
  )
}

export default TaskItem