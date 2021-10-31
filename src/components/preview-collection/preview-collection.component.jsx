import React from "react";
import PreviewItem from "../preview-item/preview-item.component";
import { ReactComponent as ArrowIcon } from "../../assets/icon-arrow.svg";
import "./preview-collection.styles.css";
import { withRouter } from "react-router-dom";

const PreviewCollection = ({ title, items, routeName, match, history }) => {
  return (
    <div className="preview-container">
      <h2
        onClick={() => history.push(`${match.path}/${routeName}`)}
        className="preview-item-title"
      >
        {title.toUpperCase()}
        <span>
          <ArrowIcon />
        </span>
      </h2>
      <div className="preview-collection-items">
        {items
          .filter((item, index) => index > 2)
          .map((item) => (
            <PreviewItem key={item.id} item={item} />
          ))}
      </div>
    </div>
  );
};

export default withRouter(PreviewCollection);
