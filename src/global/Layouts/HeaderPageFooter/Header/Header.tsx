import React from 'react';
import styled from 'styled-components';
import LogoSvg from 'assets/logo.svg';
import { Link as LinkRouter } from 'react-router-dom';
import Headroom from 'react-headroom';
import { scrollTo } from '../HeaderFooterCommon';
import { HamburgerMenu } from './HamburgerMenu/HamburgerMenu';
import { media, useRWD } from 'global/RWD';
import { MaxWidthWithBg } from 'components/MaxSizeAndBackground/MaxWidthAndBg';

const HeaderScroll = styled(Headroom)`
  position: relative;
  && {
    z-index: ${props => props.theme.zIndex.towerBlock};
  }
  .headroom--pinned {
    max-width: auto;
    height: 102px;
    border-bottom: 1px solid ${props => props.theme.colors.utils.border.light};
    background-color: ${props => props.theme.colors.main.primary};
  }
  .headroom--unpinned {
    max-width: auto
    background-color: ${props => props.theme.colors.main.primary};
  }
`;

const HeaderWrapper = styled.div`
  width: 100%;
  background-color: ${props => props.theme.colors.main.primary};
  height: 100px;
  display: flex;
  justify-content: space-between;
  padding-left: 80px;
  padding-right: 80px;
  align-items: center;
  ::active {
    border-bottom: 1px solid ${props => props.theme.colors.utils.border.light};
  }
  ${media.xs`
    padding:0 32px;
  `}
  ${media.lg`
    padding-left: 80px;
  `}
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

export const Header = () => {
  const { more, less } = useRWD();

  return (
    <HeaderScroll className="Header">
      <MaxWidthWithBg BgColor="primary">
        <HeaderWrapper>
          {less.lg && <HamburgerMenu />}
          <LinkRouter to="/">
            <img src={LogoSvg} alt="" />
          </LinkRouter>
          {more.lg && (
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
          )}
        </HeaderWrapper>
      </MaxWidthWithBg>
    </HeaderScroll>
  );
};
