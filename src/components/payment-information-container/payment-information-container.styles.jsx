import styled from "styled-components";

export const PaymentInfoContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  background-color: #e0e0e0;
  align-content: center;

  @media screen and (max-width: 800px) {
    width: 100%;
    padding: 0 10px;
  }
`;

export const InformationPropertyContainer = styled.span`
  text-align: center;
  font-size: 18px;
  font-weight: 500;
  padding: 8px 0;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;
