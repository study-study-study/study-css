import styled from 'styled-components';
import { device } from '~/presenter/constraints';

export const BannerArea = styled.div`
  padding: 60px 4% 0 4%;
  background: url(/bottom-bg.svg);

  @media ${device.pc} {
    max-width: 1040px;
    padding: 60px 20px 0 20px;
    margin: 0 auto;
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

export const SnsArea = styled.div`
  display: block;
`;

export const SnsSectionTitle = styled.h2`
  margin: 0 0 15px 0;
  font-family: 'Croissant One', cursive;
  font-size: 1.875rem;
  font-weight: 400;
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
  font-size: 30px;
  line-height: 70px;
  color: #fff;
  text-align: center;
  background: #73cbd6;
  border-radius: 50%;
`;

export const GoTopArea = styled.div`
  text-align: center;
`;

export const GoTopIConWrapper = styled.a`
  display: inline-block;
  padding: 1rem 4rem;
  font-size: 1.25rem;
  color: #fff;
  text-align: center;
  background: #000;
  border-radius: 20px 20px 0 0;
  opacity: 0.6;

  &:hover {
    opacity: 0.8;
  }
`;
