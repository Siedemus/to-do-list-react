import styled from "styled-components";

const StyledButton = styled.button`
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

const StyledLoading = styled.p`
  border: none;
  background-color: transparent;
  padding: 15px;
  color: ${({ theme }) => theme.colors.grey};
  font-size: 18px;
  transition: 0.5s;
  margin-bottom: 0;
`;

const StyledError = styled.p`
  border: none;
  background-color: transparent;
  padding: 15px;
  color: crimson;
  font-size: 18px;
  transition: 0.5s;
  margin-bottom: 0;
`;

export { StyledButton, StyledLoading, StyledError };
