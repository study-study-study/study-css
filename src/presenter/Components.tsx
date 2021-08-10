import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  background: url(/header-topline.svg) repeat-x;
  border-bottom: 1px solid #d8d8d8;

  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1040px;
  }
`;

const StyledBreadcrumb = styled.div`
  display: none;
  @media (min-width: 768px) {
    display: block;
    background: #efefef;

    margin: 0 auto;
    padding: 12px 20px;
    max-width: 1040px;
  }
`;

const StyledMain = styled.main`
  background: url(/post-bg.svg) repeat-x;
  background-position: 0 10px;

  padding: 80px 4% 0 4%;
  @media (min-width: 768px) {
    max-width: 1040px;
    margin: 0 auto;
    padding: 80px 20px 0 20px;
  }
`;

const StyledBottom = styled.div`
  background: url(/bottom-bg.svg);
  padding: 60px 4% 0 4%;
  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 60px 20px 0 20px;
    max-width: 1040px;
  }
`;

const StyledFooter = styled.footer`
  color: #fff;
  background: #000;
  padding: 60px 4%;
  @media (min-width: 768px) {
    max-width: 1040px;
    margin: 0 auto;
    padding: 60px 20px;
  }
`;

export const Header = () => (
  <StyledHeader>
    <h2>ヘッダー</h2>
  </StyledHeader>
);

export const Breadcrumb = () => (
  <StyledBreadcrumb>
    <h2>パンクズ</h2>
  </StyledBreadcrumb>
);

export const Main = () => (
  <StyledMain>
    <h2>メイン</h2>
    テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
  </StyledMain>
);

export const Bottom = () => (
  <StyledBottom>
    <h2>ボトム</h2>
  </StyledBottom>
);

export const Footer = () => (
  <StyledFooter>
    <h2>フッター</h2>
  </StyledFooter>
);
