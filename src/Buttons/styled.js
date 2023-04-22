import styled from "styled-components";

const ButtonsContainer = styled.div`
  align-self: center;

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 15px;
  color: teal;
  font-size: 18px;
  transition: 0.5s;

  &:hover {
    color: rgb(0, 177, 177);
  }

  &:active {
    color: rgb(0, 78, 78);
  }

  &:disabled {
    color: rgba(125, 125, 125, 0.389);
  }
`;

export { ButtonsContainer, Button };
