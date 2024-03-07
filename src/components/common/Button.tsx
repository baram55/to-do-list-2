import styled from "styled-components";
import { ButtonType, ButtonUnionType } from "@/types/ButtonType";
import { ReactNode } from "react";

export const Button = ({
  type,
  children,
  onClick,
}: {
  type: ButtonUnionType;
  children: ReactNode;
  onClick: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  return (
    <StyledButton onClick={(e) => onClick(e)} type={type}>
      {children}
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
