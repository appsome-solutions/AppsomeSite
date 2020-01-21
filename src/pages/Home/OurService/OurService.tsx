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
import { MobileAndBrowserElement } from './MobileAndBrowserRectangle/MobileAndBrowserRectangle';

const ServiceStyle = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  padding-top: 104px;
`;
const OurSevicesBox = styled.div`
  padding-bottom: 104px;
  margin-left: 192px;
`;
const WholeTextPre = styled.h6`
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const RedText = styled.span`
  margin-bottom: 0;
  color: ${props => props.theme.colors.main.secondary};
`;

const TechnicalsRow = styled.div`
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

const IconsSvgs = styled.img`
  margin-left: 100px;
`;

const RightElementWithMarign = styled(MobileAndBrowserElement)`
  margin-left: 92px;
`;

export const OurServices: FunctionComponent = () => (
  <ServiceStyle>
    <OurSevicesBox>
      <SectionTitle section="Our Service" color="secondary" boxColor="primary" />
      <WholeTextPre>
        We specialize in web technologies - simply saying we are in love with <RedText>JavaScript!</RedText>
        <br />
        Those are few we know at expert level:
      </WholeTextPre>
    </OurSevicesBox>
    <TechnicalsRow>
      <IconsSvgs src={JsTs} alt="" />
      <IconsSvgs src={Mongo} alt="" />
      <IconsSvgs src={ReactIcon} alt="" />
      <IconsSvgs src={Node} alt="" />
      <IconsSvgs src={Pwa} alt="" />
      <IconsSvgs src={Graphql} alt="" />
    </TechnicalsRow>
    <ServicesCardsBox>
      <MobileAndBrowserElement
        svgLink={Browser}
        title="Web Aplications"
        content="Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the industry's
standard dummy text ever since the 1500s, when an
unknown printer took a galley of type and scrambled it to
make a type specimen book.Lorem Ipsum is simply
dummy text of the printing and typesetting industry.
Lorem Ipsum has been the industry's standard dummy
text ever since the 1500s, when an unknown printer took
a galley of type and scrambled it to make a type
specimen book."
      />
      <RightElementWithMarign
        svgLink={App}
        title="Mobile Aplications"
        content="Lorem Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and
scrambled it to make a type specimen book.Lorem
Ipsum is simply dummy text of the printing and
typesetting industry. Lorem Ipsum has been the
industry's standard dummy text ever since the 1500s,
when an unknown printer took a galley of type and
scrambled it to make a type specimen book."
      />
    </ServicesCardsBox>
  </ServiceStyle>
);
