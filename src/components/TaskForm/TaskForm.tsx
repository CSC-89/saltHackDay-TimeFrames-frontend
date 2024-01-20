import { SubmitHandler, useForm } from "react-hook-form";
import { FC, SyntheticEvent, useContext, useEffect, useState } from "react";
import { UserContext } from "../../context/userContext";
import { Task } from "../../types/GlobalTypes";
import { Input, InputNumber, Space } from "antd";
import { AttachMoneyTwoTone, CleaningServicesTwoTone, ConstructionTwoTone, DirectionsCarTwoTone, FitnessCenterTwoTone, LocalLibraryTwoTone, QuestionMarkTwoTone, ShoppingCartTwoTone } from "@mui/icons-material";

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
  const [duration, setDuration] = useState<number>(0);
  const [content, setContent] = useState<string>("");
  const ctx = useContext(UserContext);

  const addTaskHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();

    if (!type) throw new Error("Must declare a type");

    const typeValues = type!.value.split("-");

    addTask({
      content: content,
      completionTime: duration,
      taskType: typeValues[0],
      typeColor: typeValues[1],
      dayDataId: ctx.id,
    });

    setContent("")
    setDuration(0)
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
    const starterTypeButton = document.getElementById(
      "starter-type"
    ) as HTMLButtonElement;
    setType(starterTypeButton);
  }, []);

  return (
    <section className="border shadow-md rounded-lg bg-primary opacity-90 w-full mx-auto px-6 py-2 my-3">
      <form className="flex flex-col" onSubmit={addTaskHandler}>
        <Input id="content-input"
          className="my-2"
          placeholder="What needs doing today?"
          onChange={(evt) =>
            setContent(evt.target.value.length ? evt.target.value : "")
          }
          value={content}
        />
        <div className="flex justify-between mb-2">
          <label className="self-center">Duration: (mins)</label>
          <Space.Compact className="w-20 ml-2">
            <InputNumber id="duration-input"
              min={0}
              onChange={(value) => setDuration(value === null ? 0 : value)}
              value={duration}
            />
          </Space.Compact>
        </div>
        <div className="my-2">
          <h2 className="w-full mb-2 text-center bg-blue-100 rounded-md">
            Type
          </h2>
          <div className="grid grid-cols-4 items-center">
            <button
              id="starter-type"
              onClick={setTypeHandler}
              type="button"
              value="Exercise-purple"
              className="m-2 bg-purple-500 text-secondary w-10 rounded-md shadow-md mx-auto border border-white "
            >
              <FitnessCenterTwoTone />
            </button>
            <button
              onClick={setTypeHandler}
              type="button"
              value="Cleaning-blue"
              className="m-2 bg-blue-500 text-secondary w-10 rounded-md shadow-md mx-auto border border-transparent"
            >
              <CleaningServicesTwoTone />
            </button>
            <button
              onClick={setTypeHandler}
              type="button"
              value="Study-yellow"
              className="m-2 bg-yellow-500 text-black w-10 rounded-md shadow-md mx-auto border border-transparent"
            >
              <LocalLibraryTwoTone />
            </button>
            <button
              type="button"
              onClick={setTypeHandler}
              value="Shopping-brown"
              className="m-2 bg-brown-500 text-secondary w-10 rounded-md shadow-md mx-auto border border-transparent"
            >
              <ShoppingCartTwoTone />
            </button>
            <button
              type="button"
              onClick={setTypeHandler}
              value="Travel-red"
              className="m-2 bg-red-500 text-secondary w-10 rounded-md shadow-md mx-auto border border-transparent"
            >
              <DirectionsCarTwoTone />
            </button>
            <button
              type="button"
              onClick={setTypeHandler}
              value="Accounts-orange"
              className="m-2 bg-orange-500 text-secondary w-10 rounded-md shadow-md mx-auto border border-transparent"
            >
              <AttachMoneyTwoTone />
            </button>
            <button
              type="button"
              onClick={setTypeHandler}
              value="Other-indigo"
              className="m-2 bg-indigo-500 text-secondary w-10 rounded-md shadow-md mx-auto border border-transparent"
            >
              <ConstructionTwoTone />
            </button>
            <button
              type="button"
              onClick={setTypeHandler}
              value="Other-teal"
              className="m-2 bg-teal-500 text-secondary w-10 rounded-md shadow-md mx-auto border border-transparent"
            >
              <QuestionMarkTwoTone />
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
