import React from "react";
import styled, { css } from "styled-components";

const component1Css = css`
  /* > は直下要素を表します。 */
  div > p {
    color: red;
  }
`;

const Component1: React.VFC = () => (
  <div css={component1Css}>
    <div>
      <p>スタイル当たる</p>
      <form>
        <p>スタイル当たらない</p>
      </form>
    </div>
  </div>
);

const component2Css = css`
  /* , は複数のセレクタを対象にします。 */
  h1,
  h2 {
    color: red;
  }

  /* スペースは子孫要素を表します。 */
  div p {
    color: red;
  }

  /* 要素名に続けてクラス名を指定することで、その要素だけに絞り込めます。 */
  div .hoge {
    color: red;
  }
`;

const Component2: React.VFC = () => (
  <div css={component2Css}>
    <h1>h1</h1>
    <h2>h2</h2>
    <div>
      <p>p</p>
    </div>
    <div>
      <span className="hoge">hoge</span>
    </div>
  </div>
);

const component3Css = css`
  /* + は直後の隣接要素を表します。 */
  p + span {
    color: orange;
  }
`;

const Component3: React.VFC = () => (
  <div css={component3Css}>
    <p>
      AAA
      <span>BBB</span>
    </p>
    <span>CCC</span>
    <span>DDD</span>
    <span>EEE</span>
  </div>
);

const component4Css = css`
  /* 一方で~ は 後続の隣接要素を表します。 + が直後だけだったのに対し、これは後続のもの全てが対象です。 */
  p ~ span {
    color: orange;
  }
`;

const Component4: React.VFC = () => (
  <div css={component4Css}>
    <p>
      AAA
      <span>BBB</span>
    </p>
    <span>CCC</span>
    <span>DDD</span>
    <span>EEE</span>
  </div>
);

const component5Css = css`
  p:hover {
    color: red;
  }
  span::before {
    content: "---";
  }
`;

const Component5: React.VFC = () => (
  <div css={component5Css}>
    <p>AAA</p>
    <span>BBB</span>
  </div>
);

const StyledComponent1 = styled.div`
  &:hover {
    color: blue;
  }
`;

export const StyledComponents: React.VFC = () => (
  <>
    <Component1 />
    <Component2 />
    <Component3 />
    <Component4 />
    <Component5 />
    <StyledComponent1>StyledComponent1</StyledComponent1>
  </>
);
