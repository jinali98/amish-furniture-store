import React from "react";
import Directory from "../../components/directory/directory.component";
import LandingContent from "../../components/landingContent/landing-content.component";
import "./home-page.styles.css";
const HomePage = () => {
  return (
    <div className="home-page">
      <LandingContent />
      <Directory />
    </div>
  );
};

export default HomePage;
