import { StyledSection } from "./styled";

const Section = ({ title, body, extraBody }) => (
  <StyledSection>
    {title}
    {body}
    {extraBody}
  </StyledSection>
);

export default Section;
