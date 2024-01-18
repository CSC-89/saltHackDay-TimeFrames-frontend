export type Task = {
    id?: number
    content: string,
    completionTime: number,
    taskType: string
    typeColor: string,
    dayDataId: number,
  }

  export type BusyHours= {
    workTime: number,
    wakeTime: number,
    sleepTime: number
  }