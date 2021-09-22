import React from "react";
import * as S from "./Styled";

export const Footer = () => (
  <S.Area>
    <S.LogoSection>
      <a href="index.html">
        <img src="/footer-logo.svg" alt="Tansaku!" />
      </a>
    </S.LogoSection>
    <S.CopyRight>© Tansaku! All rights reserved.</S.CopyRight>
  </S.Area>
);
