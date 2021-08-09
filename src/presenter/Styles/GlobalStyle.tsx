import * as styled from "styled-components";

export const GlobalStyle = styled.createGlobalStyle`
  body {
    font-size: 14px;
  }
  /* メディアクエリ */
  @media (min-width: 768px) {
    body {
      font-size: 16px;
    }
  }
`;
