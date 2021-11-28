import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const HeaderWrapper = styled.div`
  width: 90vw;
  height: 80px;
  margin: auto;

  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
    height: 130px;
  }
`;

export const Logo = styled(Link)`
  font-family: "Philosopher", sans-serif;
  width: 20%;
  font-size: 50px;
  @media (max-width: 768px) {
    font-family: "Philosopher", sans-serif;
    width: 50%;
    font-size: 50px;
    text-align: center;
  }
`;

export const NavigationLinks = styled.div`
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 768px) {
    width: 90%;
  }
`;

export const OptionType = css`
  text-transform: uppercase;
  font-weight: 600;
  cursor: pointer;
`;

export const OptionLink = styled(Link)`
  ${OptionType}
`;
export const OptionPara = styled.p`
  ${OptionType}
`;
