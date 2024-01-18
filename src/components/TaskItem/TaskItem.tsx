import { Cancel } from "@mui/icons-material"
import { FC, SyntheticEvent } from "react"

type TaskItemProps = {
  deleteTask: (id: number) => void
  taskInfo: Task
}


const TaskItem: FC<TaskItemProps> = ({taskInfo, deleteTask}) => {

  const deleteTaskHandler = (evt: SyntheticEvent) => {
    const target = evt.target as HTMLButtonElement;
    const id = target.parentElement!.id.split("-")[1]
    console.log(id)
    deleteTask(parseInt(id));
  }

  console.log("INFO:", taskInfo);
  return (
    <article id={`task-${taskInfo.id}`} className="flex justify-between bg-red-100 my-1 p-1">
      <h2 className="text-sm">{taskInfo.content}</h2>
      <Cancel onClick={deleteTaskHandler} />
    </article>
  )
}

export default TaskItem