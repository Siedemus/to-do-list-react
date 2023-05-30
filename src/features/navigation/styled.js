import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledNav = styled.nav`
  background-color: ${({ theme }) => theme.colors.teal};
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledLink = styled(NavLink)`
  color: ${({ theme }) => theme.colors.white};
  text-decoration: none;
  font-size: 25px;
  &.active {
    font-weight: bolder;
    text-decoration: underline;
    pointer-events: none;
  }
`;

const StyledItem = styled.li``;

const StyledUl = styled.ul`
  padding: 0;
  list-style-type: none;
  margin: 0;
  display: flex;
  gap: 30px;
`;

export { StyledNav, StyledLink, StyledUl, StyledItem };
