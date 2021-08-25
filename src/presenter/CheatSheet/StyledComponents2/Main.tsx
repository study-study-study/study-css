import React from "react";
import * as S from "./styles";

// https://www.robinwieruch.de/styled-components
export const Main: React.VFC = () => (
  <>
    <S.Info.Area>
      <S.Info.Items>
        <S.Info.Item>aa</S.Info.Item>
      </S.Info.Items>
    </S.Info.Area>

    <S.Card.Area>
      <S.Card.Title>aa</S.Card.Title>
      <S.Card.Description>bb</S.Card.Description>
    </S.Card.Area>
  </>
);
