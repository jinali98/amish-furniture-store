import styled from "styled-components";
import { ReactComponent as Carticon } from "../../assets//Carticon.svg";

export const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const CartNumber = styled.span`
  position: absolute;
  font-size: 16px;
  font-weight: 600;
  bottom: 8px;
  left: 14px;
  color: brown;
`;

export const SvgIcon = styled(Carticon)`
  width: 40px;
`;
