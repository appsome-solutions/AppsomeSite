import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import cut from 'assets/cut.svg';
import { Button } from 'components/Button/Button';
import Shape1 from 'assets/Shape1.svg';
import { Icon } from 'components/Icon/Icon';
import { Link } from 'react-scroll';

const BannerStyle = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  position: relative;
  padding: 60px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;
const GroupedTextWithButton = styled.div`
  margin-right: 40px;
`;
const FirstText = styled.h3`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-bottom: 24px;
`;
const SecondText = styled.pre`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-bottom: 40px;
  line-height: 19px;
  ${props => props.theme.typography.body1};
`;
const ContactButton = styled(Button)`
  width: 200px;
`;
const Shape = styled(Icon)`
  position: absolute;
  width: 199px;
  height: 376px;
  left: 0;
  top: 540px;
  z-index: 6000;
  background-color: ${props => props.theme.colors.main.secondary};
`;
export const Banner: FunctionComponent = () => (
  <BannerStyle>
    <GroupedTextWithButton>
      <FirstText>Change your idea into working product</FirstText>
      <SecondText>
        We are here to help you succeed. That is why we provide our time
        <br />
        and top quality code. We care and take responsibility for your
        <br />
        products - you can focus on your business strategies!
      </SecondText>
      <Link to="Contact" spy={true} smooth={true} duration={500}>
        <ContactButton type="secondary">Contact Us</ContactButton>
      </Link>
      <Shape svgLink={Shape1} />
    </GroupedTextWithButton>
    <img src={cut} alt="" />
  </BannerStyle>
);
