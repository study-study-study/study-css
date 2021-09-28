// https://dev.to/coderamos/productivity-with-styled-components-237h
import styled from 'styled-components';

const Area = styled.div`
  display: block;
`;

const Title = styled.h1`
  color: red;
`;

const Description = styled.span`
  color: green;
`;

// ------------------------------
export const Card = {
  Area,
  Title,
  Description,
};
// ------------------------------

// ------------------------------
/**
 * 見出し
 */
export const CardTitle = styled.h1`
  display: block;
`;

export const CardDescription = styled.span`
  display: inline;
`;

export const CardArea = styled.div`
  ${CardTitle} {
    color: red;
  }
  ${CardDescription} {
    color: green;
  }
`;
// ------------------------------
