import React from "react";
import { withRouter } from "react-router";
import CustomButton from "../custom-button/custom-button.component";
import {
  LandingHeading,
  LandingImage,
  LandingPara,
  LandingSection,
  LandingText,
} from "./landing-content.styles";

const LandingContent = ({ history }) => {
  return (
    <LandingSection>
      <LandingImage></LandingImage>
      <LandingText>
        <LandingHeading>Discover innovative ways to decorate</LandingHeading>
        <LandingPara>
          we provide unmatched quality, comfort and style for property owners
          across the country. our experts combine form and functions in bringing
          your vision to life. Create a room in your own style with out
          collection and make your property a reflection of you and what you
          love.
        </LandingPara>
        <CustomButton isLandingBtn onClick={() => history.push("/shop")}>
          Shop now
        </CustomButton>
      </LandingText>
    </LandingSection>
  );
};

export default withRouter(LandingContent);
