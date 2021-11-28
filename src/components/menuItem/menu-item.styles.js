import styled from "styled-components";

export const MenuItemWrapper = styled.div`
  width: 100%;
  height: 100%;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const BackgroundImage = styled.div`
  width: 100%;
  height: 100%;

  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const Content = styled.div`
  position: absolute;
  background-color: rgba(255, 254, 240, 0.6);
  width: 400px;
  &:hover {
    background-color: rgb(255, 254, 240);
  }
  @media (max-width: 768px) {
    position: absolute;
    background-color: rgba(240, 248, 255, 0.6);
    width: 300px;
  }

  @media (max-width: 360px) {
    position: absolute;
    background-color: rgba(240, 248, 255, 0.6);
    width: 240px;
  }
`;

export const Title = styled.p`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  @media (max-width: 360px) {
    font-size: 18px;
  }
`;

export const ShopNow = styled.p`
  font-weight: 600;
  letter-spacing: 5px;

  @media (max-width: 360px) {
    font-weight: 800;
    letter-spacing: 3px;
  }
`;
