import styled from "styled-components";

function App() {
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
            <TitleInput />
            <ContentText>내용</ContentText>
            <ContentInput />
          </InputContainer>
          <AddButton>추가하기</AddButton>
        </InputForm>
        <TodoContainer>
          <WorkingContainer>
            <WorkingTitle>Working..</WorkingTitle>
            <WorkingList>
              <WorkingTodoContainer>
                <WorkingTodoTitle>workingTodo 제목</WorkingTodoTitle>
                <WorkingTodoContent>workingTodo 내용</WorkingTodoContent>
                <WorkingButtonContainer>
                  <WorkingDeleteButton>삭제하기</WorkingDeleteButton>
                  <WorkingCompleteButton>완료</WorkingCompleteButton>
                </WorkingButtonContainer>
              </WorkingTodoContainer>
            </WorkingList>
          </WorkingContainer>
          <DoneContainer>
            <DoneTitle>Done..</DoneTitle>
            <DoneList>
              <DoneTodoContainer>
                <DoneTodoTitle>DoneTodo 제목</DoneTodoTitle>
                <DoneTodoContent>DoneTodo 내용</DoneTodoContent>
                <DoneButtonContainer>
                  <DoneDeleteButton>삭제하기</DoneDeleteButton>
                  <DoneCancleButton>취소</DoneCancleButton>
                </DoneButtonContainer>
              </DoneTodoContainer>
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

const AddButton = styled.button`
  color: white;
  font-size: 20px;
  width: 150px;
  height: 35px;
  background-color: green;
  border-radius: 5px;
  border: none;
  cursor: pointer;
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

const WorkingDeleteButton = styled.button`
  background-color: white;
  width: 100%;
  border: 3px solid red;
  border-radius: 5px;
  cursor: pointer;
`;

const WorkingCompleteButton = styled.button`
  background-color: white;
  width: 100%;
  border: 3px solid green;
  border-radius: 5px;
  cursor: pointer;
`;
//
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

const DoneDeleteButton = styled.button`
  background-color: white;
  width: 100%;
  border: 3px solid red;
  border-radius: 5px;
  cursor: pointer;
`;

const DoneCancleButton = styled.button`
  background-color: white;
  width: 100%;
  border: 3px solid green;
  border-radius: 5px;
  cursor: pointer;
`;
