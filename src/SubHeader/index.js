import { StyledHeader } from "./styled";

const SubHeader = ({ title, extraContent }) => (
  <StyledHeader subHeader={extraContent}>{title}</StyledHeader>
);

export default SubHeader;
