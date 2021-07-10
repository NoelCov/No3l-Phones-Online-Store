import styled from "styled-components";

export const CartItems = styled.div`
  width: 100%;
  margin: 5px 0;
  text-align: center;
`;

export const EmptyCartTextContainer = styled.p`
  margin: 45px auto;
  font-size: 20px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
    margin: 30px auto;
  }
`;
