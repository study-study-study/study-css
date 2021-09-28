import styled from 'styled-components';

export const Area = styled.article`
  display: grid;
  grid-template-rows: repeat(12, 1fr);
  grid-template-columns: repeat(5, 1fr);
  grid-column-gap: 40px; /* 分割の隙間 */
  padding: 0 30px; /* サイドの余白 */
`;

export const MainTitle = styled.h1`
  grid-row: 1/3;
  grid-column: 1/5;
`;

export const SubTitle = styled.p`
  grid-row: 2;
  grid-column: 1/-1;
`;

export const DateTime = styled.time`
  grid-row: 2;
  grid-column: 5;
`;

export const LeadTxt = styled.p`
  grid-row: 3 / 5;
  grid-column: 1 / 3;
`;

export const Txt1 = styled.div`
  grid-row: 5 / 9;
  grid-column: 1 / 3;
`;

export const Img1 = styled.figcaption`
  grid-row: 3 / 7;
  grid-column: 3 / 6;
`;

export const TxtCatchCopy = styled.p`
  grid-row: 7;
  grid-column: 3 / 6;
`;

export const Txt2 = styled.div`
  grid-row: 8 / 13;
  grid-column: 3 / 5;
`;

export const Img2 = styled.figcaption`
  grid-row: 9 / 13;
  grid-column: 1 / 3;
`;

export const Sns = styled.aside`
  grid-row: 8 / 13;
  grid-column: 5;
`;

// テストファイルのカタチェック
