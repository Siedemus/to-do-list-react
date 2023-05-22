import { StyledContainer } from "./styled";

const Container = ({ subHeader, buttons }) => (
  <StyledContainer>
    {subHeader}
    {buttons}
  </StyledContainer>
);

export default Container;
