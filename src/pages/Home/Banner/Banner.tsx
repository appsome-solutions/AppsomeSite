import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import BannerPhoto from 'assets/BannerPhoto.png';
import { Button } from 'components/Button/Button';
import Shape1 from 'assets/Shape1.svg';
import { Icon } from 'components/Icon/Icon';
import { Link } from 'react-scroll';
import { media, useRWD } from 'global/RWD';
import ShapeSmallBanner from 'assets/ShapeSmallBanner.svg';
import { MaxWidthWithBg } from 'components/MaxSizeAndBackground/MaxWidthAndBg';
import { Col, Row } from 'antd';

const BannerStyle = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  padding: 60px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  ${media.xs`
      padding: 44px 16px 60px 16px;
      flex-direction: column;
  `}
  ${media.lg`
      padding: 30px 120px 60px 116px;
      flex-direction: row;
  `}
`;

const GroupedTextWithButton = styled.div`
  display: flex;
  flex-direction: column;
  ${media.xs`
  margin-right:0
  `}
  ${media.lg`
  margin-right: 40px;
   align-items: baseline;
  `}
`;

const FirstText = styled.h3`
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${media.xs`
   font-size: 34px;
   margin-bottom: 44px;
  `}
  ${media.lg`
   font-size: 48px;
   line-height: 56px;
   margin-bottom: 26px;

  `}
`;
const SecondText = styled.pre`
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${props => props.theme.typography.body1};
  white-space: pre-wrap;
  margin-bottom: 40px;
  ${media.xs`
  width:100%;
  `}
`;
const ContactButton = styled(Button)`
  width: 200px;
  ${media.xs`
  width:100%;
  `}
`;
const Shape = styled(Icon)`
  position: absolute;
  z-index: ${props => props.theme.zIndex.house};
  background-color: ${props => props.theme.colors.main.secondary};
  ${media.xs`
  width:46px;
  height:103px;
  left: 0px;
  top:360px;
`}
  ${media.lg`
   width: 199px;
  height: 376px;
  left: 0px;
  top: 480px;
  `}
  ${media.xxl`
  left: calc(-50vw + 720px);
  width: 199px;
  height: 376px;
  top: 480px;
  `}
`;
const BannerPhotoStyle = styled.img`
  max-width: 100%;
`;

export const Banner: FunctionComponent = () => {
  const { less, more } = useRWD();
  return (
    <MaxWidthWithBg BgColor="primary">
      <Row>
        <BannerStyle>
          <GroupedTextWithButton>
            <Col lg={24} xl={20} xxl={20}>
              <FirstText>Change your idea into working product</FirstText>
              <SecondText>
                We are here to help you succeed. That is why we provide our time and top quality code. We care and take
                responsibility for your products - you can focus on your business strategies!
              </SecondText>
            </Col>
            <Link to="Contact" spy={true} smooth={true} duration={500}>
              <ContactButton type="secondary">Contact Us</ContactButton>
            </Link>
            {more.lg && <Shape svgLink={Shape1} />}
            {less.lg && <Shape svgLink={ShapeSmallBanner} />}
          </GroupedTextWithButton>
          <Col lg={8} xl={8} xxl={8}>
            {more.lg && <BannerPhotoStyle src={BannerPhoto} alt="" />}
          </Col>
        </BannerStyle>
      </Row>
    </MaxWidthWithBg>
  );
};
