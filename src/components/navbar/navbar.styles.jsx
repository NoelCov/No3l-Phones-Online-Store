import styled from "styled-components";

import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

export const NavBarContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 1vh 1.5vw;
`;

export const NavBarTitleContainer = styled.span`
  font-size: 26px;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const NavBarLinksContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
`;

export const NavBarItemCounterContainer = styled.span`
  position: absolute;
  top: 1px;
  margin-left: 4px;

  @media screen and (max-width: 480px) {
    right: 25.5%;
    top: 0;
  }
`;

export const NavBarShoppingCartIconContainer = styled(ShoppingCartIcon)`
  align-self: flex-end;
  margin-top: 1.6vh;

  @media screen and (max-width: 480px) {
    font-size: 10px;
    margin-top: 1.2vh;
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