import React from "react";
import * as S from "./Styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebookF,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";

export const Bottom: React.VFC = () => (
  <>
    <S.BannerArea>
      <S.BannerItems>
        <S.BannerItem>
          <a href="dummy">
            <S.BannerItemImg src="/banner-1.png" alt="" />
          </a>
        </S.BannerItem>
        <S.BannerItem>
          <a href="dummy">
            <S.BannerItemImg src="/banner-2.png" alt="" />
          </a>
        </S.BannerItem>
      </S.BannerItems>

      <S.SnsArea>
        <S.SnsSectionTitle>Follow Us!</S.SnsSectionTitle>
        <S.SnsIcons>
          <S.SnsIconWrapper>
            <S.SnsIcon href="dummy">
              <FontAwesomeIcon icon={faTwitter} />
            </S.SnsIcon>
          </S.SnsIconWrapper>

          <S.SnsIconWrapper>
            <S.SnsIcon href="dummy">
              <FontAwesomeIcon icon={faInstagram} />
            </S.SnsIcon>
          </S.SnsIconWrapper>

          <S.SnsIconWrapper>
            <S.SnsIcon href="dummy">
              <FontAwesomeIcon icon={faFacebookF} />
            </S.SnsIcon>
          </S.SnsIconWrapper>
        </S.SnsIcons>
      </S.SnsArea>

      <S.GoTopArea>
        <S.GoTopIConWrapper href="#top">
          <FontAwesomeIcon icon={faChevronUp} />
        </S.GoTopIConWrapper>
      </S.GoTopArea>
    </S.BannerArea>
  </>
);
