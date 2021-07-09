import React from "react";
import styled from "styled-components";

const StyledBox = styled.div`
  border: solid 10px;
  margin: 50px;
  padding: 20px;
`;
export const Box: React.VFC = () => <StyledBox>ボックス</StyledBox>;

const StyledBox2 = styled.p`
  width: 100px;
  margin-left: auto;
  margin-right: auto;
`;
export const Box2: React.VFC = () => <StyledBox2>中央</StyledBox2>;

const StyledBox3 = styled.p`
  width: 300px;
  padding: 20px;
  border: solid 30px;
`;
export const Box3: React.VFC = () => (
  <StyledBox3>30px | 20px | 300px | 20px | 30px</StyledBox3>
);

const StyledContent = styled.p`
  border: solid 1px;
`;

const StyledContentMin = styled(StyledContent)`
  /* テキストを単語で区切り、最大幅となる「sample」にあわせたwidthに調整されます。 */
  width: min-content;
`;

const StyledContentMax = styled(StyledContent)`
  /* ブロックレベルの振る舞いのままbackgroundやborderをアイテム幅で指定したいときによく使います。 */
  width: max-content;
`;

export const Content: React.VFC = () => (
  <>
    <StyledContentMin>ABCD ABC</StyledContentMin>
    <StyledContent>ABCD ABC</StyledContent>
    <StyledContentMax>ABCD ABC</StyledContentMax>
  </>
);

const StyledWidth = styled.div`
  border: solid 1px;
`;

const StyledWidthMax = styled(StyledWidth)`
  max-width: 50px;
`;

export const Width: React.VFC = () => (
  <>
    <StyledWidth>a</StyledWidth>
    <StyledWidthMax>a</StyledWidthMax>
  </>
);
