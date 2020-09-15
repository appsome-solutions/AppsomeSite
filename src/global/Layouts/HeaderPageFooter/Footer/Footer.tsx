import React, { FC } from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import Shape5 from 'assets/Shape5.svg';
import Shape4 from 'assets/Shape4.svg';
import { Link } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { scrollTo } from '../HeaderFooterCommon';
import { media, useRWD } from 'global/RWD';
import { MaxWidthWithBg } from 'components/MaxSizeAndBackground/MaxWidthAndBg';
import facebook from 'assets/facebook.svg';
import behance from 'assets/behance.svg';
import linkedin from 'assets/linkedin.svg';
import github from 'assets/github.svg';
import twitter from 'assets/twitter.svg';
import medium from 'assets/medium.svg';

const FooterBG = styled.div`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  display: flex;
  justify-content: space-between;
  position: relative;
  ${media.xs`
  flex-direction:column;
    padding: 36px 16px 120px 24px;
  `}
  ${media.lg`
    flex-direction:row;
    padding: 48px 280px 188px 136px;
  `}
`;

const AboutUs = styled.pre`
  ${props => props.theme.typography.body1};
  margin-bottom: 12px;
`;

const ContactAddress = styled.div`
  margin-bottom: 36px;
  margin-right: 124px;
`;

const BoxWithLinks = styled.div`
  display: flex;
  margin-top: 60px;
  flex-direction: column;
`;

const LinkText = styled.h6`
  margin-left: 64px;
  cursor: pointer;
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine};
  }
`;
const LeftShape = styled(Icon)`
  position: absolute;
  width: 225px;
  height: 153px;
  left: 0px;
  background-color: ${props => props.theme.colors.main.secondary};
  bottom: 0px;
  pointer-events: none;
  ${media.xxl`
  left: calc(-50vw + 720px);
  width: 225px;
  height: 153px;
  `}
`;
const RightShape = styled(Icon)`
  position: absolute;
  width: 151px;
  height: 150px;
  right: 0;
  bottom: 0;
  background-color: ${props => props.theme.colors.main.secondary};
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

const LinkStyle = styled.div`
  z-index: ${props => props.theme.zIndex.towerBlock};
  ${media.xs`
    text-align: right;
`}
`;

const HrefColor = styled.a`
  color: ${props => props.theme.colors.utils.text.dark};
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine};
  }
`;

const BoxIcons = styled.div`
  display: flex;
`;

const SocialIcon = styled(Icon)`
  width: 32px;
  height: 32px;
  margin-right: 16px;
  ${media.xs`
    margin-right: 8px;
`}
`;

const IconMargin = styled.div`
  margin-top: 16px;
  display: flex;
`;

const Links = () => (
  <div>
    <Link to="Policy" spy={true} smooth={true} offset={-99} duration={500}>
      <LinkRouter to="/privacy-policy">
        <PrivacyPolicyText>PRIVACY POLICY</PrivacyPolicyText>
      </LinkRouter>
    </Link>
    <Link to="TermOfService" spy={true} smooth={true} offset={-99} duration={500}>
      <LinkRouter to="/term-of-service">
        <TermOfServiceText>TERM OF SERVICE</TermOfServiceText>
      </LinkRouter>
    </Link>
  </div>
);

export const Footer: FC = () => {
  const RedirectToIcon = (iconUrl: string) => {
    return window.open(`${iconUrl}`);
  };

  const { less, more } = useRWD();
  return (
    <MaxWidthWithBg>
      <FooterBG className="Footer">
        <div>
          <AboutUs>About us</AboutUs>
          <ContactAddress>
            Monte Cassino 38b/2 70-464 Szczecin Poland
            <br />
            <HrefColor href="tel:+48 783 697 219">+48 783 697 219</HrefColor> <br />
            <HrefColor href="mailto:patryk.janik@appsome-solutions.com">patryk.janik@appsome-solutions.com</HrefColor>
            <IconMargin>
              <SocialIcon
                svgLink={medium}
                alt="medium icon"
                onClick={() => RedirectToIcon('https://medium.com/appsome-solutions')}
              />
              <SocialIcon
                svgLink={facebook}
                alt="facebook icon"
                onClick={() => RedirectToIcon('https://www.facebook.com/appsomeSolutions')}
              />
              <SocialIcon
                svgLink={behance}
                alt="behance icon"
                onClick={() => RedirectToIcon('https://www.behance.net/AppsomeSolutionsTeam')}
              />
              <SocialIcon
                svgLink={github}
                alt="github icon"
                onClick={() => RedirectToIcon(`https://github.com/appsome-solutions/AppsomeSite`)}
              />
              <SocialIcon
                svgLink={twitter}
                alt="twitter icon"
                onClick={() => RedirectToIcon('https://twitter.com/AppsomeSolutio1')}
              />
              <SocialIcon
                svgLink={linkedin}
                alt="linkedin icon"
                onClick={() => RedirectToIcon('https://www.linkedin.com/company/37563250')}
              />
            </IconMargin>
          </ContactAddress>
          {more.lg && <Links />}
          {less.lg && (
            <LinkStyle>
              <Links />
            </LinkStyle>
          )}
        </div>
        {more.lg && (
          <BoxWithLinks>
            <BoxIcons>
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
            </BoxIcons>
          </BoxWithLinks>
        )}
        <LeftShape svgLink={Shape4} alt="irregular shape" />
      </FooterBG>
      {more.lg && <RightShape id="footer-shape" svgLink={Shape5} alt="irregular shape" />}
    </MaxWidthWithBg>
  );
};
