import styled, { css } from "styled-components";

const List = styled.ul`
  background-color: ${({theme}) => theme.colors.white};
  margin: 0;
  padding: 0;
  padding: 10px;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  border-bottom: 2px solid ${({theme}) => theme.colors.grey};

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
  color: ${({theme}) => theme.colors.white};

  ${({ done }) =>
    done &&
    css`
      background-color: ${({theme}) => theme.colors.teal};
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

const Content = styled.p`
  word-break: break-all;

  ${({ done }) =>
    done &&
    css`
      text-decoration: line-through;
    `}
`;

export { List, Item, Button, Content };
