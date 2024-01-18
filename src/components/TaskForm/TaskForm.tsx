import { MenuItem, Select } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { FC, useContext } from "react";
import { AddTask } from "@mui/icons-material";
import { UserContext } from "../../context/userContext";
import { Task } from "../../types/GlobalTypes";

type FormValues = {
  content: string;
  completionTime: number;
  typeInfo: string;
  dayDataId: number;
};

type TaskFormProps = {
  addTask: (data: Task) => void;
};

const TaskForm: FC<TaskFormProps> = ({ addTask }) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const ctx = useContext(UserContext);

  const addTaskHandler: SubmitHandler<FormValues> = (data) => {
    const contentInput = document.getElementById("content-input") as HTMLInputElement
    const completionInput = document.getElementById("completion-input") as HTMLInputElement;    
    const typeValues = data.typeInfo.split("-");
    
    addTask({
      content: data.content,
      completionTime: data.completionTime,
      taskType: typeValues[0],
      typeColor: typeValues[1],
      dayDataId: ctx.id,
    });

    contentInput.value = "";
    completionInput.value = "";
  };

  return (
    <section className="border shadow-md rounded-lg bg-primary opacity-90 w-full mx-auto px-6 py-2 my-3">
      <form className="flex flex-col" onSubmit={handleSubmit(addTaskHandler)}>
        <input id="content-input"
          className="my-2"
          placeholder="What needs doing?"
          {...register("content", { required: "This is required" })}
        />
        <div className="flex justify-between my-2">
          <label htmlFor="completionTime">
            <h2 className="">Completion time</h2>
          </label>
          <input id="completion-input"
            className="w-10 ml-20"
            type="number"
            {...register("completionTime", { required: "This is required" })}
          />
        </div>
        <div className="my-2">
          Type:
          <select id="type-input" {...register("typeInfo", { required: "This is required" })}>
            <option value="Study-yellow">Study</option>
            <option value="Exercise-purple">Exercise</option>
            <option value="Cleaning-blue">Cleaning</option>
            <option value="Other-teal">Other</option>
          </select>
        </div>
        <button
          type="submit"
          className="m-2 bg-buttonSubmit text-buttonSubmitFont w-28 rounded-md shadow-md mx-auto "
        >
          Add Task
        </button>
      </form>
    </section>
  );
};

export default TaskForm;
