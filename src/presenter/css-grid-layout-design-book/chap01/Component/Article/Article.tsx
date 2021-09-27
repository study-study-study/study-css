import React from "react";
import Image from "next/image";
import * as S from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faFacebook,
  faGooglePlus,
} from "@fortawesome/free-brands-svg-icons";

export const Article: React.VFC = () => (
  <S.Area>
    <S.MainTitle>夏の海のアクティビティ</S.MainTitle>
    <S.SubTitle>SUMMER ACTIVITY</S.SubTitle>
    <S.DateTime dateTime="2020-08-01">
      <span></span> 2020/08/01
    </S.DateTime>
    <S.LeadTxt>
      おでかけ妄想シリーズ。今回は「夏の海のアクティビティ」というお題をいただきましたので、南国気分でお届けします。
    </S.LeadTxt>
    <S.Img1>
      <Image src="/ocean.jpg" alt="海" width={1500} height={1000} />
    </S.Img1>
    <S.TxtCatchCopy>
      青色に広がる海を眺めて
      <br />
      のんびりまったりな幸せを満喫
    </S.TxtCatchCopy>
    <S.Txt1>
      <p>
        キラキラと光る青い海、ゆらゆらと浮かぶ小さな舟、どこまでも歩いていける白い砂浜。朝早く目覚めて波打ち際をちゃぷちゃぷ歩いていると、カラッとした空気にサラッとした風が気持ちよく感じます。ここはとある南の小さな島です。
      </p>

      <p>
        海が広いのか、滞在者が少ないのか、人の姿もそれほど目につきません。満員電車のように人で溢れたどこかの海水浴場とは大違いです。海と砂浜と青い空を独り占めにして、のんびり景色を眺めたり、なんとなく波と戯れてみたり、木陰でお昼寝してみたり、読書して過ごしてみたり…
        なんて誰もが夢描いたことがありそうな南国リゾート的な時間の使い方もできてしまうところなのです。
      </p>
    </S.Txt1>
    <S.Img2>
      <Image src="/tree.jpg" alt="ツリー" width={1200} height={1000} />
      <figcaption>
        サラサラの風に吹かれながら
        <br />
        木陰でお昼寝するのも気持ちいいです。
      </figcaption>
    </S.Img2>
    <S.Txt2>
      <p>
        とはいえ、日頃から時間に追われる生活をしていると、いきなり「自由にのんびり過ごしていいよ～」と言われてもどうしたものか戸惑ってしまうもの。そんなときには、そこでしかできない「何か」に挑戦してみるのもおすすめです。
      </p>
      <p>
        リゾート地であれば、大なり小なり多彩なマリンアクティビティが楽しめます。シュノーケリング、アクアウォーク、パラセーリング、ジェットスキー、バナナボート、シーカヤック
        etc.
        本格的なものから、泳ぐのが苦手な人でも楽しめるものまで、さまざまなプランが用意されていますので、検索するだけでも楽しいです。そして、検索結果で夢を大きくしていくのは自由です。
      </p>
      <p>
        夢を大きくしすぎて日常に戻るのが嫌になったら、またここに遊びにきてください。きれいな写真を用意してお待ちしています。
      </p>
    </S.Txt2>
    <S.Sns>
      <ul>
        <li>
          <a href="dummy">
            <FontAwesomeIcon icon={faTwitter}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="dummy">
            <FontAwesomeIcon icon={faFacebook}></FontAwesomeIcon>
          </a>
        </li>
        <li>
          <a href="dummy">
            <FontAwesomeIcon icon={faGooglePlus}></FontAwesomeIcon>
          </a>
        </li>
      </ul>
    </S.Sns>
  </S.Area>
);
