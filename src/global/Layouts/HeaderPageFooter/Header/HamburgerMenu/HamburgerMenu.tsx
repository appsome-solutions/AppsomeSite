import React, { useContext, useState } from 'react';
import HamburgerMenuSvg from 'assets/hamburger-menu.svg';
import { Icon } from 'components/Icon/Icon';
import { css, ThemeContext } from 'styled-components';
import { Drawer } from 'antd';
import styled from 'styled-components';
import { scrollTo } from '../../HeaderFooterCommon';
import ProcessMenu from 'assets/ProcessMenu.svg';
import ContactMenu from 'assets/ContactMenu.svg';
import PortfolioMenu from 'assets/PortfolioMenu.svg';
import ServiceMenu from 'assets/ServiceMenu.svg';
import { Link } from 'react-scroll';
import { NavLink } from 'react-router-dom';

const HamburgerIcon = styled(Icon)`
  .active {
    background-color: red;
  }
`;

const TextInHamburger = styled.div`
  margin-left: 20px;
  .active {
    color: red;
  }
  &&a:hover {
    color: red;
  }
`;

const LinkStyles = css`
  color: ${props => props.theme.colors.main.primary}
  height: 50px;
  display: flex;
  align-items: center;
  padding-left: 40px;
  &.active {
  background-color: ${props => props.theme.colors.main.tetiary};
  }
  &.active {  
    ${HamburgerIcon} {
    background-color: ${props => props.theme.colors.main.secondary};
    }
    ${TextInHamburger} {
      color: ${props => props.theme.colors.main.secondary};
    }
  }
  .hover {
    color: ${props => props.theme.colors.utils.text.dark};
  }
`;

const StyledLink = styled(Link)`
  ${LinkStyles};
`;
const LinkRouterStyle = styled(NavLink)`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.main.primary}
  height: 50px;
  width:100%;
    &:hover {
    color: ${props => props.theme.colors.main.secondary};
  }
`;

const DrawerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px 12px;
  font-size: 18px;
  background-color: ${props => props.theme.colors.utils.background.mid.color};
`;

const MenuDivider = styled.div`
  height: 20px;
  background-color: ${props => props.theme.colors.main.tetiary};
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
      <HamburgerMenuIcon color={themeContext.colors.main.tetiary} onClick={() => setIsMenuOpened(true)} />
      <StyledDrawer placement="left" closable={false} onClose={() => setIsMenuOpened(false)} visible={isMenuOpened}>
        <MenuDivider />
        <DrawerWrapper>
          <StyledLink to="Process" spy={true} activeClass="active" onClick={() => HamburgerFunction('Process')}>
            <LinkRouterStyle to="/">
              <HamburgerIcon svgLink={ProcessMenu} />
              <TextInHamburger>Process</TextInHamburger>
            </LinkRouterStyle>
          </StyledLink>
          <StyledLink to="Service" spy={true} activeClass="active" onClick={() => HamburgerFunction('Service')}>
            <LinkRouterStyle to="/">
              <HamburgerIcon svgLink={ServiceMenu} />
              <TextInHamburger>Service</TextInHamburger>
            </LinkRouterStyle>
          </StyledLink>
          <StyledLink to="Portfolio" spy={true} activeClass="active" onClick={() => HamburgerFunction('Portfolio')}>
            <LinkRouterStyle to="/">
              <HamburgerIcon svgLink={PortfolioMenu} />
              <TextInHamburger>Portfolio</TextInHamburger>
            </LinkRouterStyle>
          </StyledLink>
          <StyledLink to="Contact" spy={true} activeClass="active" onClick={() => HamburgerFunction('Contact')}>
            <LinkRouterStyle to="/">
              <HamburgerIcon svgLink={ContactMenu} />
              <TextInHamburger>Contact</TextInHamburger>
            </LinkRouterStyle>
          </StyledLink>
        </DrawerWrapper>
      </StyledDrawer>
    </div>
  );
};
