import styled, { css } from 'styled-components';
import { device } from '~/presenter/constraints';

const navBtnStyle = css`
  padding: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  appearance: none;
`;

export const Area = styled.header`
  background: url(/header-topline.svg) repeat-x;
  border-bottom: 1px solid #d8d8d8;

  @media ${device.pc} {
    max-width: 1040px;
    padding: 0 20px;
    margin: 0 auto;
  }
`;
export const TitleSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

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

export interface NavBtnModifier {
  /**
   * ハンバーガーメニューの状態
   */
  closed: boolean;
}
export const NavBtn = styled.button<Pick<NavBtnModifier, 'closed'>>`
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
  padding: 0;
  margin: 0;
  list-style: none;
`;
export const NavItemLink = styled.a`
  display: block;
  padding: 20px 30px;
  color: #000;
  text-decoration: none;
  background: #efefef;
  border-top: 1px solid #d8d8d8;
`;
