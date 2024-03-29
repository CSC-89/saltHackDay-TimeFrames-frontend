// import { Progress } from "@material-tailwind/react";
import { FC } from "react";
import { getPercentage } from "../../helpers/getPercentage";
import { Task } from "../../types/GlobalTypes";
import { DeleteTwoTone } from "@mui/icons-material";
import { Progress } from 'antd';

type TaskItemProps = {
  deleteTask: (id: number) => void;
  freeTime: number;
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
      className="flex flex-col justify-between bg-secondary rounded-md shadow-md my-1 p-2"
    >
      <div className="flex justify-between align-items-middle px-1">
        <h2 className="text-sm my-2 self-center">{taskInfo.content}</h2>
      {/* <Cancel onClick={() => deleteTaskHandler(taskInfo.id as number)} /> */}
      <button  className="border border-gray-400 bg-red-200 px-1 self-center rounded-md shadow-md my-2" onClick={() => deleteTaskHandler(taskInfo.id as number)} ><DeleteTwoTone /></button>
      </div>
      {freeTime > 0 && (
        <div>
      <Progress className="my-0" percent={percentage} showInfo={false} strokeColor={taskInfo.typeColor} />
        <details className="text-xs mt-1">
          <div className="flex justify-between">
          <h3 className="text-xs">Only uses <span className="text-buttonSubmitFont">{`${Math.floor(
            percentage
            )}`}%</span> of your free time!</h3>
          </div>
        </details>
        </div>
      )}
    </article>
  );
};

export default TaskItem;
