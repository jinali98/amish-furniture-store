import React from "react";
import PreviewItem from "../preview-item/preview-item.component";
import { ReactComponent as ArrowIcon } from "../../assets/icon-arrow.svg";
import { withRouter } from "react-router-dom";
import {
  PreviewCollectionItems,
  PreviewContainer,
  PreviewItemTitle,
} from "./preview-collection.styles";

const PreviewCollection = ({ title, items, routeName, match, history }) => {
  return (
    <PreviewContainer>
      <PreviewItemTitle
        onClick={() => history.push(`${match.path}/${routeName}`)}
      >
        {title.toUpperCase()}
        <span>
          <ArrowIcon />
        </span>
      </PreviewItemTitle>
      <PreviewCollectionItems>
        {items
          .filter((item, index) => index > 2)
          .map((item) => (
            <PreviewItem key={item.id} item={item} />
          ))}
      </PreviewCollectionItems>
    </PreviewContainer>
  );
};

export default withRouter(PreviewCollection);
