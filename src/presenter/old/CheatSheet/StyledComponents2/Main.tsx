import React from "react";
import * as S from "./styles";

// https://www.robinwieruch.de/styled-components
export const Main: React.VFC = () => (
  <>
    <S.Card.Area>
      <S.Card.Title>Card.Title</S.Card.Title>
      <S.Card.Description>Card.Description</S.Card.Description>
    </S.Card.Area>

    <S.CardArea>
      <S.CardTitle>CardTitle</S.CardTitle>
      <S.CardDescription>CardDescription</S.CardDescription>
    </S.CardArea>
  </>
);
