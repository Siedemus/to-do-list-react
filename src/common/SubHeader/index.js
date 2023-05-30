import { HeaderContainer, StyledHeader } from "./styled";

const SubHeader = ({ title, extraContent, extraBody, isMajor }) => {
  return (
    <>
      <HeaderContainer isMajor={isMajor}>
        <StyledHeader subHeader={extraContent}>{title}</StyledHeader>
        {extraBody}
      </HeaderContainer>
    </>
  );
};

export default SubHeader;
