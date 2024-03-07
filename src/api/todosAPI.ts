import { Todo } from "@/types/todoTypes";
import axios from "axios";

const instance = axios.create({
  baseURL: import.meta.env.VITE_TEST_SERVER_URL,
});

export const getTodos = async () => {
  const { data } = await instance.get<Todo[]>("/todos");
  return data;
};

export const addTodo = async (newTodo: Todo) => {
  await instance.post("/todos", newTodo);
};

export const deleteTodo = async (todoId: string) => {
  await instance.delete(`/todos/${todoId}`);
};

export const editTodo = async (edit: Todo) => {
  await instance.patch(`/todos/${edit.id}`, edit);
};
