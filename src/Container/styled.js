import styled from "styled-components";

const StyledContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: white;
  border-top: 10px solid rgb(214, 214, 214);
  border-bottom: 2px solid rgb(214, 214, 214);

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;

export { StyledContainer };
