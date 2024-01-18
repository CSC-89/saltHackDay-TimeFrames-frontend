import axios from "axios";
const url = "https://localhost:7033/api/ToDo";

export const readTasks = async () => {
  const data = axios.get(url).then((results) => {
    console.log(results.data);
    return results.data;
  });
  return data;
};

export const addNewTask = async (data: any) => {
  await axios
    .post(url, { content: data.content, typeColor: data.typeColor })
    .then((results) => console.log(results));
};
