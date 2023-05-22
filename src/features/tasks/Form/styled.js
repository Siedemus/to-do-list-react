import styled from "styled-components";

const StyledForm = styled.form`
  background-color: ${({ theme }) => theme.colors.white};
  padding: 25px;
  display: flex;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  flex-grow: 1;
`;

const Button = styled.button`
  padding: 10px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.teal};
  border: none;
  transition: background 1s, 1s;

  &:hover {
    filter: brightness(120%);
    transform: scale(1.05);
  }

  &:active {
    outline: 2px black solid;
  }
`;

export { StyledForm, Input, Button };
