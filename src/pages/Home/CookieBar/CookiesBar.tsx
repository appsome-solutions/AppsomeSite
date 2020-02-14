import CookieIcon from 'assets/CookieIcon.svg';
import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import useLocalStorage from 'react-use-localstorage';
import { Button } from 'components/Button/Button';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';

const CookiesBarStyled = styled.div`
  background-color: ${props => props.theme.colors.main.tetiary};
  height: 40px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${props => props.theme.zIndex.towerBlock};
`;

const CookieText = styled.span`
  ${props => props.theme.typography.caption};
  margin-left: 8px;
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
`;

const CookiesIcon = styled.img`
  margin-right: 8px;
`;

const ButtonAccept = styled(Button)`
  margin-left: 8px;
  && {
    height: 20px;
    ${props => props.theme.typography.caption};
  }
`;

export const CookieBar: FunctionComponent = () => {
  const [isVisible, setIsVisible] = useLocalStorage('isVisible', 'true');
  if (isVisible === 'false') {
    return null;
  }
  return (
    <CookiesBarStyled>
      <CookieText>
        <CookiesIcon src={CookieIcon} />
        We are using cookies, unfortunately they are not with chocolate... You can learn about it more
        <Link to="Policy" spy={true} smooth={true} offset={-99} duration={500}>
          <LinkRouter to="/privacy-policy">
            <TextHere>here</TextHere>
          </LinkRouter>
        </Link>
        <ButtonAccept onClick={() => setIsVisible('false')}>ACCEPT</ButtonAccept>
      </CookieText>
    </CookiesBarStyled>
  );
};
