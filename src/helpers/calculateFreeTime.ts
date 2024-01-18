export const calculateFreeTime = (work: number, wake: number, sleep: number) => {
    const awakeHours = sleep - wake;
    return awakeHours - work
}