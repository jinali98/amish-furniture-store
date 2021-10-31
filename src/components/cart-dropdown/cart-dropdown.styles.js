import styled from "styled-components";
import { fontColor, secondaryBackgroundColor } from "../../global.styles";

export const CartDropdownContainer = styled.div`
  width: 240px;
  height: 340px;
  background-color: ${secondaryBackgroundColor};
  border: 3px solid ${fontColor};
  position: absolute;
  top: 70px;
  right: 100px;
  z-index: 5;
  padding: 20px;

  @media (max-width: 768px) {
    top: 130px;
    right: 150px;
  }
  @media (max-width: 360px) {
    right: 50px;
  }
`;

export const CartItemsListContainer = styled.div`
  overflow-y: scroll;
  height: 250px;
`;

export const NoCartItemsMessage = styled.p`
  margin: 70px auto;
  font-weight: 600;
`;
