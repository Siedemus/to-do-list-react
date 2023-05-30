import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  background-color: transparent;
  padding: 15px;
  color: ${({ theme }) => theme.colors.teal};
  font-size: 18px;
  transition: 0.5s;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(140%);
  }
`;
