import styled from "styled-components";

export const CheckoutPageContainer = styled.div`
  width: 80vw;
  margin: 2rem auto;

  @media (max-width: 768px) {
    width: 90vw;
  }

  @media (max-width: 360px) {
  }
`;

export const CheckoutItemWrapper = styled.div`
  width: 70%;

  margin: 1rem auto;

  @media (max-width: 768px) {
    width: 90vw;
  }
`;

export const TotalAmountWrapper = styled.div`
  width: 15%;
  height: 15vh;
  margin: auto;
  text-align: center;
  padding: 10px;
  border-radius: 12px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
  background-color: rgb(255, 254, 240);
  @media (max-width: 768px) {
    width: 300px;
    margin-bottom: 1rem;
    height: 100px;
  }
`;

export const TotalAmount = styled.p`
  font-weight: 600;
  font-size: 20px;
`;
