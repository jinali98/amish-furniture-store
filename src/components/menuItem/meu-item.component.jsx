import React from "react";
import { withRouter } from "react-router";
import "./menu-item.styles.css";
const MenuItem = ({ imageUrl, title, linkUrl, match, history }) => {
  return (
    <div className="menu-item">
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div
        className="content"
        onClick={() => history.push(`${match.url}${linkUrl}`)}
      >
        <p className="title">{title}</p>
        <p className="shop-now">shop now</p>
      </div>
    </div>
  );
};

export default withRouter(MenuItem);
