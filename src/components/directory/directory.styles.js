import styled from "styled-components";

export const DirectoryContainer = styled.div`
  width: 90vw;
  height: 40vh;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;

  @media (max-width: 768px) {
    width: 100%;
    height: 100vh;
    margin-top: 1rem;
    grid-template-columns: repeat(1, 1fr);
  }
`;
