import { createGlobalStyle } from "styled-components";

export const fontColor = "#505050";
export const backGroundColor = "#e6e6e6";
export const secondaryBackgroundColor = "#fffef0";

export const GlobalStyles = createGlobalStyle`

body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  background-color: ${backGroundColor};
  line-height: 1.5;
  color: ${fontColor};
  font-family: "Montserrat", sans-serif;
  font-weight: 200;
}

a {
  text-decoration: none;
  color: ${fontColor};
}
* {
  box-sizing: border-box;
}
`;
