import styled from "styled-components";

export const SignInContainer = styled.div`
  width: 30%;
  height: 500px;
  background-color: rgb(255, 254, 240);
  margin: 0 auto;
  padding: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    width: 70%;
  }
  @media (max-width: 360px) {
    width: 80%;
  }
`;
export const SignInTitle = styled.h2`
  letter-spacing: 5px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Buttons = styled.div`
  @media (max-width: 768px) {
    width: 50%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 10px;
  }
  @media (max-width: 360px) {
    width: 90%;
  }
`;
