import axios, { AxiosResponse } from "axios";
import { Todo } from "./todo";

// interface Todo {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// }

const fetchData = async () => {
  try {
    const response: AxiosResponse<Todo> = await axios.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log("Todo:", response.data);
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      // Handle Axios errors
      console.error("Axios Error:", error.message);
      if (error.response) {
        // The request was made, but the server responded with a status code outside the range of 2xx
        console.error("Status:", error.response.status);
        console.error("Data:", error.response.data);
      }
    } else {
      // Handle other errors
      console.error("Error:", error.message);
    }
  }
};

fetchData();
