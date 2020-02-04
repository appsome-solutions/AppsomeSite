import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import LogoSvg from 'assets/logo.svg';
import { Link } from 'react-scroll';
import Headroom from 'react-headroom';

const HeaderScroll = styled(Headroom)`
  position: relative;
  && {
    z-index: ${props => props.theme.zIndex.towerBlock};
  }
  .headroom--pinned {
    border-bottom: 1px solid ${props => props.theme.colors.utils.border.light};
  }
`;
const HeaderWrapper = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  height: 100px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 80px;
  padding-right: 80px;
  align-items: center;
  ::active {
    border-bottom: 1px solid ${props => props.theme.colors.utils.border.light};
  }
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

export const Header: FunctionComponent = () => (
  <HeaderScroll>
    <HeaderWrapper>
      <img src={LogoSvg} alt="" />
      <LinksPosition>
        <Link activeClass="active" to="Process" spy={true} smooth={true} duration={500}>
          <HeaderText>Process</HeaderText>
        </Link>
        <Link to="Service" spy={true} smooth={true} duration={500}>
          <HeaderText>Services</HeaderText>
        </Link>
        <Link to="Portfolio" spy={true} smooth={true} duration={500}>
          <HeaderText>Portfolio</HeaderText>
        </Link>
        <Link to="Contact" spy={true} smooth={true} duration={500}>
          <HeaderText>Contact</HeaderText>
        </Link>
      </LinksPosition>
    </HeaderWrapper>
  </HeaderScroll>
);
