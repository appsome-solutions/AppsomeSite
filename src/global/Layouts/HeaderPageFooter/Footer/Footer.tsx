import React from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import Shape5 from 'assets/Shape5.svg';
import Shape4 from 'assets/Shape4.svg';
import { animateScroll as scroll, Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { scrollTo } from '../HeaderFooterCommon';

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

const ContactAddress = styled.div`
  margin-bottom: 36px;
`;

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
const PrivacyPolicyText = styled.span`
  ${props => props.theme.typography.overline};
  cursor: pointer;
  color: ${props => props.theme.colors.utils.text.dark};
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine};
  }
`;
const TermOfServiceText = styled.span`
  ${props => props.theme.typography.overline};
  cursor: pointer;
  margin-left: 24px;
  color: ${props => props.theme.colors.utils.text.dark};
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine};
  }
`;

const scrollToTop = () => {
  scroll.scrollToTop({ smooth: false, duration: 0 });
};

export const Footer = () => (
  <FooterBG>
    <TextBox>
      <AboutUs>About us</AboutUs>
      <ContactAddress>
        Zbożowa 4A 70-653 Szczecin Poland
        <br />
        +48 783 697 219 <br />
        patrykjanik1710@gmail.com
      </ContactAddress>
      <Link onClick={scrollToTop} to="Policy" spy={true} smooth={true} offset={-99} duration={500}>
        <LinkRouter to="/privacy-policy">
          <PrivacyPolicyText>PRIVACY POLICY</PrivacyPolicyText>
        </LinkRouter>
      </Link>
      <Link onClick={scrollToTop} to="TermOfService" spy={true} smooth={true} offset={-99} duration={500}>
        <LinkRouter to="/term-of-service">
          <TermOfServiceText>TERM OF SERVICE</TermOfServiceText>
        </LinkRouter>
      </Link>
    </TextBox>
    <BoxWithLinks>
      <LinkRouter to="/" onClick={() => scrollTo('Process')}>
        <LinkText>Process</LinkText>
      </LinkRouter>
      <LinkRouter to="/" onClick={() => scrollTo('Service')}>
        <LinkText>Services</LinkText>
      </LinkRouter>
      <LinkRouter to="/" onClick={() => scrollTo('Portfolio')}>
        <LinkText>Portfolio</LinkText>
      </LinkRouter>
      <LinkRouter to="/" onClick={() => scrollTo('Contact')}>
        <LinkText>Contact</LinkText>
      </LinkRouter>
    </BoxWithLinks>
    <LeftShape svgLink={Shape4} />
    <RightShape svgLink={Shape5} />
  </FooterBG>
);
