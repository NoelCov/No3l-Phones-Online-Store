import styled from "styled-components";

export const SignInPageContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 4vh 4vw;
}

@media screen and (max-width: 800px) {
    gap: 40px;
    display: flex;
    flex-direction: column;
}

@media screen and (max-width: 480px) {
    margin: 30px 0;
    gap: 40px;
}`;
