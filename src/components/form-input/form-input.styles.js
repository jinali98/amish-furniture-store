import styled from "styled-components";

export const FormInputGroup = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const FormLabel = styled.label`
  margin: 5px 0;
  @media (max-width: 768px) {
    margin: 5px 0;
  }
`;

export const FormInputField = styled.input`
  background-color: rgb(255, 254, 240);
  border: none;
  border-bottom: 3px solid rgb(80, 80, 80);
  padding: 10px 0 0 20px;
  outline: none;

  @media (max-width: 768px) {
    background-color: rgb(255, 254, 240);
    border: none;
    border-bottom: 3px solid rgb(80, 80, 80);
    padding: 10px 0 0 0;
    outline: none;
  }
`;
