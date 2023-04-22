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

export { List, Item };
