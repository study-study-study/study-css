import React from "react";
import styled, { css } from "styled-components";

const StyledMain = styled.main`
  background: url(/post-bg.svg) repeat-x;
  background-position: 0 10px;

  padding: 80px 4% 0 4%;
  @media (min-width: 768px) {
    max-width: 1040px;
    margin: 0 auto;
    padding: 80px 20px 0 20px;
  }
`;

const StyledPostHeader = styled.header`
  margin-bottom: 60px;
`;

const StyledPostContents = styled.div`
  margin: 0 0 60px 0;
  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto 60px auto;
  }
`;

const StyledPostFooter = styled.footer`
  margin: 0 0 60px 0;
  @media (min-width: 768px) {
    max-width: 600px;
    margin: 0 auto 60px auto;
  }
`;

export const Main = () => (
  <StyledMain>
    <StyledPostHeader>
      <h1
        css={css`
          font-size: 1.875rem;
          line-height: 1.5;
        `}
      >
        知らない街の「地元」の空気に触れたい！ファーマーズマーケットには情報がいっぱい
      </h1>
    </StyledPostHeader>

    <StyledPostContents>
      <p>
        <strong>ポストコンテンツ</strong>
      </p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
      aspernatur fuga iusto debitis eaque eius provident libero suscipit quam!
      Suscipit amet dignissimos id soluta quae, veniam fuga consequuntur placeat
      magni!
    </StyledPostContents>

    <StyledPostFooter>
      <p>
        <strong>ポストフッター</strong>
      </p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum,
      aspernatur fuga iusto debitis eaque eius provident libero suscipit quam!
      Suscipit amet dignissimos id soluta quae, veniam fuga consequuntur placeat
      magni!
    </StyledPostFooter>
  </StyledMain>
);
