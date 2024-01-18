import { SubmitHandler, useForm } from "react-hook-form";
import "./TimeForm.css";
import { FC, useState } from "react";
import { BusyHours } from "../../types/GlobalTypes";

type FormValues = {
  date: Date;
  workTime: number;
  wakeTime: number;
  sleepTime: number;
};

type TimeFormProp = {
  freeTime: number,
  date: string,
  updateFreeTime: (hours: BusyHours) => void
}

const TimeForm: FC<TimeFormProp> = ({date, updateFreeTime, freeTime}) => {
  const [selected, setSelected] = useState(false);
  const { register, handleSubmit } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = (data: FormValues) => {
    updateFreeTime({workTime: data.workTime, wakeTime: data.wakeTime, sleepTime: data.sleepTime});
    setSelected(true);
  };

  const resetHoursHandler = () => {
    updateFreeTime({workTime: 0, wakeTime: 0, sleepTime: 0 });
    setSelected(false);
  }

  return (
    <section className="shadow-md rounded-lg bg-primary opacity-90 w-full mx-auto px-6 py-2">
      {!selected ? <form className="flex flex-col" onSubmit={handleSubmit(submitHandler)}>
        <input {...register("date", { required: "This is required" })} value={date} hidden/>
        <div className="my-2 flex justify-between">
          <label htmlFor="workInput" className="flex justify-between">
            Working Hours:
          </label>
            <input
            id="work-input"
              className="w-12 rounded-sm ml-4 text-center"
              type="number"
              min={0}
              max={12}
              {...register("workTime", { required: "This is required" })}
            />
        </div>
        <h2 className="w-full mb-2 text-center bg-secondary rounded-md">Day length (hours)</h2>
        <div>
          <label htmlFor="waking-hour">
            Wake Up
            <input
            id="wake-input"
              className="w-12 rounded-sm ml-4 text-center"
              type="number"
              min={0}
              {...register("wakeTime", { required: "This is required" })}
            />
          </label>
          <label className="pl-6">
            Bed
            <input
            id="sleep-input"
              className="w-12 rounded-sm ml-4 text-center"
              type="number"
              min={0}
              max={23}
              {...register("sleepTime")}
            />
          </label>
        </div>
        <button
          type="submit"
          className="m-2 mt-4 bg-buttonSubmit text-buttonSubmitFont w-28 rounded-md shadow-md mx-auto "
        >
          Set Free Time
        </button>
      </form> : (
        <div className="flex flex-col justify-center h-28">
        <h2 className="text-sm">You have <span>{freeTime}</span> hours of free time today!</h2>
        <button
          onClick={resetHoursHandler}
          className="m-2 bg-buttonSubmit text-buttonSubmitFont w-28 rounded-md shadow-md mx-auto "
        >
          Reset
        </button>
        </div>
      )}
    </section>
  );
};

export default TimeForm;
