import styled from "styled-components";

export const PhonesContainerDiv = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 100px;

  @media screen and (max-width: 800px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media screen and (max-width: 480px) {
    gap: 50px;
  }
`;
