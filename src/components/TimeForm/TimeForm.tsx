import { SubmitHandler, useForm } from "react-hook-form";
import "./TimeForm.css";
import { FC, useState } from "react";
import { BusyHours } from "../../types/GlobalTypes";
import { calculateFreeTime } from "../../helpers/calculateFreeTime";

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
    console.log(data);
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
        <div>
          <label className="flex justify-between">
            Working Hours
            <input
              className="time-input"
              type="number"
              {...register("workTime", { required: "This is required" })}
            />
          </label>
        </div>
        <div>
          <label htmlFor="waking-hour">
            Wake Up
            <input
              className="time-input"
              type="number"
              {...register("wakeTime", { required: "This is required" })}
            />
          </label>
          <label className="pl-6">
            Bed
            <input
              className="time-input"
              type="number"
              {...register("sleepTime")}
            />
          </label>
        </div>
        <button
          type="submit"
          className="m-2 bg-buttonSubmit text-buttonSubmitFont w-28 rounded-md shadow-md mx-auto "
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
