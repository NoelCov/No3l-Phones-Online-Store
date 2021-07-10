import styled from "styled-components";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const NavBarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  @media screen and (max-width: 480px) {
    padding: 0 5px;
  }
`;

export const NavBarTitleContainer = styled.span`
  font-size: 22px;

  @media screen and (max-width: 480px) {
    padding: 0 5px;
    font-size: 16px;
  }
`;

export const NavBarLinksContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
ay
  @media screen and (max-width: 480px) {
    width: 40%;
  }
`;

export const NavBarItemCounterContainer = styled.span`
  position: absolute;
  top: 1px;
  margin-left: 4px;

  @media screen and (max-width: 480px) {
    right: 29.5%;
    top: 0;
  }
`;

export const NavBarShoppingCartIconContainer = styled(ShoppingCartIcon)`
  align-self: flex-end;
  margin-top: 15px;
  font-size: 28px;

  @media screen and (max-width: 480px) {
    font-size: 22px;
  }
`;

export const NavBarLoginButtonContainer = styled.span`
  padding: 4px 20px;
  background-color: #161616;
  color: white;
  margin: auto 15px;
  border-radius: 4px;
  font-size: 16px;

  &:hover {
    background-color: orange;
    color: black;
  }

  @media screen and (max-width: 480px) {
    padding: 2px 10px;
    font-size: 12px;
  }
`;