import axios from "axios";
const path = "https://localhost:7033/api/ToDo";

export const readTasks = async () => {
  const data = axios.get(path).then((results) => results.data);

  return data;
};

export const addNewTask = async (data: any) => {
  console.log(data.taskType);
  const addedTask = await axios
    .post(path, { content: data.content, completionTime:data.completionTime ,taskType: data.taskType ,typeColor: data.typeColor, taskId: data.taskId })
    .then((results) => results.data);

    return addedTask;
};

export const deleteTask = (id: number) => {
    axios.delete(`${path}/${id}`);
}
