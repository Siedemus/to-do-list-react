import styled from "styled-components";

const ButtonsContainer = styled.div`
  align-self: center;

  @media (max-width: ${({theme}) => theme.breakpoints.mobile}px) {
    display: grid;
    grid-template-columns: 1fr;
  }
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  padding: 15px;
  color: ${({theme}) => theme.colors.teal};
  font-size: 18px;
  transition: 0.5s;

  &:hover {
    filter: brightness(120%);
  }

  &:active {
    filter: brightness(140%);
  }

  &:disabled {
    color: rgba(125, 125, 125, 0.389);
  }
`;

export { ButtonsContainer, Button };
