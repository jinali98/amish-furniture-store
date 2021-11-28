import styled from "styled-components";
import { ReactComponent as Heart } from "../../assets/heart.svg";

export const PreviewItemWrapaper = styled.div`
  background-color: rgb(255, 254, 240);
  height: 450px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.25);
  position: relative;

  @media (max-width: 768px) {
    width: 80vw;
  }
`;

export const PreviewItemImage = styled.div`
  width: 100%;
  height: 300px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

export const PreviewItemDetails = styled.div`
  height: 100px;
  margin: auto;
  padding: 0.5rem 0;
`;

export const PreviewItemName = styled.p`
  font-size: 18px;
  font-weight: 300;
  text-transform: capitalize;
  letter-spacing: 2px;
`;

export const PreviewItemPrice = styled.p`
  font-size: 18px;
  font-weight: 500;
`;

export const HeartIcon = styled(Heart)`
  color: rgb(255, 254, 240);
  width: 50px;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
`;
