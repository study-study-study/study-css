import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenNib,
  faMapMarkerAlt,
  faClock,
  faPenFancy,
} from "@fortawesome/free-solid-svg-icons";
import * as S from "./MainStyled";
import * as SF from "./Footer/Styled";

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

const StyledList = styled.ul`
  > li {
    margin-bottom: 1rem;
    line-height: 1.5;
  }
`;

const StyledFigure = styled.figure`
  margin: 30px 0;
`;

const StyledFigureCaption = styled.figcaption`
  margin-top: 5px;
  font-size: 0.75rem;
  color: #747474;
  text-align: center;
`;

const StyledImgArea = styled.div`
  display: flow-root;
  margin: 30px 0;
  > img {
    width: 40%;
    float: right;
    margin: 0 0 1rem 1rem;
  }
  > p {
    margin: 0;
  }
`;

const StyledTagArea = styled.div`
  margin-bottom: 5px;
  font-size: 0.75rem;
  line-height: 2;
`;

const StyledTag = styled.span`
  margin: 0 3px 0 0;
  padding: 2px 10px;
  background: #73cbd6;
  border-radius: 100px;
`;

const StyledItem = styled.a`
  color: #fff;
  text-decoration: none;
`;

// https://www.robinwieruch.de/styled-components
const StyledInfo = {
  Area: styled.div`
    font-size: 0.75rem;
    text-align: right;
    margin-bottom: 3px;
    padding-bottom: 15px;
    background: url(/post-line.svg) bottom repeat-x;
  `,
  Items: styled.span`
    margin: 0 10px 0 0;
  `,
  Item: styled(FontAwesomeIcon)`
    font-size: 16px;
    padding-right: 5px;
    color: #73cbd6;
  `,
};

export const Main: React.VFC = () => (
  <StyledMain>
    <StyledPostHeader>
      <StyledMainTitle>
        知らない街の「地元」の空気に触れたい！ファーマーズマーケットには情報がいっぱい
      </StyledMainTitle>
      <StyledTagArea>
        <StyledTag>
          <StyledItem href="walk">歩く</StyledItem>
        </StyledTag>
        <StyledTag>
          <StyledItem href="eat">食べる</StyledItem>
        </StyledTag>
      </StyledTagArea>
      <StyledInfo.Area>
        <StyledInfo.Items>
          <StyledInfo.Item icon={faPenNib} />
          桑山みなと
        </StyledInfo.Items>
        <StyledInfo.Items>
          <StyledInfo.Item icon={faMapMarkerAlt} />
          サンフランシスコ
        </StyledInfo.Items>
        <StyledInfo.Items>
          <StyledInfo.Item icon={faClock} />
          2020.6.16
        </StyledInfo.Items>
      </StyledInfo.Area>
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
      <StyledFigure>
        <img src="/post-photo1.jpg" alt="" />
        <StyledFigureCaption>
          グリルとフレッシュ、野菜の味の深みが変わってどちらも楽しめた
        </StyledFigureCaption>
      </StyledFigure>
      <StyledContent>
        今回、旅行でファーマーズマーケットを楽しむコツを3つ覚えたので、次は別の土地でもそのエリアの「市」を見つけて楽しむことにしよう。
      </StyledContent>
      <StyledList>
        <li>お店の人になんでも質問をする</li>
        <li>調理販売しているフードスタンドは要チェック</li>
        <li>
          たくさん購入したくなるけれど、食べきれる量の果物や、お土産にできるジャムなどの加工品を選ぶ
        </li>
      </StyledList>

      <S.InfoBox.Area>
        <S.InfoBox.Text>
          <strong>Green Farmers Market</strong>
          <br />
          毎週水曜日 9:00〜13:00
          <br />
          毎月第1日曜日 9:00〜15:00（フードスタンドは日曜日の出店が多い）
          <br />
        </S.InfoBox.Text>
      </S.InfoBox.Area>

      <StyledImgArea>
        <img src="/post-photo2.jpg" alt="" />
        <p>
          ファーマーズマーケットから市の中心街に移動する道でカフェを見つけた。歩き回ってちょっと疲れたしコーヒーでも飲んで休憩することにしよう。
        </p>
        <p>
          店内にはけっこうお客さんがいた。ひとりで本を読んでいる若い男性、しずかにおしゃべりしている男女、常連らしいおじいちゃんは窓際で新聞を読んでいる。それぞれ自分の好きな時間を過ごしているという空気で居心地がいい。近くの席でパソコンを開いている女性と、なんとなく会話が始まった。彼女は教育関係の仕事をしていて、教材のアイディアを考えているところだった。
        </p>
      </StyledImgArea>

      <S.Chat.Area>
        <S.Chat.List>
          <S.Chat.Face>
            <S.Chat.FaceImg src="/speaker1.jpg" alt="" />
          </S.Chat.Face>
          <S.Chat.Talk>
            <S.Chat.TalkItem>学校で仕事をしているんですか？</S.Chat.TalkItem>
          </S.Chat.Talk>
        </S.Chat.List>

        <S.Chat.List isResponse>
          <S.Chat.Face isResponse>
            <S.Chat.FaceImg src="/speaker2.jpg" alt="" />
          </S.Chat.Face>
          <S.Chat.Talk isResponse>
            <S.Chat.TalkItem>
              いいえ。子供向けの博物館で、ワークショップの運営をしています。
            </S.Chat.TalkItem>
          </S.Chat.Talk>
        </S.Chat.List>
      </S.Chat.Area>
    </StyledPostContents>
    <SF.Footer.Area>
      <SF.Footer.Title>
        <SF.Footer.TitleIcon icon={faPenFancy} /> Profile
      </SF.Footer.Title>
      <SF.Footer.Profile>
        <SF.Footer.ProfilePhot>
          <SF.Footer.ProfilePhotImg src="/writer.jpg" alt="" />
        </SF.Footer.ProfilePhot>
        <SF.Footer.TextWrapper>
          <SF.Footer.Text>
            <strong>桑山みなと</strong>
            <br />
            大手出版社の編集者を経てライターとして独立。絵本、児童文学に詳しく、小学校の教員免許を持っているため、絵本作家や教育関係者へのインタビュー経験が多い。現在シアトルに長期滞在中で、Tansaku!では「アメリカ西海岸レポート」を連載している。
          </SF.Footer.Text>
        </SF.Footer.TextWrapper>
      </SF.Footer.Profile>
    </SF.Footer.Area>
  </StyledMain>
);
