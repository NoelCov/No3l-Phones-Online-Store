import styled from "styled-components";

export const FooterContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-end;
  padding: 4px 0;
  width: 100%;
  max-height: 40px;

  @media screen and (max-width: 800px) {
    max-height: 20px;
    padding: 20px 0 0;
  }
`;

export const FooterLinkContainer = styled.span`
  font-size: 18px;
  font-weight: 500;

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
