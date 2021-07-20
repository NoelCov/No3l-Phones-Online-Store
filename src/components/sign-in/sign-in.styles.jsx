import styled from "styled-components";

export const SignInContainer = styled.div`
  padding: 20px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 800px) {
    padding: 10px 5px;
    max-width: 100%;
  }
`;

export const SignInTitleContainer = styled.span`
  font-size: 25px;
  font-weight: 500;
  color: white;
  margin: 10px 0;

  @media screen and (max-width: 480px) {
    font-size: 20px;
  }
`;

export const PersonalizedFormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin: 40px 0;
  align-items: center;
  width: 400px;

  @media screen and (max-width: 800px) {
    max-width: 100%;
    gap: 20px;
  }

  @media screen and (max-width: 480px) {
    gap: 15px;
  }
`;
