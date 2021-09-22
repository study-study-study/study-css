import styled from "styled-components";
import { device } from "~/presenter/constraints";

export const Area = styled.footer`
  color: #fff;
  background: #000;
  @media ${device.pc} {
    max-width: 1040px;
    margin: 0 auto;
    padding: 60px 20px;
  }
`;

export const LogoSection = styled.div`
  margin-bottom: 30px;
  text-align: center;
`;

export const CopyRight = styled.p`
  font-size: 0.75rem;
  color: #d8d8d8;
  text-align: center;
`;
