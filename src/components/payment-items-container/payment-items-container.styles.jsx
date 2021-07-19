import styled from "styled-components";

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 900px;

  @media screen and (max-width: 800px) {
    width: 100%;
  }
`;

export const PaymentTitleContainer = styled.span`
  font-size: 25px;
  margin-bottom: 30px;
  font-weight: 600;

  @media screen and (max-width: 480px) {
      font-size: 22px;
      margin-bottom: 10px;
  }
}
`;

export const EmptyCartTextContainer = styled.span`
  font-size: 14px;
  margin-bottom: 10px;
  cursor: pointer;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
