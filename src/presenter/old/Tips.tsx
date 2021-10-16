import React from 'react';
import styled, { css } from 'styled-components';

/**
 * 画像を伸縮させて、親要素に収まるようにする
 * ただし、実際の画像サイズより拡大しない
 */
const imgCss = css`
  max-width: 100%;
  height: auto;

  /* 画像の下にスペースができるのを防ぐ */
  vertical-align: bottom;
`;

const StyledImg = styled.img.attrs({
  src: '/post-headerimage.jpg',
  alt: 'ヘッダー',
})`
  ${imgCss}
`;

export const Img = () => <StyledImg />;
