import { Cancel } from "@mui/icons-material";
import { Progress } from "@material-tailwind/react";
import { FC } from "react";
import { getPercentage } from "../../helpers/getPercentage";

type TaskItemProps = {
  deleteTask: (id: number) => void;
  freeTime: number
  taskInfo: Task;
};

const TaskItem: FC<TaskItemProps> = ({ taskInfo, deleteTask, freeTime }) => {
  const freeTimeMinutes = freeTime * 60;

  const deleteTaskHandler = (id: number) => {
    deleteTask(id);
  };

  const percentage = getPercentage(taskInfo.completionTime, freeTimeMinutes);

  return (
    <article
      id={`task-${taskInfo.id}`}
      className="flex flex-col justify-between bg-red-100 my-1 p-1"
    >
      <div className="flex justify-between">
      <h2 className="text-sm my-2">{taskInfo.content}</h2>
      <Cancel onClick={() => deleteTaskHandler(taskInfo.id as number)} />
      </div>
      <Progress placeholder={undefined} value={percentage} color={taskInfo.typeColor as any} />
      <h3 className="text-xs">{`Only uses ${Math.floor(percentage)}% of your free time!`}</h3>
    </article>
  );
};

export default TaskItem;
