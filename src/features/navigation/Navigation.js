import { StyledNav, StyledLink, StyledUl, StyledItem } from "./styled";

const Navigation = () => (
  <StyledNav>
    <StyledUl>
      <StyledItem>
        <StyledLink to="/zadania">Zadania</StyledLink>
      </StyledItem>
      <StyledItem>
        <StyledLink to="/autor">Autor</StyledLink>
      </StyledItem>
    </StyledUl>
  </StyledNav>
);

export default Navigation;
