import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import LogoSvg from 'assets/logo.svg';
import { scroller } from 'react-scroll';
import Headroom from 'react-headroom';
import { Link as LinkRouter } from 'react-router-dom';

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

const scrollToProcess = () => {
  scroller.scrollTo('Process', { duration: 500, smooth: true });
};

const scrollToService = () => {
  scroller.scrollTo('Service', { duration: 500, smooth: true });
};

const scrollToPortfolio = () => {
  scroller.scrollTo('Portfolio', { duration: 500, smooth: true });
};

const scrollToContact = () => {
  scroller.scrollTo('Contact', { duration: 500, smooth: true });
};

export const Header: FunctionComponent = () => (
  <HeaderScroll>
    <HeaderWrapper>
      <img src={LogoSvg} alt="" />
      <LinksPosition>
        <LinkRouter to="/" onClick={() => setTimeout(scrollToProcess)}>
          <HeaderText>Process</HeaderText>
        </LinkRouter>
        <LinkRouter to="/" onClick={() => setTimeout(scrollToService)}>
          <HeaderText>Services</HeaderText>
        </LinkRouter>
        <LinkRouter to="/" onClick={() => setTimeout(scrollToPortfolio)}>
          <HeaderText>Portfolio</HeaderText>
        </LinkRouter>
        <LinkRouter to="/" onClick={() => setTimeout(scrollToContact)}>
          <HeaderText>Contact</HeaderText>
        </LinkRouter>
      </LinksPosition>
    </HeaderWrapper>
  </HeaderScroll>
);
