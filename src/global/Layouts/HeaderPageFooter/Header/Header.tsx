import React from 'react';
import styled from 'styled-components';
import LogoSvg from 'assets/logo.svg';
import { Link as LinkRouter } from 'react-router-dom';
import Headroom from 'react-headroom';
import { scrollTo } from '../HeaderFooterCommon';

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

export const Header = () => (
  <HeaderScroll>
    <HeaderWrapper>
      <LinkRouter to="/">
        <img src={LogoSvg} alt="" />
      </LinkRouter>
      <LinksPosition>
        <LinkRouter to="/" onClick={() => scrollTo('Process')}>
          <HeaderText>Process</HeaderText>
        </LinkRouter>
        <LinkRouter to="/" onClick={() => scrollTo('Service')}>
          <HeaderText>Services</HeaderText>
        </LinkRouter>
        <LinkRouter to="/" onClick={() => scrollTo('Portfolio')}>
          <HeaderText>Portfolio</HeaderText>
        </LinkRouter>
        <LinkRouter to="/" onClick={() => scrollTo('Contact')}>
          <HeaderText>Contact</HeaderText>
        </LinkRouter>
      </LinksPosition>
    </HeaderWrapper>
  </HeaderScroll>
);
