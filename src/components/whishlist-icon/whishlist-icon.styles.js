import styled from "styled-components";
import { ReactComponent as Wishlist } from "../../assets/wishlist.svg";

export const CartIconContainer = styled.div`
  position: relative;
  cursor: pointer;
`;

export const WishListIcon = styled(Wishlist)`
  width: 40px;
`;

export const WishlistItemNumber = styled.span`
  position: absolute;
  font-size: 14px;
  font-weight: 600;
  bottom: 14px;
  left: 14px;
  color: brown;
`;
