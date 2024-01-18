import { SubmitHandler, useForm } from "react-hook-form";
import "./TimeForm.css";
import { FC } from "react";
import { BusyHours } from "../../types/GlobalTypes";

type FormValues = {
  date: Date;
  workTime: number;
  wakeTime: number;
  sleepTime: number;
};

type TimeFormProp = {
  date: string,
  updateFreeTime: (hours: BusyHours) => void
}

const TimeForm: FC<TimeFormProp> = ({date, updateFreeTime}) => {
  const { register, handleSubmit } = useForm<FormValues>();

  const submitHandler: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log(data);
    updateFreeTime({workTime: data.workTime, wakeTime: data.wakeTime, sleepTime: data.sleepTime});
  };

  // const submitHandler: SubmitHandler<FormValues> = (data: FormValues) => {
  //   console.log(data);
  // };

  return (
    <section className="shadow-md rounded-lg bg-blue-200 w-full mx-auto px-6 py-2">
      <form className="flex flex-col" onSubmit={handleSubmit(submitHandler)}>
        <input {...register("date")} value={date} hidden/>
        <div>
          <label className="flex justify-between">
            Working Hours
            <input
              className="time-input"
              type="number"
              {...register("workTime")}
            />
          </label>
        </div>
        <div>
          <label htmlFor="waking-hour">
            Wake Up
            <input
              className="time-input"
              type="number"
              {...register("wakeTime")}
            />
          </label>
          <label className="pl-6">
            Sleep
            <input
              className="time-input"
              type="number"
              {...register("sleepTime")}
            />
          </label>
        </div>
        <button className="button-green">Submit</button>
      </form>
    </section>
  );
};

export default TimeForm;
