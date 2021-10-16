import React from 'react';
import styled from 'styled-components';

const StyledBox = styled.div`
  padding: 20px;
  margin: 50px;
  border: solid 10px;
`;
export const Box: React.VFC = () => <StyledBox>ボックス</StyledBox>;

const StyledBox2 = styled.p`
  width: 100px;
  margin-right: auto;
  margin-left: auto;
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
    <StyledWidth>指定なし</StyledWidth>
    <StyledWidthMax>max-widthを指定</StyledWidthMax>
  </>
);

const StyledBoxLayoutBase = styled.div`
  border: solid 1px;
`;

const StyledBlok = styled(StyledBoxLayoutBase)`
  display: block;
`;

const StyledInline = styled(StyledBoxLayoutBase)`
  display: inline;
`;

export const BoxLayout = () => (
  <>
    <StyledBlok>ブロックA</StyledBlok>
    <StyledBlok>ブロックB</StyledBlok>
    <StyledInline>インラインA</StyledInline>
    <StyledInline>インラインB</StyledInline>
  </>
);

const StyleContainer = styled.div`
  display: flex;
  border: solid 1px;
`;
const StyleContainer2 = styled.div`
  display: inline-flex;
  border: solid 1px;
`;
export const FlexLayout = () => (
  <>
    <div>アイテムA</div>
    <div>アイテムB</div>
    <StyleContainer>
      <div>アイテムA</div>
      <div>アイテムB</div>
    </StyleContainer>
    <StyleContainer2>
      <div>アイテムA</div>
      <div>アイテムB</div>
    </StyleContainer2>
  </>
);

const StyledItem = styled.div`
  border: solid 1px;
`;
const StyledFloatItem = styled(StyledItem)`
  float: left;
  height: 100px;
`;

export const FloatLayout = () => (
  <>
    <div>
      <StyledItem>A</StyledItem>
      <StyledFloatItem>B</StyledFloatItem>
      <StyledItem>C</StyledItem>
    </div>
    <div>
      <StyledItem>AA</StyledItem>
      <StyledItem>BB</StyledItem>
      <StyledItem>CC</StyledItem>
    </div>
  </>
);

export const FloatLayout2 = () => (
  <>
    <div style={{ display: 'flow-root' }}>
      <StyledItem>A</StyledItem>
      <StyledFloatItem>B</StyledFloatItem>
      <StyledItem>C</StyledItem>
    </div>
    <div>
      <StyledItem>AA</StyledItem>
      <StyledItem>BB</StyledItem>
      <StyledItem>CC</StyledItem>
    </div>
  </>
);

export const FloatLayout3 = () => (
  <>
    <div>
      <StyledItem>A</StyledItem>
      <StyledFloatItem>B</StyledFloatItem>
      <StyledItem>C</StyledItem>
    </div>
    <div style={{ display: 'flow-root' }}>
      <StyledItem>AA</StyledItem>
      <StyledItem>BB</StyledItem>
      <StyledItem>CC</StyledItem>
    </div>
  </>
);

const StyledFlexBox = styled.div`
  display: flex;
`;
export const FlexBox = () => (
  <StyledFlexBox>
    <div>A</div>
    <div>B</div>
    <div>C</div>
  </StyledFlexBox>
);

const StyledItem2 = styled.span`
  display: inline-block;
`;

const StyledFlexBox2 = styled.div`
  display: flex;

  & > div {
    background-color: red;
  }
  & > ${StyledItem2} {
    background-color: green;
  }
`;

export const FlexBox2 = () => (
  <div>
    <StyledFlexBox2>
      <div>A</div>
      <StyledItem2>B</StyledItem2>
      <div>C</div>
    </StyledFlexBox2>
    <StyledItem2>Z</StyledItem2>
  </div>
);

const StyledFlexBox3Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledFlexBox3Item = styled.div`
  flex: 1 1 33%;
`;

export const FlexBox3 = () => (
  <StyledFlexBox3Wrapper>
    <StyledFlexBox3Item>a</StyledFlexBox3Item>
    <StyledFlexBox3Item>b</StyledFlexBox3Item>
    <StyledFlexBox3Item>c</StyledFlexBox3Item>
    <StyledFlexBox3Item>aa</StyledFlexBox3Item>
    <StyledFlexBox3Item>bb</StyledFlexBox3Item>
    <StyledFlexBox3Item>cc</StyledFlexBox3Item>
  </StyledFlexBox3Wrapper>
);

const StyledGridWrapper = styled.div`
  display: grid;
  grid-template-areas:
    'a b b'
    'a c d'
    'a e f';
  grid-template-rows: 100px 100px 120px;
  grid-template-columns: 1fr 1fr 1fr;
  border: solid 1px;
`;

export const Grid = () => (
  <StyledGridWrapper>
    <div style={{ gridArea: 'a' }}>-A-</div>
    <div style={{ gridArea: 'b' }}>B</div>
    <div style={{ gridArea: 'c' }}>C</div>
    <div style={{ gridArea: 'd' }}>D</div>
    <div style={{ gridArea: 'e' }}>E</div>
    <div style={{ gridArea: 'f' }}>F</div>
  </StyledGridWrapper>
);

export const Table1 = () => (
  <table>
    <thead>
      <tr>
        <th>プラン</th>
        <th>A</th>
        <th>B</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th>利用料金</th>
        <td>100円</td>
        <td>300円</td>
      </tr>
    </tbody>
  </table>
);

const StyledFloatWrapper = styled.div`
  overflow: hidden;
`;

const StyledImgFloat1 = styled.img.attrs({
  src: '/room_office_clean.png',
  alt: 'オフィスの画像',
  width: '100px',
})`
  float: left;
`;

export const Float1 = () => (
  <StyledFloatWrapper>
    <StyledImgFloat1 />
    <p>
      texttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttexttext
    </p>
  </StyledFloatWrapper>
);

const StyledPosition1Wrapper = styled.div`
  position: relative;
  height: 500px;
  border: solid 1px;
`;
const StyledPosition1Item1 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 100px;
  background-color: red;
`;
const StyledPosition1Item2 = styled.div`
  position: absolute;
  top: 90px;
  width: 100px;
  height: 100px;
  background-color: green;
`;
const StyledPosition1Item3 = styled.div`
  position: absolute;
  z-index: 1;
  width: 100px;
  height: 100px;
  background-color: blue;
`;
export const Position1 = () => (
  <StyledPosition1Wrapper>
    <StyledPosition1Item1>Position 1</StyledPosition1Item1>
    <StyledPosition1Item2>Position 2</StyledPosition1Item2>
    <StyledPosition1Item3>Position 3</StyledPosition1Item3>
  </StyledPosition1Wrapper>
);

const StyledContent1 = styled.h1`
  ::before {
    content: 'New';
  }
`;
export const Content1 = () => <StyledContent1>Foo</StyledContent1>;

const StyledItemVisibility1 = styled.div`
  height: 50px;
`;
const StyledItemVisibility2 = styled.div`
  height: 50px;

  /* display: none; */
  visibility: hidden;
`;
const StyledItemVisibility3 = styled.div`
  height: 50px;
`;

export const Visibility1 = () => (
  <>
    <StyledItemVisibility1>aaa</StyledItemVisibility1>
    <StyledItemVisibility2>bbb</StyledItemVisibility2>
    <StyledItemVisibility3>ccc</StyledItemVisibility3>
  </>
);

const StyledFlex1Container = styled.div`
  display: flex;
`;
const StyledFlex1 = styled.div`
  flex: 0 0 100px;
  background-color: red;
`;
const StyledFlex1A = styled.div`
  flex: 0 0 200px;
  background-color: green;
`;
export const Flex1 = () => (
  <StyledFlex1Container>
    <StyledFlex1>Flex1</StyledFlex1>
    <StyledFlex1A>Flex1A</StyledFlex1A>
  </StyledFlex1Container>
);

const StyledFlex2Container = styled.div`
  display: flex;
`;
const StyledFlex2 = styled.div`
  /* ポジティブスペース(余白)に応じて伸びる */
  flex: 1 0 100px;
  background-color: red;
`;
const StyledFlex2A = styled.div`
  flex: 0 0 200px;
  background-color: green;
`;
export const Flex2 = () => (
  <StyledFlex2Container>
    <StyledFlex2>Flex2</StyledFlex2>
    <StyledFlex2A>Flex2A</StyledFlex2A>
  </StyledFlex2Container>
);

const StyledFlex3Container = styled.div`
  display: flex;
  width: 100px;
`;
const StyledFlex3 = styled.div`
  /* ネガティブスペース(余白)に応じて縮む */
  flex: 0 1 100px;
  background-color: red;
`;
const StyledFlex3A = styled.div`
  flex: 0 0 200px;
  background-color: green;
`;
export const Flex3 = () => (
  <StyledFlex3Container>
    <StyledFlex3>Flex3</StyledFlex3>
    <StyledFlex3A>Flex3A</StyledFlex3A>
  </StyledFlex3Container>
);

const StyledFlex4Container = styled.div`
  display: flex;

  /* 余白 */
  gap: 20px;
`;
const StyledFlex4 = styled.div`
  flex: 0 0 100px;
  background-color: red;
`;
const StyledFlex4A = styled.div`
  flex: 0 0 200px;
  background-color: green;
`;
export const Flex4 = () => (
  <StyledFlex4Container>
    <StyledFlex4>Flex4</StyledFlex4>
    <StyledFlex4A>Flex4A</StyledFlex4A>
  </StyledFlex4Container>
);

const StyledFlex5Container = styled.div`
  display: flex;
  margin: 0 20px;
`;
const StyledFlex5 = styled.div`
  flex: 0 0 100px;
  background-color: red;
`;
const StyledFlex5A = styled.div`
  flex: 0 0 200px;
  background-color: green;
`;
export const Flex5 = () => (
  <StyledFlex5Container>
    <StyledFlex5>Flex5</StyledFlex5>
    <StyledFlex5A>Flex5A</StyledFlex5A>
  </StyledFlex5Container>
);

const StyledFlex6Container = styled.div`
  display: flex;
`;
const StyledFlex6 = styled.div`
  flex: 1 1 0;
  background-color: red;
`;
const StyledFlex6A = styled.div`
  flex: 1 1 0;
  background-color: green;
`;
export const Flex6 = () => (
  <StyledFlex6Container>
    <StyledFlex6>Flex6</StyledFlex6>
    <StyledFlex6A>Flex6A</StyledFlex6A>
  </StyledFlex6Container>
);

const StyledFlex7Container = styled.div`
  display: flex;
`;
const StyledFlex7 = styled.div`
  flex: 1 1 0;
  order: 2;
  background-color: red;
`;
const StyledFlex7A = styled.div`
  flex: 1 1 0;
  order: 1;
  background-color: green;
`;
export const Flex7 = () => (
  <StyledFlex7Container>
    <StyledFlex7>Flex7</StyledFlex7>
    <StyledFlex7A>Flex7A</StyledFlex7A>
  </StyledFlex7Container>
);

const StyledFlex31Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
`;
const StyledFlex31 = styled.div`
  background-color: red;
`;
const StyledFlex31A = styled.div`
  background-color: green;
`;
export const Flex31 = () => (
  <StyledFlex31Container>
    <StyledFlex31>Flex31</StyledFlex31>
    <StyledFlex31A>Flex31A</StyledFlex31A>
  </StyledFlex31Container>
);

const StyledFlex8Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 400px;
`;
const StyledFlex8A = styled.div`
  flex: 0 0 200px;
  background-color: green;
`;
const StyledFlex8B = styled.div`
  flex: 0 0 200px;
  background-color: blue;
`;
const StyledFlex8C = styled.div`
  flex: 0 0 200px;
  background-color: red;
`;
export const Flex8 = () => (
  <StyledFlex8Container>
    <StyledFlex8A>Flex8A</StyledFlex8A>
    <StyledFlex8B>Flex8B</StyledFlex8B>
    <StyledFlex8C>Flex8C</StyledFlex8C>
    <StyledFlex8A>Flex8A-</StyledFlex8A>
    <StyledFlex8B>Flex8B-</StyledFlex8B>
    <StyledFlex8C>Flex8C-</StyledFlex8C>
  </StyledFlex8Container>
);

const StyledFlex81Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 500px;
  margin-bottom: 10px;
  border: solid 1px;
`;
const StyledFlex81A = styled.div`
  flex: 0 0 200px;
  background-color: green;
`;
const StyledFlex81B = styled.div`
  flex: 0 0 200px;
  background-color: blue;
`;
export const Flex81 = () => (
  <StyledFlex81Container>
    <StyledFlex81A>Flex81A</StyledFlex81A>
    <StyledFlex81B>Flex81B</StyledFlex81B>
  </StyledFlex81Container>
);

const StyledFlex82Container = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;
const StyledFlex82A = styled.div`
  height: 50px;
  background-color: green;
`;
const StyledFlex82B = styled.div`
  height: 150px;
  background-color: blue;
`;
const StyledFlex82C = styled.div`
  /* 個別調整 */
  align-self: flex-end;
  height: 100px;
  background-color: red;
`;
export const Flex82 = () => (
  <StyledFlex82Container>
    <StyledFlex82A>Flex82A</StyledFlex82A>
    <StyledFlex82B>Flex82B</StyledFlex82B>
    <StyledFlex82C>Flex82C</StyledFlex82C>
  </StyledFlex82Container>
);

const StyledGrid1Wrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 50px 1fr 250px;

  > div {
    border: solid 1px;
  }
`;
export const Grid1 = () => (
  <StyledGrid1Wrapper>
    <div>a</div>
    <div>b</div>
    <div>c</div>
    <div>d</div>
    <div>e</div>
    <div>f</div>
  </StyledGrid1Wrapper>
);

const StyledGrid2Wrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 200px;
  grid-template-columns: 50px minmax(800px, 1fr) 250px;

  > div {
    border: solid 1px;
  }
`;
export const Grid2 = () => (
  <StyledGrid2Wrapper>
    <div>a</div>
    <div>b</div>
    <div>c</div>
    <div>d</div>
    <div>e</div>
    <div>f</div>
  </StyledGrid2Wrapper>
);

const StyledGrid3Wrapper = styled.div`
  display: grid;
  grid-template-rows: 100px 200px 100px;
  grid-template-columns: repeat(auto-fill, minmax(150px, 200px));

  > div {
    border: solid 1px;
  }
`;
export const Grid3 = () => (
  <StyledGrid3Wrapper>
    <div>a</div>
    <div>b</div>
    <div>c</div>
    <div>d</div>
    <div>e</div>
    <div>f</div>
    <div>f</div>
    <div>f</div>
    <div>f</div>
    <div>f</div>
    <div>f</div>
    <div>f</div>
    <div>f</div>
    <div>f</div>
  </StyledGrid3Wrapper>
);

const StyledGrid4Wrapper = styled.div`
  display: grid;
  grid-template-rows: 100px;
  grid-template-columns: repeat(auto-fit, minmax(10px, 1fr));

  > div {
    border: solid 1px;
  }
`;
export const Grid4 = () => (
  <StyledGrid4Wrapper>
    <div>a</div>
    <div>b</div>
    <div>c</div>
    <div>d</div>
    <div>e</div>
    <div>f</div>
    <div>f</div>
    <div>f</div>
    <div>f</div>
  </StyledGrid4Wrapper>
);

const StyledGrid5Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'head head head'
    'sub main main'
    'foot foot foot';
  grid-template-rows: 50px 150px 100px;
  grid-template-columns: 100px 200px 300px;
  gap: 10px;

  > div {
    border: solid 1px;
  }
`;
export const Grid5 = () => (
  <StyledGrid5Wrapper>
    <div style={{ gridArea: 'head' }}>head1</div>
    <div style={{ gridArea: 'sub' }}>sub</div>
    <div style={{ gridArea: 'main' }}>main</div>
    <div style={{ gridArea: 'foot' }}>foot</div>
  </StyledGrid5Wrapper>
);

const StyleText1A = styled.p`
  text-align: right;
`;

const StyleText1B = styled.p`
  text-align: center;
`;

export const Text1 = () => (
  <>
    <StyleText1A>StyleText1A</StyleText1A>
    <StyleText1B>StyleText1B</StyleText1B>
  </>
);

const StyledText2Wrapper = styled.div`
  columns: 2;
  width: 100px;
  border: solid 1px;
`;
export const Text2 = () => (
  <StyledText2Wrapper>
    <p>Title</p>
    <span>txt, txt, aaaaaaaaaaaaaaaaaaaaaaaaaa....</span>
  </StyledText2Wrapper>
);
