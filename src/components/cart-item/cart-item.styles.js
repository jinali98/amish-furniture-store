import styled from "styled-components";

export const CartItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  /* margin-bottom: 10px; */
  width: 100%;
  height: 150px;
  gap: 10px;
  border-bottom: 2px solid rgba(80, 80, 80, 0.5);
`;

export const CartItemImage = styled.div`
  width: 70px;
  height: 100px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CartItemDetails = styled.div`
  text-align: center;
  width: 100px;
`;

export const CartItemName = styled.p`
  font-size: 16px;
`;

export const CartItemPrice = styled(CartItemName)``;
