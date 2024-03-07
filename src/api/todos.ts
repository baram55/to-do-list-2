import { Todo } from "@/types/todoTypes";
import axios from "axios";

export const getTodos = async () => {
  const { data } = await axios.get<Todo[]>("http://localhost:4000/todos");
  return data;
};
