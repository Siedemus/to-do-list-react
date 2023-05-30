import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.teal};

  &:hover {
    text-decoration: underline;
  }
`;

const List = styled.ul`
  background-color: ${({ theme }) => theme.colors.white};
  margin: 0;
  padding: 0;
  padding: 10px;
`;

const Item = styled.li`
  display: grid;
  grid-template-columns: auto 1fr auto;
  border-bottom: 2px solid ${({ theme }) => theme.colors.grey};

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
  color: ${({ theme }) => theme.colors.white};
  transition: 1s;

  ${({ done }) =>
    done &&
    css`
      background-color: ${({ theme }) => theme.colors.teal};

      &:hover {
        filter: brightness(120%);
      }
    `}

  ${({ remove }) =>
    remove &&
    css`
      background-color: crimson;

      &:hover {
        filter: brightness(120%);
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

export { List, Item, Button, Content, StyledLink };
