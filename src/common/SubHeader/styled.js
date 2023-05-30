import styled, { css } from "styled-components";

const StyledHeader = styled.h2`
  padding: 25px;
  font-size: 25px;
  font-weight: 700;
  margin: 0;

  ${({ subHeader }) =>
    subHeader &&
    css`
      font-size: 23px;
      border-bottom: none;
    `}
`;

const HeaderContainer = styled.div`
  border-bottom: 2px solid ${({theme}) => theme.colors.grey};
  display: flex;
  justify-content: space-between;
`;

export { StyledHeader, HeaderContainer };
