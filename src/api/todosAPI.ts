import { Todo } from "@/types/todoTypes";
import axios from "axios";

export const getTodos = async () => {
  const { data } = await axios.get<Todo[]>("http://localhost:4000/todos");
  return data;
};

export const addTodo = async (newTodo: Todo) => {
  await axios.post("http://localhost:4000/todos", newTodo);
};

export const deleteTodo = async (todoId: string) => {
  await axios.delete(`http://localhost:4000/todos/${todoId}`);
};

export const editTodo = async (todoId: string, edit: Todo) => {
  await axios.patch(`http://localhost:4000/todos/${todoId}`, edit);
};
