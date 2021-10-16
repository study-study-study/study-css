import React from 'react';
import * as S from './Styled';

export const Footer = () => (
  <S.Area>
    <S.LogoSection>
      <S.LogoLink href="index.html">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/footer-logo.svg" alt="Tansaku!" />
      </S.LogoLink>
    </S.LogoSection>
    <S.NavSection>
      <S.NavItems>
        <S.NavItem>
          <S.NavItemLink href="index.html">HOME</S.NavItemLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavItemLink href="post.html">最新の特集</S.NavItemLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavItemLink href="dummy">地域別に読む</S.NavItemLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavItemLink href="dummy">連載一覧</S.NavItemLink>
        </S.NavItem>
        <S.NavItem>
          <S.NavItemLink href="dummy">インタビュー</S.NavItemLink>
        </S.NavItem>
      </S.NavItems>
    </S.NavSection>
    <S.CopyRight>© Tansaku! All rights reserved.</S.CopyRight>
  </S.Area>
);
