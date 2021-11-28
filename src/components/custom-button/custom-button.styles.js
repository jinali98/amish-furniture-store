import styled, { css } from "styled-components";

const gooleButton = css`
  width: 300px;
  background-color: rgb(255, 254, 240);
  border: 2px solid rgba(0, 0, 0, 0.8);
  height: 40px;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: aliceblue;
  }
  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 360px) {
    width: 160px;
    margin: auto;
  }
`;
const submitButton = css`
  background-color: rgba(0, 0, 0, 0.8);
  color: aliceblue;
  margin: 20px 0;
  width: 300px;
  height: 40px;
  &:hover {
    background-color: rgb(255, 254, 240);
    color: rgba(0, 0, 0, 0.8);
    border: 2px solid rgba(0, 0, 0, 0.8);
  }
  @media (max-width: 768px) {
    width: 200px;
  }

  @media (max-width: 360px) {
    width: 160px;
    margin: auto;
  }
`;
const shopItemButton = css`
  width: 375px;
  padding: 8px 15px;
  letter-spacing: 8px;
  font-size: 16px;
  text-transform: capitalize;
  background-color: rgb(255, 254, 240);

  margin: auto;
  border: none;
  border-left: 10px solid rgba(0, 0, 0, 0.8);
  border-right: 10px solid rgba(0, 0, 0, 0.8);

  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.8);
    color: rgb(255, 254, 240);
  }

  @media (max-width: 768px) {
    width: 80vw;
  }
`;
const landingButton = css`
  width: 400px;
  padding: 8px 15px;
  letter-spacing: 15px;
  font-size: 18px;
  text-transform: capitalize;
  background-color: rgb(255, 254, 240);
  margin: auto;
  border: none;
  cursor: pointer;
  &:hover {
    color: rgb(49, 45, 45);
    font-weight: 600;
  }
  @media (max-width: 768px) {
    width: 500px;
  }

  @media (max-width: 360px) {
    width: 300px;
  }
`;

const gotoCartButton = css`
  background-color: rgba(0, 0, 0, 0.8);
  color: aliceblue;
  margin-top: 15px;
  width: 200px;
  height: 40px;
  &:hover {
    background-color: rgb(255, 254, 240);
    color: rgba(0, 0, 0, 0.8);
    border: 2px solid rgba(0, 0, 0, 0.8);
  }
`;
const customStyles = css`
  padding: 8px 15px;
  text-transform: capitalize;
  background-color: rgb(255, 254, 240);
  margin: auto;
  border: none;
  cursor: pointer;
  font-weight: 300;
`;

const getButtonType = ({
  isGoogle,
  isSubmit,
  isShopItem,
  isLandingBtn,
  isGotoCart,
}) => {
  if (isGoogle) return gooleButton;
  if (isSubmit) return submitButton;
  if (isShopItem) return shopItemButton;
  if (isLandingBtn) return landingButton;
  if (isGotoCart) return gotoCartButton;

  return customStyles;
};
export const CustomButtonWrapper = styled.button`
  margin: auto;
  border: none;
  cursor: pointer;

  ${getButtonType}
`;
