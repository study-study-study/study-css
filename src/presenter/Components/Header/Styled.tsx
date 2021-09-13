import styled, { css } from "styled-components";
import { device } from "~/presenter/constraints";

const navBtnStyle = css`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  appearance: none;
`;

export const Area = styled.header`
  background: url(/header-topline.svg) repeat-x;
  border-bottom: 1px solid #d8d8d8;
  @media ${device.pc} {
    margin: 0 auto;
    padding: 0 20px;
    max-width: 1040px;
  }
`;
export const TitleSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media ${device.pc} {
    display: block;
    padding: 30px 0 0 0;
  }
`;
export const SiteTitleLogo = styled.img`
  width: 130px;
  @media ${device.pc} {
    width: 180px;
  }
`;

export type NavBtnModifier = {
  /**
   * ハンバーガーメニューの状態
   */
  closed: boolean;
};
export const NavBtn = styled.button<Pick<NavBtnModifier, "closed">>`
  ${navBtnStyle}
  width: 60px;
  height: 60px;
  ${(props) =>
    props.closed
      ? css`
          background-image: url(/nav-mobile-open.svg);
        `
      : css`
          background-image: url(/nav-mobile-close.svg);
        `}
  background-repeat: no-repeat;
  background-position: center center;
  @media ${device.pc} {
    display: none;
  }
`;
export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  list-style: none;
`;
export const NavItemLink = styled.a`
  display: block;
  padding: 20px 30px;
  border-top: 1px solid #d8d8d8;
  background: #efefef;
  color: #000;
  text-decoration: none;
`;
