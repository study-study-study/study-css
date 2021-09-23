import React from "react";
import * as S from "./Styled";

type Props = {
  ui: S.NavBtnModifier;
  operations: {
    toggleNav: () => void;
  };
};

const HeaderComponent: React.VFC<Props> = (props) => (
  <S.Area>
    <S.TitleSection>
      <h1>
        <a href="index.html">
          <img src="/header-logo.svg" alt="Tansaku!" />
        </a>
      </h1>
      <S.NavBtn closed={props.ui.closed} onClick={props.operations.toggleNav} />
    </S.TitleSection>

    {!props.ui.closed && (
      <nav>
        <S.NavItems>
          <li>
            <S.NavItemLink href="index.html">HOME</S.NavItemLink>
          </li>
          <li>
            <S.NavItemLink href="post.html">最新の特集</S.NavItemLink>
          </li>
          <li>
            <S.NavItemLink href="#">地域別に読む</S.NavItemLink>
          </li>
          <li>
            <S.NavItemLink href="#">連載一覧</S.NavItemLink>
          </li>
          <li>
            <S.NavItemLink href="#">インタビュー</S.NavItemLink>
          </li>
        </S.NavItems>
      </nav>
    )}
  </S.Area>
);

const useHeader = (): Props => {
  const [closed, setClosed] = React.useState(true);

  return {
    ui: {
      closed,
    },
    operations: {
      toggleNav: () => setClosed(!closed),
    },
  };
};

export const Header: React.VFC = () => <HeaderComponent {...useHeader()} />;
