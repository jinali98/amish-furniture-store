import React from "react";
import Directory from "../../components/directory/directory.component";
import LandingContent from "../../components/landingContent/landing-content.component";
import { HomePageWrapper } from "./home-page.styles";

const HomePage = () => {
  return (
    <HomePageWrapper>
      <LandingContent />
      <Directory />
    </HomePageWrapper>
  );
};

export default HomePage;
