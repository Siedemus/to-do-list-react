import styled from "styled-components";

const StyledForm = styled.form`
  background-color: white;
  padding: 25px;
  display: flex;
  gap: 15px;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid rgb(214, 214, 214);
  flex-grow: 1;
`;

const Button = styled.button`
  padding: 10px;
  color: white;
  background-color: teal;
  border: none;
  transition: background 1s, 1s;

  &:hover {
    background-color: rgb(0, 181, 181);
    transform: scale(1.05);
  }

  &:active {
    outline: 2px black solid;
  }
`;

export { StyledForm, Input, Button };
