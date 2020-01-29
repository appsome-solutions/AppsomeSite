import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import LogoSvg from 'assets/logo.svg';
import { Link } from 'react-scroll';
import CookieIcon from 'assets/CookieIcon.svg';
import CloseSign from 'assets/CloseSign.svg';
const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  height: 100px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 80px;
  padding-right: 80px;
  align-items: center;
`;

const LinksPosition = styled.div`
  display: flex;
`;

const HeaderText = styled.h6`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-right: 64px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine}
`;
const CookiesBar = styled.div`
  background-color: ${props => props.theme.colors.main.tetiary};
  height: 32px;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 8000;
`;
const CookieText = styled.span`
  ${props => props.theme.typography.caption};
  margin: 0 8px 0 8px;
`;
const TextHere = styled.span`
  ${props => props.theme.typography.caption};
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine};
  }
`;
const CookiesIcon = styled.img`
  margin-right: 8px;
`;
const XIcon = styled.img`
  width: 8px;
  height: 8px;
`;
export const Header: FunctionComponent = () => (
  <>
    <HeaderWrapper>
      <img src={LogoSvg} alt="" />
      <LinksPosition>
        <Link activeClass="active" to="Process" spy={true} smooth={true} duration={500}>
          <HeaderText>Process</HeaderText>
        </Link>
        <Link activeClass="active" to="Service" spy={true} smooth={true} duration={500}>
          <HeaderText>Services</HeaderText>
        </Link>
        <Link activeClass="active" to="Portfolio" spy={true} smooth={true} duration={500}>
          <HeaderText>Portfolio</HeaderText>
        </Link>
        <Link activeClass="active" to="Contact" spy={true} smooth={true} duration={500}>
          <HeaderText>Contact</HeaderText>
        </Link>
      </LinksPosition>
    </HeaderWrapper>
    <CookiesBar>
      <CookieText>
        <CookiesIcon src={CookieIcon} />
        We are using cookies, unfortunately they are not with chocolate... You can learn about it more
        <TextHere> here</TextHere>
      </CookieText>
      <XIcon src={CloseSign} alt="" />
    </CookiesBar>
  </>
);
