import styled, { css } from "styled-components";

import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";

export const CartItemContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  align-self: center;

  @media screen and (max-width: 480px) {
    justify-content: center;
    align-items: center;
  }
`;

export const CartProperty = styled.span`
  font-size: 16px;
  text-align: center;
  padding: 10px 0;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

export const CartPropertyQuantity = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 480px) {
    font-size: 12px;
  }
`;

const IconStyles = css`
  font-size: 20px;
  padding: 0 7px;

  @media screen and (max-width: 480px) {
    font-size: 12px;
    padding: 0 5px;
  }
`;

export const RemoveIconContainer = styled(RemoveIcon)`
  ${IconStyles}
`;

export const AddIconContainer = styled(AddIcon)`
  ${AddIcon}
`;
