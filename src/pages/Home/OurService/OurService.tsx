import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import JsTs from 'assets/JsTs.svg';
import Mongo from 'assets/Mongo.svg';
import ReactIcon from 'assets/React.svg';
import Node from 'assets/Node.svg';
import Pwa from 'assets/PWA.svg';
import Graphql from 'assets/GRAPHql.svg';
import App from 'assets/App.svg';
import Browser from 'assets/Browser.svg';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Button } from 'components/Button/Button';
import { Icon } from 'components/Icon/Icon';
const ServiceStyle = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  padding-top: 104px;
`;
const OurSevicesBox = styled.div`
  padding-bottom: 104px;
  margin-left: 192px;
`;
const WholeTextPre = styled.h6``;
const WholeText = styled.span`
  margin-bottom: 0;
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const RedText = styled.span`
  margin-bottom: 0;
  color: ${props => props.theme.colors.main.secondary};
`;
const Row = styled.div`
  padding: 36px 0 36px 0;
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const ServicesCardsBox = styled.div`
  padding: 128px 0 148px 0;
  display: flex;
  justify-content: center;
`;
const RectangleInServicesCards = styled.div`
  background: rgba(241, 232, 230, 0.1);
  border: 1px solid rgba(241, 232, 230, 0.2);
  padding: 32px 32px 32px 28px;
`;
const TypeAplicationText = styled.h5`
  margin: 20px 0 8px 0;
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const DescribingText = styled.pre`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const MoreButton = styled(Button)`
  width: 112px;
  float: right;
`;
const MobileRectangle = styled(RectangleInServicesCards)`
  margin-left: 92px;
`;
const IconsSvgs = styled.img`
  margin-left: 100px;
`;

export const OurServices: FunctionComponent = () => (
  <ServiceStyle>
    <OurSevicesBox>
      <SectionTitle section="Our Service" color="secondary" boxColor="primary" />
      <WholeTextPre>
        <WholeText>
          We specialize in web technologies - simply saying we are in love with <RedText>JavaScript!</RedText>
          <br />
          Those are few we know at expert level:
        </WholeText>
      </WholeTextPre>
    </OurSevicesBox>
    <Row>
      <IconsSvgs src={JsTs} alt="" />
      <IconsSvgs src={Mongo} alt="" />
      <IconsSvgs src={ReactIcon} alt="" />
      <IconsSvgs src={Node} alt="" />
      <IconsSvgs src={Pwa} alt="" />
      <IconsSvgs src={Graphql} alt="" />
    </Row>
    <ServicesCardsBox>
      <RectangleInServicesCards>
        <Icon svgLink={Browser} />
        <TypeAplicationText>Web Aplications</TypeAplicationText>
        <DescribingText></DescribingText>
        <MoreButton>MORE</MoreButton>
      </RectangleInServicesCards>
      <MobileRectangle>
        <Icon svgLink={App} />
        <TypeAplicationText>Mobile Aplications</TypeAplicationText>
        <DescribingText></DescribingText>
        <MoreButton>MORE</MoreButton>
      </MobileRectangle>
    </ServicesCardsBox>
  </ServiceStyle>
);
