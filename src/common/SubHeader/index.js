import { HeaderContainer, StyledHeader } from "./styled";

const SubHeader = ({ title, extraContent, extraBody }) => {
  return (
    <>
      <HeaderContainer>
        <StyledHeader subHeader={extraContent}>{title}</StyledHeader>
        {extraBody}
      </HeaderContainer>
    </>
  );
};

export default SubHeader;
