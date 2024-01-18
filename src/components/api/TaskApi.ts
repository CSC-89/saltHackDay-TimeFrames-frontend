import axios from "axios"
const url = "https://localhost:7033/api/ToDo"

export const readTasks = async () => {
   await axios.get(url).then(results => results);
}

export const addNewTask = async (data: any) => {
    await axios.post(url, { content: data.content, typeColor: data.typeColor}).then(results => console.log(results));
 }