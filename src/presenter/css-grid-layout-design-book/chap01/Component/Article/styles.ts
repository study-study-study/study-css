import styled from "styled-components";

export const Area = styled.article`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  /* 分割の隙間 */
  grid-column-gap: 40px;
  /* サイドの余白 */
  padding: 0 30px;
  grid-template-rows: repeat(12, 1fr);
`;

export const MainTitle = styled.h1`
  grid-column: 1/5;
  grid-row: 1/3;
`;

export const SubTitle = styled.p`
  grid-column: 1/-1;
  grid-row: 2;
`;

export const DateTime = styled.time`
  grid-column: 5;
  grid-row: 2;
`;

export const LeadTxt = styled.p`
  grid-column: 1 / 3;
  grid-row: 3 / 5;
`;

export const Txt1 = styled.div`
  grid-column: 1 / 3;
  grid-row: 5 / 9;
`;

export const Img1 = styled.figcaption`
  grid-column: 3 / 6;
  grid-row: 3 / 7;
`;

export const TxtCatchCopy = styled.p`
  grid-column: 3 / 6;
  grid-row: 7;
`;

export const Txt2 = styled.div`
  grid-column: 3 / 5;
  grid-row: 8 / 13;
`;

export const Img2 = styled.figcaption`
  grid-column: 1 / 3;
  grid-row: 9 / 13;
`;

export const Sns = styled.aside`
  grid-column: 5;
  grid-row: 8 / 13;
`;
