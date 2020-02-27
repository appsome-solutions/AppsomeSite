import React, { useContext, useState } from 'react';
import HamburgerMenuSvg from 'assets/hamburger-menu.svg';
import { Icon } from 'components/Icon/Icon';
import { css, ThemeContext } from 'styled-components';
import { Drawer } from 'antd';
import styled from 'styled-components';
import { LinkWithoutIsActiveInDom, StyledLinkProps } from '../common';
import { scrollTo } from '../../HeaderFooterCommon';

const LinkStyles = css<StyledLinkProps>`
  height: 50px;
  color: ${props => props.theme.colors.utils.text.dark};
  display: flex;
  align-items: center;
  padding-left: 28px;
  cursor: pointer;
  ${props =>
    props.isActive &&
    css`
      background-color: ${props.theme.colors.utils.background.accent};
      border: 2px solid ${props.theme.colors.utils.background.accent};
      color: ${props.theme.colors.main.primary};
    `}
  &:hover {
    background-color: ${props => props.theme.colors.utils.background.accent}};
  }
`;

const StyledLink = styled(LinkWithoutIsActiveInDom)<StyledLinkProps>`
  ${LinkStyles}
`;

const DrawerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 21px 13px;
  font-size: 18px;
`;

const MenuDivider = styled.div`
  height: 20px;
  background-color: ${props => props.theme.colors.utils.text.light};
`;

const HamburgerMenuIcon = styled(Icon).attrs({
  svgLink: HamburgerMenuSvg,
})`
  height: 20px;
  width: 30px;
`;

const StyledDrawer = styled(Drawer).attrs({
  width: '316px',
})`
  .ant-drawer-body {
    padding: 0;
  }
  &&& .ant-drawer-content-wrapper {
    height: auto;
  }
`;

export const HamburgerMenu = () => {
  const themeContext = useContext(ThemeContext);
  const [isMenuOpened, setIsMenuOpened] = useState(false);
  const HamburgerFunction = (place: string) => {
    scrollTo(place);
    setIsMenuOpened(false);
  };
  return (
    <div>
      <HamburgerMenuIcon color={themeContext.colors.utils.background.light} onClick={() => setIsMenuOpened(true)} />
      <StyledDrawer placement="left" closable={false} onClose={() => setIsMenuOpened(false)} visible={isMenuOpened}>
        <MenuDivider />
        <DrawerWrapper>
          <StyledLink to="/" onClick={() => HamburgerFunction('Process')}>
            Process
          </StyledLink>
          <StyledLink to="/" onClick={() => HamburgerFunction('Service')}>
            Service
          </StyledLink>
          <StyledLink to="/" onClick={() => HamburgerFunction('Portfolio')}>
            Portfolio
          </StyledLink>
          <StyledLink to="/" onClick={() => HamburgerFunction('Contact')}>
            Contact
          </StyledLink>
        </DrawerWrapper>
      </StyledDrawer>
    </div>
  );
};
