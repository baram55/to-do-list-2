import styled from "styled-components";
import { ButtonType } from "@/types/ButtonType";
import { Button } from "@/components/common/Button";
import { getTodos } from "@/api/todosAPI";
import { useQuery, useQueryClient } from "react-query";
import { useDeleteTodo, useEditTodo, useInput } from "./hooks/todoHooks";
import { TodoItem } from "./components/common/TodoItem";

function App() {
  const queryClient = useQueryClient();
  const { isLoading, isError, data } = useQuery("todos", getTodos);
  const { title, setTitle, content, setContent, addButtonHandler } =
    useInput(queryClient);
  const deleteButtonHandler = useDeleteTodo(queryClient);
  const { completeButtonHandler, cancelButtonHandler } =
    useEditTodo(queryClient);

  if (isLoading) {
    return <p>데이터를 불러오는 중입니다.</p>;
  }

  if (isError) {
    return <p>데이터를 불러오는데 오류가 발생했습니다.</p>;
  }

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
          />
        </InputForm>
        <TodoContainer>
          <WorkingContainer>
            <WorkingTitle>Working..</WorkingTitle>
            <WorkingList>
              {data ? (
                data
                  .filter((item) => item.isDone === false)
                  .map((item) => (
                    <TodoItem
                      item={item}
                      type={ButtonType.COMPLETE}
                      deleteHandler={() => deleteButtonHandler(item)}
                      editHandler={() => completeButtonHandler(item)}
                    />
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
                    <TodoItem
                      item={item}
                      type={ButtonType.CANCEL}
                      deleteHandler={() => deleteButtonHandler(item)}
                      editHandler={() => cancelButtonHandler(item)}
                    />
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

const TitleContainer = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid gray;
  height: 50px;
  width: 100%;
  padding: 10px;
`;

const Title = styled.h1`
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
const TitleText = styled.label`
  font-size: 20px;
`;

const TitleInput = styled.input`
  border: none;
  border-radius: 5px;
  height: 30px;
`;

const ContentText = styled.label`
  font-size: 20px;
`;

const ContentInput = styled.input`
  border: none;
  border-radius: 5px;
  height: 30px;
`;

const TodoContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

const WorkingContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 10px;
`;

const WorkingTitle = styled.h2`
  font-size: 20px;
`;

const WorkingList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const DoneContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin: 20px;
  gap: 10px;
`;

const DoneTitle = styled.h2`
  font-size: 20px;
`;

const DoneList = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;
