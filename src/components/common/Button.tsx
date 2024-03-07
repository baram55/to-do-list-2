import styled from "styled-components";
import { ButtonType, ButtonUnionType } from "@/types/ButtonType";

export const Button = ({
  type,
  onClick,
}: {
  type: ButtonUnionType;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  let buttonText = "";

  switch (type) {
    case ButtonType.ADD:
      buttonText = "추가하기";
      break;
    case ButtonType.DELETE:
      buttonText = "삭제하기";
      break;
    case ButtonType.COMPLETE:
      buttonText = "완료";
      break;
    case ButtonType.CANCEL:
      buttonText = "취소";
      break;
  }

  return (
    <StyledButton onClick={(e) => onClick(e)} type={type}>
      {buttonText}
    </StyledButton>
  );
};

const StyledButton = styled.button<{ type: ButtonUnionType }>`
  border-radius: 5px;
  cursor: pointer;
  ${({ type }) => {
    switch (type) {
      case ButtonType.ADD:
        return `
              color: white;
              font-size: 20px;
              width: 150px;
              height: 35px;
              background-color: green;
              border: none;
        `;
      case ButtonType.DELETE:
        return `
              background-color: white;
              width: 100%;
              border: 3px solid red;`;
      case ButtonType.COMPLETE:
        return `
              background-color: white;
              width: 100%;
              border: 3px solid green;`;
      case ButtonType.CANCEL:
        return `
              background-color: white;
              width: 100%;
              border: 3px solid green;`;
    }
  }}
`;
//test
