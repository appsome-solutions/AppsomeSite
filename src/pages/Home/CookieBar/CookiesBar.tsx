import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import useLocalStorage from 'react-use-localstorage';
import { Button } from 'components/Button/Button';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { MaxWidthWithBg } from '../../../components/MaxSizeAndBackground/MaxWidthAndBg';
import { media, useRWD } from 'global/RWD';
import CockieContent from 'assets/CockieContent.svg';

const CookiesBarStyled = styled.div`
  background-color: ${props => props.theme.colors.main.tetiary};
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  z-index: ${props => props.theme.zIndex.satellite};
  ${media.xs`
  float:left;
  padding-left:16px;
  `}
  ${media.md`
  justify-content: center;
  padding-left:0;
  `}
`;

const CookiesBarBackground = styled.div`
  background-color: ${props => props.theme.colors.main.tetiary};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CookieText = styled.span`
  ${props => props.theme.typography.caption};
  background-color: ${props => props.theme.colors.main.tetiary};
  margin-left: 8px;
  ${media.xs`
  margin:8px 0;
  `}
  ${media.lg`
  margin: 0;
  `}
`;

const TextHere = styled.span`
  ${props => props.theme.typography.caption};
  margin-left: 4px;
  cursor: pointer;
  color: ${props => props.theme.colors.main.secondary};
  &:hover {
    text-decoration-line: ${props => props.theme.textDecorationLine};
    text-decoration-skip: spaces;
  }
  margin-bottom: 8px;
`;

const CookiesIcon = styled.img`
  margin-right: 8px;
  height: auto;
  ${media.xs`
  margin: 8px;
  `} ${media.lg`
  margin: 4px;
  `};
`;

const ButtonAccept = styled(Button)`
  width: auto;
  && {
    height: 20px;
  }
  ${media.lg`
  margin-left: 8px;
  `}
`;

export const CookieBar: FunctionComponent = () => {
  const [isVisible, setIsVisible] = useLocalStorage('isVisible', 'true');
  const { less, more } = useRWD();
  if (isVisible === 'false') {
    return null;
  }
  return (
    <CookiesBarStyled>
      <MaxWidthWithBg BackgroundColorProps="secondary">
        <CookiesBarBackground>
          <CookiesIcon src={CockieContent} />
          {more.md && (
            <CookieText>
              We are using cookies, unfortunately they are not with chocolate... You can learn about it more
              <Link to="Policy" spy={true} smooth={true} offset={-99} duration={500}>
                <LinkRouter to="/privacy-policy">
                  <TextHere>here</TextHere>
                </LinkRouter>
              </Link>
              <ButtonAccept onClick={() => setIsVisible('false')}>ACCEPT</ButtonAccept>
            </CookieText>
          )}
          {less.md && (
            <CookieText>
              We are using cookies, unfortunately <br /> they are not with chocolate... You can <br /> learn about it
              more
              <Link to="Policy" spy={true} smooth={true} offset={-99} duration={500}>
                <LinkRouter to="/privacy-policy">
                  <TextHere>here</TextHere>
                </LinkRouter>
              </Link>
              <br />
              <ButtonAccept onClick={() => setIsVisible('false')}>ACCEPT</ButtonAccept>
            </CookieText>
          )}
        </CookiesBarBackground>
      </MaxWidthWithBg>
    </CookiesBarStyled>
  );
};
