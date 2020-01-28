import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import Shape5 from 'assets/Shape5.svg';
import Shape4 from 'assets/Shape4.svg';

const FooterBG = styled.div`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  padding: 48px 280px 188px 136px;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

const TextBox = styled.div``;

const AboutUs = styled.pre`
  ${props => props.theme.typography.body1};
  margin-bottom: 12px;
`;

const ContactAddress = styled.span``;

const BoxWithLinks = styled.div`
  display: flex;
  margin: 50px 0 0 188px;
`;

const LinkText = styled.h6`
  margin-left: 64px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine}
`;
const LeftShape = styled(Icon)`
  position: absolute;
  position: absolute;
  width: 225px;
  height: 153px;
  left: 0px;
  background-color: ${props => props.theme.colors.main.secondary};
  bottom: 0px;
`;
const RightShape = styled(Icon)`
  position: absolute;
  width: 151px;
  height: 150px;
  right: 0px;
  background-color: ${props => props.theme.colors.main.secondary};
  bottom: 0px;
`;
export const Footer: FunctionComponent = () => (
  <FooterBG>
    <TextBox>
      <AboutUs>About us</AboutUs>
      <ContactAddress>
        Zbożowa 4A 70-653 Szczecin Poland
        <br />
        +48 783 697 219 <br />
        patrykjanik1710@gmail.com
      </ContactAddress>
    </TextBox>
    <BoxWithLinks>
      <LinkText>Process</LinkText>
      <LinkText>Services</LinkText>
      <LinkText>Portfolio</LinkText>
      <LinkText>Contact</LinkText>
    </BoxWithLinks>
    <LeftShape svgLink={Shape4} />
    <RightShape svgLink={Shape5} />
  </FooterBG>
);
