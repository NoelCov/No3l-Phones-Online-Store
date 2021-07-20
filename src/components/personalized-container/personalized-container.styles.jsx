import styled from "styled-components";

export const StyledContainer = styled.div`
  width: 80%;
  margin: 80px auto;
  background-color: #282828;

  @media screen and (max-width: 800px) {
    margin: 40px auto;
  }

  @media screen and (max-width: 480px) {
    width: 90%;
    margin: auto;
  }
`;
