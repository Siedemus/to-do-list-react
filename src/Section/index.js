import { StyledSection } from "./styled";

const Section = ({ subHeader, form, container, tasksList }) => (
  <StyledSection>
    {subHeader}
    {form}
    {container}
    {tasksList}
  </StyledSection>
);

export default Section;
