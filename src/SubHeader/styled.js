import styled, { css } from "styled-components";

const StyledHeader = styled.h2`
  padding: 25px;
  font-size: 25px;
  font-weight: 700;
  background-color: white;
  border-bottom: 2px solid rgb(214, 214, 214);
  margin: 0;

  ${({ subHeader }) =>
    subHeader &&
    css`
      font-size: 23px;
      border-bottom: none;
    `}
`;

export { StyledHeader };
