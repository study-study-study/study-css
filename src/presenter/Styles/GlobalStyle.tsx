import * as styled from 'styled-components';

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

  /* 画像を伸縮させて、親要素に収まるようにする ただし、実際の画像サイズより拡大しない */

  /* img { */

  /* max-width: 100%;
    height: auto; */

  /* 画像の下にスペースができるのを防ぐ */

  /* vertical-align: bottom; */

  /* } */
`;
