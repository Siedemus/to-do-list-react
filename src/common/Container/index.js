import { StyledContainer } from "./styled";

const Container = ({ subHeader, buttons, body }) => (
  <StyledContainer>
    {subHeader}
    {buttons}
    {body}
  </StyledContainer>
);

export default Container;
