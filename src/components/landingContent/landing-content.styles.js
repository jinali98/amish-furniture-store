import styled from "styled-components";

export const LandingSection = styled.div`
  width: 100%;
  height: 60vh;
  display: flex;

  @media (max-width: 768px) {
    width: 90vw;
    height: 90vh;
    flex-direction: column;
    overflow-x: hidden;
  }

  @media (max-width: 360px) {
    font-size: 30px;
    width: 300px;
  }
`;

export const LandingImage = styled.div`
  width: 55%;
  background-image: url("https://i.ibb.co/HBc3csj/desktop-image-hero-1.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    width: 100%;
    height: 50%;
  }
`;

export const LandingText = styled.div`
  width: 40%;
  height: max-content;
  margin: auto;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    margin: auto;
  }
`;

export const LandingHeading = styled.h1`
  font-size: 40px;
  font-weight: 300;
  width: 400px;
  margin: 1rem auto;
  text-align: left;
  text-transform: capitalize;

  @media (max-width: 768px) {
    font-size: 40px;
    width: 500px;
  }
  @media (max-width: 360px) {
    font-size: 30px;
    width: 300px;
  }
`;

export const LandingPara = styled.p`
  width: 400px;
  margin: 1rem auto;
  text-align: left;

  @media (max-width: 768px) {
    width: 500px;
    font-weight: 100;
  }
  @media (max-width: 360px) {
    width: 300px;
    font-size: 16px;
  }
`;
