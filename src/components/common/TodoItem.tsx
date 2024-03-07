import React from "react";
import styled from "styled-components";
import { Button } from "./Button";
import { Todo } from "@/types/todoTypes";
import { ButtonType, ButtonUnionType } from "@/types/ButtonType";

export const TodoItem = ({
  item,
  type,
  deleteHandler,
  editHandler,
}: {
  item: Todo;
  type: ButtonUnionType;
  deleteHandler: (item: Todo) => void;
  editHandler: (item: Todo) => void;
}) => {
  return (
    <TodoListContainer>
      <TodoTitle>{item.title}</TodoTitle>
      <TodoContent>{item.content}</TodoContent>
      <ButtonContainer>
        <Button type={ButtonType.DELETE} onClick={() => deleteHandler(item)} />
        <Button type={type} onClick={() => editHandler(item)} />
      </ButtonContainer>
    </TodoListContainer>
  );
};

const TodoListContainer = styled.li`
  display: flex;
  flex-direction: column;
  border: 5px green solid;
  border-radius: 5px;
  width: 250px;
  padding: 10px;
  gap: 20px;
`;

const TodoTitle = styled.h3`
  font-size: 20px;
`;

const TodoContent = styled.p`
  font-size: 15px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
