import styled, { css } from "styled-components";

const List = styled.ul`
  background-color: white;
  margin: 0;
  padding: 0;
  padding: 10px;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  border-bottom: 2px solid rgb(214, 214, 214);

  ${({ hidden }) =>
    hidden &&
    css`
      display: none;
    `}
`;

const Button = styled.button`
  align-self: center;
  height: 39px;
  width: 39px;
  margin: 10px;
  padding: 10px;
  font-weight: 800;
  border: none;
  color: white;

  ${({ done }) =>
    done &&
    css`
      background-color: teal;
      transition: 1s;

      &:hover {
        background-color: rgb(0, 181, 181);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: crimson;
      transition: 1s;

      &:hover {
        background-color: rgb(255, 0, 51);
      }
    `}
`;

export { List, Item, Button };
