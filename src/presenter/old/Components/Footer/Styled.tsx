import styled from 'styled-components';
import { device } from '~/presenter/constraints';

export const Area = styled.footer`
  padding: 60px 20px;
  color: #fff;
  background: #000;

  @media ${device.pc} {
    max-width: 1040px;
    padding: 60px 20px;
    margin: 0 auto;
  }
`;

export const LogoSection = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const LogoLink = styled.a`
  display: inline-block;
`;

export const CopyRight = styled.p`
  font-size: 0.75rem;
  color: #d8d8d8;
  text-align: center;
`;

export const NavSection = styled.div`
  padding: 0;
  margin: 0 0 30px 0;
`;

export const NavItems = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 0;
  list-style: none;

  @media ${device.pc} {
    flex-direction: row;
    justify-content: center;
  }
`;

export const NavItem = styled.li`
  margin: 0 0 2rem 0;
  font-size: 0.875rem;

  @media ${device.pc} {
    margin: 0 1rem;
  }
`;

export const NavItemLink = styled.a`
  color: #d8d8d8;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
