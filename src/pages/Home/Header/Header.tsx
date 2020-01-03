import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import LogoSvg from 'assets/logo.svg';

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
