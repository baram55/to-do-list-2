import { addTodo, deleteTodo, editTodo } from "@/api/todosAPI";
import { Todo } from "@/types/todoTypes";
import { useState } from "react";
import { useMutation, useQueryClient } from "react-query";
import { v4 as uuidv4 } from "uuid";

export const useInput = () => {
  const queryClient = useQueryClient();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });
  const addButtonHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    if (title === "" || content === "")
      return alert("내용 또는 내용을 입력하세요.");

    addMutation.mutate({
      id: uuidv4(),
      title,
      content,
      isDone: false,
    });
  };

  return { title, setTitle, content, setContent, addButtonHandler };
};

export const useDeleteTodo = () => {
  const queryClient = useQueryClient();
  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteButtonHandler = (item: Todo) => {
    deleteMutation.mutate(item.id);
  };

  return deleteButtonHandler;
};

export const useEditTodo = () => {
  const queryClient = useQueryClient();
  const editMutation = useMutation(editTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const completeButtonHandler = (item: Todo) => {
    editMutation.mutate({ ...item, isDone: true });
  };

  const cancelButtonHandler = (item: Todo) => {
    editMutation.mutate({ ...item, isDone: false });
  };

  return { completeButtonHandler, cancelButtonHandler };
};
