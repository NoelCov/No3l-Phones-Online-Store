import styled from "styled-components";

export const HomePageContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  margin: auto 10vw;
  gap: 60px;
  justify-items: center;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
