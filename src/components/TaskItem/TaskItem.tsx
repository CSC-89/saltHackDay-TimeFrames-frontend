import { FC } from "react"

type TaskItemProps = {
  taskInfo: Task
}

const TaskItem: FC<TaskItemProps> = ({taskInfo}) => {
  return (
    <article className="flex bg-red-100">
      <h2>{taskInfo.content}</h2>
    </article>
  )
}

export default TaskItem