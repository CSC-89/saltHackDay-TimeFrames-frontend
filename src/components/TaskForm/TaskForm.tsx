import { SubmitHandler, useForm } from "react-hook-form";
import { FC, SyntheticEvent, useContext, useEffect, useState } from "react";
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
  const [type, setType] = useState<HTMLButtonElement>();
  const { register, handleSubmit } = useForm<FormValues>();
  const ctx = useContext(UserContext);

  const addTaskHandler: SubmitHandler<FormValues> = (data) => {
    if(!type) throw new Error("Must declare a type");

    const contentInput = document.getElementById(
      "content-input"
    ) as HTMLInputElement;
    const completionInput = document.getElementById(
      "completion-input"
    ) as HTMLInputElement;
    
    const typeValues = type!.value.split("-");
    console.log(typeValues[1])

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

  const setTypeHandler = (evt: SyntheticEvent) => {
    const target = evt.target as HTMLButtonElement;
    if (type) {
      type.classList.replace("border-white", "border-transparent");
      target.classList.replace("border-transparent", "border-white");
    }

    setType(target);
  };

  useEffect(() => {
    const starterTypeButton = document.getElementById("starter-type") as HTMLButtonElement;
    setType(starterTypeButton)
  }, [])
  
  return (
    <section className="border shadow-md rounded-lg bg-primary opacity-90 w-full mx-auto px-6 py-2 my-3">
      <form className="flex flex-col" onSubmit={handleSubmit(addTaskHandler)}>
        <input
          id="content-input"
          className="my-2 rounded-md border border-gray-600 pl-2"
          placeholder="What needs doing today?"
          {...register("content", { required: "This is required" })}
        />
        <div className="flex justify-left my-2">
          <label htmlFor="completionTime">Duration:</label>
          <input
            id="completion-input"
            className="w-12 rounded-md border border-gray-600 mx-4 text-center"
            type="number"
            {...register("completionTime", { required: "This is required" })}
          />
          Minutes
        </div>
        <div className="my-2">
        <h2 className="w-full mb-2 text-center bg-blue-100 rounded-md">Type</h2>
          <div className="grid grid-cols-3 items-center">
            <button
              id="starter-type"
              onClick={setTypeHandler}
              type="button"
              value="Exercise-purple"
              className="m-2 bg-purple-500 text-secondary w-20 rounded-md shadow-md mx-auto border border-white "
            >
              Exercise
            </button>
            <button
              onClick={setTypeHandler}
              type="button"
              value="Cleaning-blue"
              className="m-2 bg-blue-500 text-secondary w-20 rounded-md shadow-md mx-auto border border-transparent"
            >
              Cleaning
            </button>
            <button
              onClick={setTypeHandler}
              type="button"
              value="Study-yellow"
              className="m-2 bg-yellow-500 text-black w-20 rounded-md shadow-md mx-auto border border-transparent"
            >
              Study
            </button>
            <button
              type="button"
              onClick={setTypeHandler}
              value="Shopping-brown"
              className="m-2 bg-brown-500 text-secondary w-20 rounded-md shadow-md mx-auto border border-transparent"
            >
              Shopping
            </button>
            <button
              type="button"
              onClick={setTypeHandler}
              value="Travel-red"
              className="m-2 bg-red-500 text-secondary w-20 rounded-md shadow-md mx-auto border border-transparent"
            >
              Travel
            </button>
            <button
              type="button"
              onClick={setTypeHandler}
              value="Other-teal"
              className="m-2 bg-teal-500 text-secondary w-20 rounded-md shadow-md mx-auto border border-transparent"
            >
              Other
            </button>
          </div>
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
