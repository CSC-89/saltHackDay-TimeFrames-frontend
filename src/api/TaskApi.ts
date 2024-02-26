import axios from "axios";
import { Task } from "../types/GlobalTypes";
const path = "https://localhost:7033/api/ToDo";

export const readTasks = async () => {
    const data = axios.get(path).then((results) => results.data);

    return data;
};

export const addNewTask = async (data: Task) => {
    const addedTask = await axios
        .post(path, {
            content: data.content,
            completionTime: data.completionTime,
            taskType: data.taskType,
            typeColor: data.typeColor,
        })
        .then((results) => results.data);

    return addedTask;
};

export const deleteTask = (id: number) => {
    axios.delete(`${path}/${id}`);
};
