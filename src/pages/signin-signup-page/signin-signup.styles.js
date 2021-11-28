import styled from "styled-components";

export const SigninSignupPageWrapper = styled.div`
  width: 80vw;
  margin: auto;
  margin-top: 2rem;
  display: flex;
  justify-content: space-evenly;
  gap: 5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 2rem;
  }
  @media (max-width: 360px) {
    width: 90vw;
  }
`;
