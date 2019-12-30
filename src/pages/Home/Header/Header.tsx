import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import LogoSvg from 'assets/logo.svg';
import { HeaderText } from 'components/HeaderText/HeaderText';

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

export const Header: FunctionComponent = () => (
  <HeaderWrapper>
    <img src={LogoSvg} alt="" />
    <LinksPosition>
      <HeaderText>Process</HeaderText>
      <HeaderText>Services</HeaderText>
      <HeaderText>Portfolio</HeaderText>
      <HeaderText>Contact</HeaderText>
    </LinksPosition>
  </HeaderWrapper>
);
