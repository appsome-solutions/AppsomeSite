import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import LogoSvg from './logo.svg';

const HeaderWrapper = styled.main`
  background-color: ${props => props.theme.colors.main.primary};
  height: 100px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding-left: 80px;
  padding-right: 80px;
`;
const LogoPosition = styled.div`
  display: flex;
  justify-content: center;
`;
const LinksPosition = styled.div`
  display: flex;
  align-items: center;
`;
const Process = styled.h6`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-right: 64px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine}
`;
const Services = styled.h6`
color: ${props => props.theme.colors.utils.background.mid.color};
  margin-right: 64px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine}
`;
const Portfolio = styled.h6`
color: ${props => props.theme.colors.utils.background.mid.color};
  margin-right: 64px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine}
`;
const Contact = styled.h6`
color: ${props => props.theme.colors.utils.background.mid.color};
  margin-right: 64px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine}
`;

export const Header: FunctionComponent = () => (
  <HeaderWrapper>
    <LogoPosition>
      <img src={LogoSvg} alt="" />
    </LogoPosition>
    <LinksPosition>
      <Process>Process</Process>
      <Services>Services</Services>
      <Portfolio>Portfolio</Portfolio>
      <Contact>Contact</Contact>
    </LinksPosition>
  </HeaderWrapper>
);
