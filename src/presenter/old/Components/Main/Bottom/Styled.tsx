import styled from "styled-components";
import { device } from "~/presenter/constraints";

export const BannerArea = styled.div`
  background: url(/bottom-bg.svg);
  padding: 60px 4% 0 4%;

  @media ${device.pc} {
    margin: 0 auto;
    padding: 60px 20px 0 20px;
    max-width: 1040px;
  }
`;

export const BannerItems = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;

  @media ${device.pc} {
    flex-direction: row;
  }
`;

export const BannerItem = styled.div`
  margin-bottom: 20px;
  text-align: center;

  @media ${device.pc} {
    margin: 0 10px;
  }
`;

export const BannerItemImg = styled.img`
  &:hover {
    opacity: 0.8;
  }
`;

export const SnsArea = styled.div``;

export const SnsSectionTitle = styled.h2`
  margin: 0 0 15px 0;
  font-family: "Croissant One", cursive;
  font-weight: 400;
  font-size: 1.875rem;
  text-align: center;
`;

export const SnsIcons = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
`;

export const SnsIconWrapper = styled.div`
  margin: 0 10px;
`;

export const SnsIcon = styled.a`
  display: block;
  width: 70px;
  height: 70px;
  background: #73cbd6;
  border-radius: 50%;
  font-size: 30px;
  line-height: 70px;
  text-align: center;
  color: #ffffff;
`;

export const GoTopArea = styled.div`
  text-align: center;
`;

export const GoTopIConWrapper = styled.a`
  display: inline-block;
  padding: 1rem 4rem;
  background: #000000;
  border-radius: 20px 20px 0 0;
  font-size: 1.25rem;
  text-align: center;
  color: #ffffff;
  opacity: 0.6;
  &:hover {
    opacity: 0.8;
  }
`;
