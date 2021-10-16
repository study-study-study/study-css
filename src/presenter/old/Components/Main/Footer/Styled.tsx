import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Footer = {
  Area: styled.footer`
    margin: 0 0 60px 0;

    @media (min-width: 768px) {
      max-width: 600px;
      margin: 0 auto 60px auto;
    }
  `,
  Title: styled.h2`
    display: inline-block;
    padding: 10px 30px;
    color: white;
    background-color: black;
    border-radius: 10px 10px 0 0;
  `,
  TitleIcon: styled(FontAwesomeIcon)`
    display: block;
  `,
  Profile: styled.div`
    display: flex;
    padding: 1rem;
    border: 1px solid #000;
  `,
  ProfilePhot: styled.div`
    flex: 0 0 100px;
    margin-right: 1rem;
  `,
  ProfilePhotImg: styled.img`
    border-radius: 50%;
  `,

  TextWrapper: styled.div`
    flex: 1 1 auto;
  `,
  Text: styled.p`
    margin: 0;
    line-height: 1.9;
  `,
};
