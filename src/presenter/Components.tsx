import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
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

    margin: 0 auto;
    padding: 12px 20px;
    max-width: 1040px;
  }
`;

const StyledMain = styled.main`
  padding: 80px 4% 0 4%;
  @media (min-width: 768px) {
    max-width: 1040px;
    margin: 0 auto;
    padding: 80px 20px 0 20px;
  }
`;

const StyledBottom = styled.div`
  padding: 60px 4% 0 4%;
  @media (min-width: 768px) {
    margin: 0 auto;
    padding: 60px 20px 0 20px;
    max-width: 1040px;
  }
`;

const StyledFooter = styled.div`
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
