import axios from "axios";
const path = "https://localhost:7033/api/ToDo";

export const readTasks = async () => {
  const data = axios.get(path).then((results) => {
    console.log(results.data);
    return results.data;
  });
  return data;
};

export const addNewTask = async (data: any) => {
  await axios
    .post(path, { content: data.content, typeColor: data.typeColor })
    .then((results) => console.log(results));
};

export const deleteTask = (id: number) => {
    axios.delete(`${path}/${id}`)
    .then(() => console.log('Delete successful'));
}
