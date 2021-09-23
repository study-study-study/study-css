// https://dev.to/coderamos/productivity-with-styled-components-237h
import styled from "styled-components";

// ------------------------------
export const Card = {
  Area: styled.div``,
  /**
   * 見出し
   */
  Title: styled.h1`
    color: red;
  `,
  /**
   * 説明
   */
  Description: styled.span`
    color: green;
  `,
};
// ------------------------------

// ------------------------------
/**
 * 見出し
 */
export const CardTitle = styled.h1``;
/**
 * 説明
 */
export const CardDescription = styled.span``;

export const CardArea = styled.div`
  ${CardTitle} {
    color: red;
  }
  ${CardDescription} {
    color: green;
  }
`;
// ------------------------------
