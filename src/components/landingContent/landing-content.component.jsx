import React from "react";
import { withRouter } from "react-router";
import CustomButton from "../custom-button/custom-button.component";
import "./landing-content.styles.css";

const LandingContent = ({ history }) => {
  return (
    <div className="landing-section">
      <div className="landing-image"></div>
      <div className="landing-text">
        <h1 className="landing-heading">
          Discover innovative ways to decorate
        </h1>
        <p className="landing-para">
          we provide unmatched quality, comfort and style for property owners
          across the country. our experts combine form and functions in bringing
          your vision to life. Create a room in your own style with out
          collection and make your property a reflection of you and what you
          love.
        </p>
        <CustomButton
          // className="landing-btn"
          isLandingBtn
          onClick={() => history.push("/shop")}
        >
          Shop now
        </CustomButton>
      </div>
    </div>
  );
};

export default withRouter(LandingContent);
