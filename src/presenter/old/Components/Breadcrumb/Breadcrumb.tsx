import React from "react";
import * as S from "./Styled";

export const Breadcrumb: React.VFC = () => (
  <S.Area>
    <S.Items>
      <S.Item>
        <a href="index.html">HOME</a>
      </S.Item>
      <S.Item>
        <a href="dummy">アメリカ西海岸レポート</a>
      </S.Item>
      <S.Item>
        知らない街の「地元」の空気に触れたい！ファーマーズマーケットには情報がいっぱい
      </S.Item>
    </S.Items>
  </S.Area>
);
