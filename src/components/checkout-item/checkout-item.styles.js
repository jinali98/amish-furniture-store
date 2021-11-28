import styled from "styled-components";

export const CheckoutItemWrapper = styled.div`
  height: 250px;
  margin: 10px;
  padding: 10px;

  background-color: rgb(255, 254, 240);
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);

  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 768px) {
    width: 85vw;
  }

  @media (max-width: 360px) {
    flex-direction: column;
    height: max-content;
  }
`;

export const CheckoutItemImage = styled.div`
  width: 200px;
  height: 200px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const CheckoutItemDetails = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 360px) {
    width: 90%;
    text-align: center;
  }
`;

export const CheckoutItemQuantity = styled.p`
  font-size: 20px;
  @media (max-width: 360px) {
    width: 90%;
    text-align: center;
  }
`;
export const CheckoutItemName = styled(CheckoutItemQuantity)``;

export const CheckoutItemPrice = styled(CheckoutItemQuantity)``;

export const QuantityChangeContainer = styled.div`
  width: 100px;
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: space-evenly;
`;

export const IncrementIcon = styled.div`
  cursor: pointer;
  font-size: 25px;
`;

export const DecrementIcon = styled(IncrementIcon)``;

export const ItemTotalAmount = styled.p`
  width: 10%;
  font-weight: 600;
  font-size: 20px;
  @media (max-width: 360px) {
    width: 90%;
    text-align: center;
  }
`;
