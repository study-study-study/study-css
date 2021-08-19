import React from "react";
import styled from "styled-components";

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

const StyledContent = styled.p`
  margin: 30px 0;
  line-height: 1.9;
  text-align: justify;
`;

const StyledMainTitle = styled.h1`
  font-size: 1.875rem;
  line-height: 1.5;
`;

const StyledSubTitle = styled.h1`
  margin: 60px 0 30px 0;
  padding: 1rem 0;
  border-top: 1px solid #000;
  border-bottom: 1px solid #000;
  font-size: 1.25rem;
`;

const StyledMark = styled.mark`
  background: linear-gradient(transparent 50%, #ffff7c 50%);
`;

const StyledUl = styled.ul`
  > li {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

export const Main: React.VFC = () => (
  <StyledMain>
    <StyledPostHeader>
      <StyledMainTitle>
        知らない街の「地元」の空気に触れたい！ファーマーズマーケットには情報がいっぱい
      </StyledMainTitle>
    </StyledPostHeader>
    <StyledPostContents>
      <StyledSubTitle>
        ファーマーズマーケットで見つけた「地元」の味
      </StyledSubTitle>
      <StyledContent>
        サンフランシスコは、レトロなケーブルカーや真っ赤なゴールデンゲートブリッジなど、青い空に似合う観光スポットがたくさんある。それらを思い切り楽しむのももちろんいいけれど、もっと普通の「地元」っぽい空気を感じてみたかったので、ファーマーズマーケットに行ってみた。
      </StyledContent>
      <StyledContent>
        まず目に入るのはカラフルな野菜や果物。日本では見慣れない葉物や、日本のものと似ているけれどちょっと違う趣の根菜類などを見つけては、どんな風に食べるのかを聞いてみる。「このまま食べればいいんだよ」と味見をさせてくれたり、簡単なレシピを教えてくれたり、
        <StyledMark>マーケットに立つ店主たちはとても気さく</StyledMark>
        だ。買った果物をその場でカットしてもらって食べているお客さんもいる。
        <br />
        どんどん目移りしてついたくさん買いたくなってしまうのだけれど、旅行で訪れているときは調理する場所も時間もない。でもどうしても何か欲しくて、オレンジを1個だけ買った。
      </StyledContent>
      <StyledContent>
        食材を買えないのは残念だが、マーケットにはフードスタンドがいくつもある。網のうえでほどよく焼かれた牡蠣がガーリックのきいたいい香りを漂わせている。サンフランシスコというとカニのイメージを持っていたのだけれど、実は牡蠣も有名なのだ。1個から購入できるのでとりあえず食べてみると、裏切らないおいしさでワインが欲しくなった。
        <br />
        次に目に入ったのは、オーガニック野菜をふんだんに使ったオープンサンドだ。たくさんの野菜を並べた農家のテントで販売されている。店主のご夫婦に聞くと、ここベイエリアは健康志向でオーガニック食材を求める人が多いという。普段スーパーで買う野菜の味とどれほど違うのか知りたくて、さっそくオーダーした。バケットの上にフレッシュな野菜のみじん切りがたっぷり敷き詰められている。味付けはオリーブオイルとバルサミコビネガーでシンプルに。そこに軽くグリルした野菜串とバジルがのせられ完成だ。実にシンプルなのだけれど、食べてみると、野菜の味がとても濃くて驚いた。
      </StyledContent>
      <StyledContent>
        今回、旅行でファーマーズマーケットを楽しむコツを3つ覚えたので、次は別の土地でもそのエリアの「市」を見つけて楽しむことにしよう。
      </StyledContent>

      <StyledUl>
        <li>お店の人になんでも質問をする</li>
        <li>調理販売しているフードスタンドは要チェック</li>
        <li>
          たくさん購入したくなるけれど、食べきれる量の果物や、お土産にできるジャムなどの加工品を選ぶ
        </li>
      </StyledUl>
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
