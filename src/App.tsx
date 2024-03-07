import styled from "styled-components";
import { ButtonType } from "@/types/ButtonType";
import { Button } from "@/components/common/Button";
import { useState } from "react";
import { getTodos, addTodo, deleteTodo, editTodo } from "@/api/todosAPI";
import { QueryClient, useMutation, useQuery } from "react-query";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./types/todoTypes";

function App() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { isLoading, isError, data } = useQuery("todos", getTodos);
  const queryClient = new QueryClient();
  const addMutation = useMutation(addTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    },
  });

  const editMutation = useMutation(editTodo);

  if (isLoading) {
    return <p>데이터를 불러오는 중입니다.</p>;
  }

  if (isError) {
    return <p>데이터를 불러오는데 오류가 발생했습니다.</p>;
  }
  const addButtonHandler = (e: React.MouseEvent) => {
    e.preventDefault();
    addMutation.mutate({
      id: uuidv4(),
      title,
      content,
      isDone: false,
    });
  };

  const deleteButtonHandler = (item: Todo) => {
    deleteMutation.mutate(item.id);
  };

  const completeButtonHandler = (item: Todo) => {
    editMutation.mutate({ ...item, isDone: true });
  };

  const cancelButtonHandler = (item: Todo) => {
    editMutation.mutate({ ...item, isDone: false });
  };

  return (
    <AppContainer>
      <ContentContainer>
        <TitleContainer>
          <Title>My Todo List</Title>
          <ReactText>React</ReactText>
        </TitleContainer>
        <InputForm>
          <InputContainer>
            <TitleText>제목</TitleText>
            <TitleInput
              value={title}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <ContentText>내용</ContentText>
            <ContentInput
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            />
          </InputContainer>
          <Button
            onClick={(e) => {
              addButtonHandler(e);
            }}
            type={ButtonType.ADD}
          >
            추가하기
          </Button>
        </InputForm>
        <TodoContainer>
          <WorkingContainer>
            <WorkingTitle>Working..</WorkingTitle>
            <WorkingList>
              {data ? (
                data
                  .filter((item) => item.isDone === true)
                  .map((item) => (
                    <WorkingTodoContainer>
                      <WorkingTodoTitle>{item.title}</WorkingTodoTitle>
                      <WorkingTodoContent>{item.content}</WorkingTodoContent>
                      <WorkingButtonContainer>
                        <Button
                          type={ButtonType.DELETE}
                          onClick={() => deleteButtonHandler(item)}
                        >
                          삭제하기
                        </Button>
                        <Button
                          type={ButtonType.COMPLETE}
                          onClick={() => completeButtonHandler(item)}
                        >
                          완료
                        </Button>
                      </WorkingButtonContainer>
                    </WorkingTodoContainer>
                  ))
              ) : (
                <p>작업 중인 todo가 없습니다.</p>
              )}
            </WorkingList>
          </WorkingContainer>
          <DoneContainer>
            <DoneTitle>Done..</DoneTitle>
            <DoneList>
              {data ? (
                data
                  .filter((item) => item.isDone === true)
                  .map((item) => (
                    <DoneTodoContainer>
                      <DoneTodoTitle>{item.title}</DoneTodoTitle>
                      <DoneTodoContent>{item.content}</DoneTodoContent>
                      <DoneButtonContainer>
                        <Button
                          type={ButtonType.DELETE}
                          onClick={() => deleteButtonHandler(item)}
                        >
                          삭제하기
                        </Button>
                        <Button
                          type={ButtonType.CANCEL}
                          onClick={() => cancelButtonHandler(item)}
                        >
                          취소
                        </Button>
                      </DoneButtonContainer>
                    </DoneTodoContainer>
                  ))
              ) : (
                <p>작업이 완료된 todo가 없습니다.</p>
              )}
            </DoneList>
          </DoneContainer>
        </TodoContainer>
      </ContentContainer>
    </AppContainer>
  );
}

export default App;

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 800px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid gray;
  height: 50px;
  width: 100%;
  padding: 10px;
`;

const Title = styled.p`
  font-size: 20px;
`;

const ReactText = styled.p`
  font-size: 20px;
`;

const InputForm = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  border-radius: 5px;
  background-color: lightgray;
  padding: 20px;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;
const TitleText = styled.p`
  font-size: 20px;
`;

const TitleInput = styled.input`
  border: none;
  border-radius: 5px;
  height: 30px;
`;

const ContentText = styled.p`
  font-size: 20px;
`;

const ContentInput = styled.input`
  border: none;
  border-radius: 5px;
  height: 30px;
`;

const TodoContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const WorkingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 10px;
`;

const WorkingTitle = styled.p`
  font-size: 20px;
`;

const WorkingList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const WorkingTodoContainer = styled.li`
  display: flex;
  flex-direction: column;
  border: 5px green solid;
  border-radius: 5px;
  width: 250px;
  padding: 10px;
  gap: 20px;
`;

const WorkingTodoTitle = styled.p`
  font-size: 20px;
`;

const WorkingTodoContent = styled.p`
  font-size: 15px;
`;

const WorkingButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;

const DoneContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 10px;
`;

const DoneTitle = styled.p`
  font-size: 20px;
`;

const DoneList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const DoneTodoContainer = styled.li`
  display: flex;
  flex-direction: column;
  border: 5px green solid;
  border-radius: 5px;
  width: 250px;
  padding: 10px;
  gap: 20px;
`;

const DoneTodoTitle = styled.p`
  font-size: 20px;
`;

const DoneTodoContent = styled.p`
  font-size: 15px;
`;

const DoneButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px;
`;
