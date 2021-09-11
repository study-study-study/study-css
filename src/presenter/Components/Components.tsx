import React from "react";
import styled from "styled-components";
export { Main } from "./Main";
export { Header } from "./Header";
export { Breadcrumb } from "./Breadcrumb";

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
