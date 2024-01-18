import { MenuItem, Select } from "@mui/material";
import { SubmitHandler, useForm } from "react-hook-form";
import { FC } from "react";
import { AddTask } from "@mui/icons-material";

type FormValues = {
  content: string,
  typeColor: string
};


type TaskFormProps = {
  addTask : (data: Task) => void;
}

const TaskForm: FC<TaskFormProps> = ({addTask}) => {
  const { register, handleSubmit } = useForm<FormValues>();
  const id = 1;

  const addTaskHandler: SubmitHandler<FormValues> = (data) => {
    console.log(data);
    addTask({content: data.content, typeColor: data.typeColor, dayDataId: id });
  };

  return (
    <section className="border shadow-md rounded-lg bg-blue-200 w-full mx-auto px-6 py-2 my-3">
      <form className="flex flex-col" onSubmit={handleSubmit(addTaskHandler)}>
        <input placeholder="What needs doing?" {...register("content")} />
        <div>
          <label htmlFor="waking-hour">
            Type: 
            <select {...register("typeColor")}>
              <option value="#000000">Study</option>
              <option value="#222222">Exercise</option>
              <option value="#444444">Cleaning</option>
              <option value="#666666">Other</option>
            </select>
            
          </label>
        </div>
        <button className="button-green">Submit</button>
      </form>
    </section>
  )
}

export default TaskForm