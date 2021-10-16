/* eslint-disable @next/next/no-img-element */
import React from 'react';
import styled from 'styled-components';

/**
 * 完結したコンテンツ
 */
export const Article: React.VFC = () => (
  <article>
    <img src="/room_office_clean.png" alt="オフィスの画像" width="300px" />
    <h1>快適なホームオフィス</h1>
    <p>家でリラックスしながら仕事する。...</p>
  </article>
);

/**
 * ナビゲーションの役割
 */
export const Nav: React.VFC = () => (
  <nav>
    <ul>
      <li>メニューA</li>
      <li>メニューB</li>
      <li>メニューC</li>
    </ul>
  </nav>
);

/**
 * 補足や関連情報
 */
export const Aside: React.VFC = () => <aside>SNSのシェアボタン</aside>;

/**
 * 汎用的なセクション
 */
export const Section: React.VFC = () => (
  <section>
    <h2>コンパクトな作業スペース</h2>
    <p>オフィスだからといって、広い作業スペースは不要です。</p>
  </section>
);

/**
 * ざっくりとした全体像
 */
export const Sample: React.VFC = () => (
  <>
    <header>
      <div>ACTIVE</div>
      <nav>
        <ul>
          <li>メニューA</li>
          <li>メニューB</li>
          <li>メニューC</li>
        </ul>
      </nav>
    </header>
    <article>
      <img src="/room_office_clean.png" alt="オフィスの画像" width="300px" />
      <h1>快適なホームオフィス</h1>
      <p>家でリラックスしながら仕事する。...</p>
      <address>
        <a href="http://dummy.com">リンク</a>
      </address>
    </article>
    <aside>補足情報</aside>
    <footer>
      <small>@ ACTIVE</small>
    </footer>
  </>
);

/**
 * 見出し, サブタイトル
 */
export const Hgroup: React.VFC = () => (
  <hgroup>
    <h1>見出し</h1>
    <h2>サブタイトル</h2>
  </hgroup>
);

/**
 * header, footerを内包したarticle
 */
export const Article2: React.VFC = () => (
  <article>
    <header>
      <img src="/room_office_clean.png" alt="オフィスの画像" width="300px" />
      <h1>タイトル</h1>
    </header>
    <footer>
      <address>
        <a href="http://dummy.com">リンク</a>
      </address>
    </footer>
  </article>
);

/**
 * 段落やテキストのまとまり
 */
export const Paragraph = () => (
  <>
    <p>ひとかたまりの文節</p>
    <p>住所の表記</p>
    <p>フォームの各項目</p>
  </>
);

/**
 * パラグラフの区切りに入れる
 */
export const Line = () => (
  <>
    <p>ひとかたまりの文節A</p>
    <p>ひとかたまりの文節B</p>
    <hr />
    <p>住所の表記</p>
  </>
);

/**
 * 整形済み的スト
 */
export const Pre = () => <pre>{'const fn = () => "fn";'}</pre>;

/**
 * 引用済みテキスト
 */
export const Blockquote = () => (
  <blockquote>
    <p>どこから引用した文章</p>
  </blockquote>
);

export const List = () => (
  <>
    <ul>
      <li>りんご</li>
      <li>ばなな</li>
      <li>みかん</li>
    </ul>
    <ol>
      <li>はじめに</li>
      <li>つづいて</li>
      <li>さいごに</li>
    </ol>

    <ol type="A" reversed>
      <li>はじめに</li>
      <li>つづいて</li>
      <li>さいごに</li>
    </ol>
  </>
);

/**
 * menuは、ユーザが操作するコマンド
 *
 */
export const ToolBar = () => (
  <menu>
    <li>
      <button>コピー</button>
    </li>
    <li>
      <button>ペースト</button>
    </li>
  </menu>
);

/**
 * 説明リスト
 */
export const DetailLIst = () => (
  <dl>
    <dt>にんじん</dt>
    <dd>オレンジカロテン豊富</dd>

    <dt>ほうれん草</dt>
    <dd>鉄分豊富</dd>
  </dl>
);

/**
 * 自己完結したコンテンツをマークアップ
 */
export const Figure = () => (
  <figure>
    <img src="/medical_mask_front_view.png" alt="マスク画像" width="300px" />
    <figcaption>外出時は必須です。</figcaption>
  </figure>
);

/**
 * ざっくりとした全体像
 */
export const Overview = () => (
  <>
    <header>ヘッダー</header>
    <main>
      <article>記事</article>
    </main>
    <aside>SNSのシェアボタン</aside>
    <footer>フッター</footer>
  </>
);

export const Link = () => (
  <ul>
    <li>
      {/* 現在のページの場合は、`href`省略OK */}
      <a>ホーム</a>
    </li>
    <li>
      <a href="http://dummy.com">ニュース</a>
    </li>
  </ul>
);

export const Link2 = () => (
  <ul>
    <li>
      <a href="http://dummy.com" download>
        ダウンロード
      </a>
    </li>

    <li>
      <a href="http://dummy.com" ping="http://foo.com/cnt.png">
        アクセスを発生
      </a>
    </li>
  </ul>
);

export const Text = () => (
  <>
    <p>
      <strong>
        <strong>重要</strong>な事
      </strong>
    </p>
    <em>強調やアクセント</em>
    <small>コピーライト</small>

    <p>
      <s>定価: 1200円</s>
    </p>
    <p>特別価格: 900円</p>
  </>
);

export const Interactive = () => (
  <>
    <details>
      <summary>フォトデータ</summary>
      <dl>
        <dt>ファイル名</dt>
        <dd>foo.jpg</dd>

        <dt>大きさ</dt>
        <dd>150pxx100px</dd>
      </dl>
    </details>

    <dialog>
      {/* <dialog open> */}
      <h2>タイトル</h2>
      <input />
    </dialog>
  </>
);

const StyledBtn = styled.button.attrs({ type: 'button' })`
  color: red;

  &:hover {
    opacity: 0.8;
  }

  &:focus {
    opacity: 0.8;
  }

  ::before {
    content: '~';
  }
`;

export const Css1: React.VFC = () => (
  <div>
    <StyledBtn>ボタン</StyledBtn>
  </div>
);

const StyledMediaQuery = styled.div`
  width: 100px;
  height: 100px;
  background-color: black;

  @media (max-width: 599px) {
    background-color: red;
  }

  @media (min-width: 600px) and (max-width: 768px) {
    background-color: blue;
  }

  @media (min-width: 769px) {
    background-color: green;
  }
`;
export const MediaQuery: React.VFC = () => <StyledMediaQuery />;
