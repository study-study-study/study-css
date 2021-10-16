import styled, { css } from 'styled-components';

export const InfoBox = {
  Area: styled.div`
    padding: 2rem;
    margin: 30px 0;
    border: 4px solid #b8e5ea;
  `,
  Text: styled.p`
    margin: 0;
  `,
};

type ChatModifier = Partial<{
  /**
   * 返信用
   */
  isResponse: true;
}>;
export const Chat = {
  Area: styled.div`
    margin: 30px 0;
  `,
  List: styled.div<Pick<ChatModifier, 'isResponse'>>`
    display: flex;
    margin: 15px 0;
    ${(props) =>
      props.isResponse &&
      css`
        flex-direction: row-reverse;
      `}
  `,
  Face: styled.div<Pick<ChatModifier, 'isResponse'>>`
    flex: 0 0 70px;
    ${(props) =>
      props.isResponse
        ? css`
            margin: 0 0 0 10px;
          `
        : css`
            margin: 0 10px 0 0;
          `}
  `,
  FaceImg: styled.img`
    border-radius: 50%;
  `,
  Talk: styled.div<Pick<ChatModifier, 'isResponse'>>`
    flex: 1 1 auto;
    padding: 1.5rem;
    border-radius: 20px;
    ${(props) =>
      props.isResponse
        ? css`
            background: #ffff7c;
          `
        : css`
            background: #b8e5ea;
          `}
  `,
  TalkItem: styled.p`
    margin: 0;
  `,
};
