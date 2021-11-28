import React from "react";
import { withRouter } from "react-router";
import {
  BackgroundImage,
  Content,
  MenuItemWrapper,
  ShopNow,
  Title,
} from "./menu-item.styles";
const MenuItem = ({ imageUrl, title, linkUrl, match, history }) => {
  return (
    <MenuItemWrapper>
      <BackgroundImage
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <Content onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <Title>{title}</Title>
        <ShopNow>shop now</ShopNow>
      </Content>
    </MenuItemWrapper>
  );
};

export default withRouter(MenuItem);
