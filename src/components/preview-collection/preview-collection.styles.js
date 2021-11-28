import styled from "styled-components";

export const PreviewContainer = styled.div`
  margin-bottom: 65px;
`;

export const PreviewItemTitle = styled.h2`
  margin-bottom: 40px;
  letter-spacing: 8px;
  font-weight: 300;
  cursor: pointer;
  span {
    margin-left: 1rem;
  }
  @media (max-width: 768px) {
    letter-spacing: 5px;
    font-size: 20px;
    text-align: justify;
    span {
      margin-left: 0.5rem;
    }
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
