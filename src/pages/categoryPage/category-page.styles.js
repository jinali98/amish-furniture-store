import styled from "styled-components";

export const PreviewContainer = styled.div`
  width: 80vw;
  margin: 2rem auto;
  text-align: center;
`;

export const PreviewItemTitle = styled.h2`
  margin-bottom: 40px;
  letter-spacing: 8px;
  font-weight: 300;

  @media (max-width: 768px) {
    letter-spacing: 5px;
    font-size: 20px;
    text-align: justify;
  }
`;

export const PreviewCollectionItems = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 50px;
  @media (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
