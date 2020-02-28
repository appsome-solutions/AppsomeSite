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

const LinkStyles = css`
  height: 50px;
  color: ${props => props.theme.colors.utils.text.dark};
  display: flex;
  align-items: center;
  padding-left: 40px;
  cursor: pointer;
`;

const StyledLink = styled(Link)`
  .active {
    color: ${props => props.theme.colors.main.secondary};
  }
  display: flex;
  align-items: center;
  ${LinkStyles};
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

const TextInHamburger = styled.div`
  margin-left: 20px;
`;

const HamburgerIcon = styled(Icon)``;

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
          <StyledLink to="/" activeClass="active" onClick={() => HamburgerFunction('Process')}>
            <HamburgerIcon svgLink={ProcessMenu} />
            <TextInHamburger>Process</TextInHamburger>
          </StyledLink>
          <StyledLink to="/" onClick={() => HamburgerFunction('Service')}>
            <HamburgerIcon svgLink={ServiceMenu} />
            <TextInHamburger>Service</TextInHamburger>
          </StyledLink>
          <StyledLink to="/" onClick={() => HamburgerFunction('Portfolio')}>
            <HamburgerIcon svgLink={PortfolioMenu} />
            <TextInHamburger>Portfolio</TextInHamburger>
          </StyledLink>
          <StyledLink to="/" onClick={() => HamburgerFunction('Contact')}>
            <HamburgerIcon svgLink={ContactMenu} />
            <TextInHamburger>Contact</TextInHamburger>
          </StyledLink>
        </DrawerWrapper>
      </StyledDrawer>
    </div>
  );
};
