import styled from "styled-components";

export const PersonalizedButtonContainer = styled.button`
  background-color: rgb(15, 15, 15);
  color: white;
  padding: 15px 25px;
  max-height: 50px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  text-align: center;
  border: 1px ridge rgb(88, 88, 88);
  border-radius: 6px;
  cursor: pointer;

  &:hover {
    transform: scale(1.01);
    background-color: orange;
    color: black;
    border: 1px ridge white;
  }

  @media screen and (max-width: 800px) {
    width: 83%;
    height: 40px;
  }

  @media screen and (max-width: 480px) {
    width: 83%;
    height: 28px;
    font-size: 15px;
    font-weight: 600;
  }
`;

export const Icon = styled.span`
  font-size: 22px;
  margin: 4px 8px 0;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin: 4px 8px 0;
  }
`;
