import "./TimeForm.css";
import { FC, SyntheticEvent, useState } from "react";
// import { BusyHours } from "../../types/GlobalTypes";
import { calculateFreeTime } from "../../helpers/calculateFreeTime";
import dayjs, { Dayjs } from "dayjs";
import { TimePicker, InputNumber, Space } from "antd";

type FormValues = {
  date: Date;
  workTime: number;
  wakeTime: number;
  sleepTime: number;
};

type TimeFormError = {
  status: boolean;
  message?: string;
};

type TimeFormProp = {
  freeTime: number;
  date: string;
  updateFreeTime: (freeTime: number) => void;
};

const TimeForm: FC<TimeFormProp> = ({ updateFreeTime, freeTime }) => {
  const [selected, setSelected] = useState(false);
  const [workValue, setWorkValue] = useState<number>(0);
  const [wakeValue, setWakeValue] = useState<Dayjs | null>(null);
  const [sleepValue, setSleepValue] = useState<Dayjs | null>(null);
  const [errorStatus, setErrorStatus] = useState<TimeFormError>({
    status: false,
  });

  const submitHandler = (evt: SyntheticEvent) => {
    evt.preventDefault();

    const wakingHours: number = parseInt(
      sleepValue?.diff(wakeValue?.format(), "hour", true).toFixed(1) as string
    );

    const diff = wakingHours - workValue;

    if (diff <= 0) {
      setErrorStatus({
        status: true,
        message:
          "This would mean you have 0 hours of free time.... Are you sure?",
      });
      return;
    }

    updateFreeTime(diff);
    setSelected(true);
  };

  const resetHoursHandler = () => {
    updateFreeTime(0);
    setSelected(false);
  };

  const resetErrorHandler = () => setErrorStatus({ status: false });

  return (
    <section className="shadow-md rounded-lg bg-primary opacity-90 w-full mx-auto px-6 py-2">
      {errorStatus.status ? (
        <div className="flex flex-col justify-center h-28">
          <h2 className="text-md text-center">{errorStatus.message}</h2>
          <button
            onClick={resetErrorHandler}
            className="m-2 bg-buttonSubmit text-buttonSubmitFont w-28 rounded-md shadow-md mx-auto "
          >
            Back
          </button>
        </div>
      ) : !selected ? (
        <form className="flex flex-col" onSubmit={submitHandler}>
          <div className="my-2 flex justify-between">
            <label htmlFor="workInput" className="flex justify-between">
              Working Hours:
            </label>
            <Space.Compact>
              <InputNumber
                min={0}
                max={12}
                onChange={(value) => setWorkValue(value === null ? 0 : value)}
                value={workValue}
              />
            </Space.Compact>
          </div>
          <h2 className="w-full mb-2 text-center bg-blue-100 rounded-md">
            Day length (hours)
          </h2>
          <div className="flex">
            <TimePicker
              placeholder="Wake"
              minuteStep={15}
              format={"HH:mm"}
              value={wakeValue}
              onChange={(value) => setWakeValue(value)}
            />
            <p className="mx-3"> - </p>
            <TimePicker
              placeholder="Bed"
              showNow={false}
              minuteStep={15}
              format={"HH:mm"}
              value={sleepValue}
              onChange={(value) => setSleepValue(value)}
            />
          </div>

          <button
            type="submit"
            className="m-2 mt-4 bg-buttonSubmit text-buttonSubmitFont border border-gray-600 w-28 rounded-md shadow-md mx-auto "
          >
            Set Free Time
          </button>
        </form>
      ) : (
        <div className="flex flex-col justify-center h-28">
          <h2 className="text-md text-center">
            You have <span className="text-secondary">{freeTime} hours</span> of
            free time today!
          </h2>
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
