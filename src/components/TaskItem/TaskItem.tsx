import { Cancel } from "@mui/icons-material";
import { Progress } from "@material-tailwind/react";
import { FC } from "react";

type TaskItemProps = {
  deleteTask: (id: number) => void;
  taskInfo: Task;
};

const TaskItem: FC<TaskItemProps> = ({ taskInfo, deleteTask }) => {
  const deleteTaskHandler = (id: number) => {
    deleteTask(id);
  };

  const getPercentage = (smaller: number, larger: number) => {
    const difference = larger - smaller;
    console.log("smaller: ", smaller)
    console.log("difference: ",difference)
    const remainder = (difference / larger)*100;
    return 100 - remainder;
  }

  console.log(taskInfo);

  return (
    <article
      id={`task-${taskInfo.id}`}
      className="flex flex-col justify-between bg-red-100 my-1 p-1"
    >
      <div className="flex justify-between">
      <h2 className="text-sm my-2">{taskInfo.content}</h2>
      <Cancel onClick={() => deleteTaskHandler(taskInfo.id as number)} />
      </div>
      <Progress placeholder={undefined} value={getPercentage(5, 120)} color={taskInfo.typeColor as any} />
    </article>
  );
};

export default TaskItem;
