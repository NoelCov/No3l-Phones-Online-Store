import styled from "styled-components";

export const PaymentTotalContainer = styled.div`
  margin-top: 10vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const PaymentTotalTitle = styled.span`
  font-size: 25px;
  font-weight: 600;

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const PaymentTotalAmount = styled.span`
  font-size: 18px;
  margin-bottom: 2.5vh;

  @media screen and (max-width: 480px) {
    font-size: 15px;
  }
`;

export const PaymentTotalButton = styled.span`
  padding: 15px 30px;
  color: white;
  background-color: black;
  width: 250px;
  cursor: pointer;
  text-align: center;

  &:hover {
    color: black;
    background-color: orange;
  }

  @media screen and (max-width: 480px) {
    padding: 10px;
    width: 160px;
    font-size: 14px;
  }
`;

export const PaymentWarningContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 12vh;
  align-items: center;
  text-align: center;
`;

export const PaymentWarningTitle = styled.h2`
  color: red;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;

export const PaymentWarningText = styled.div`
  display: flex;
  width: 30vw;
  justify-content: space-around;

  @media screen and (max-width: 800px) {
    width: 80vw;
  }

  @media screen and (max-width: 480px) {
    width: 90vw;
    font-size: 12px;
  }
`;
