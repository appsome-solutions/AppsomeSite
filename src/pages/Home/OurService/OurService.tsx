import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import JsTs from 'assets/JsTs.svg';
import Mongo from 'assets/Mongo.svg';
import ReactIcon from 'assets/React.svg';
import Node from 'assets/Node.png';
import Pwa from 'assets/PWA.png';
import Graphql from 'assets/GRAPHql.svg';
import App from 'assets/App.svg';
import Browser from 'assets/Browser.svg';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { ServiceBoxElement } from './ServiceBox/ServiceBox';
import { media, useRWD } from 'global/RWD';
import { MaxWidthWithBg } from 'components/MaxSizeAndBackground/MaxWidthAndBg';

const ServiceStyle = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  ${media.xs`
  padding-top: 100px;
 `}
  ${media.md`
  padding-top: 98px;
 `}
`;

const OurSevicesBox = styled.div`
  ${media.xs`
  padding: 0 20px 36px 20px;
 `}
  ${media.md`
   padding-bottom: 60px;
   margin-left: 192px;
 `}
`;

const WholeTextPre = styled.h6`
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${media.xs`
    margin: 20px 0 0 0;
    font-size: 16px;
    line-height: 19px;
  `}
  ${media.md`
    margin-left: 16px;
`}
`;

const RedText = styled.span`
  color: ${props => props.theme.colors.main.secondary};
`;

const TechnicalsRow = styled.div`
  padding: 40px 0 12px 0;
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  display: flex;
  justify-content: center;
  align-items: center;
  ${media.xs`
  flex-direction: column;
  `} ${media.md`
  flex-direction: row;
  `};
`;

const IconsSvgs = styled.img`
  ${media.xs`
  margin-left: 0px;
  margin-bottom: 32px;
  `}
  ${media.md`
   margin-left: 100px; 
   margin-bottom:0;
  `}
`;
const NodePng = styled.img`
  ${media.xs`
  margin-left: 0px;
  margin-bottom: 32px;
  width:130px;
  height:80px
  `}
  ${media.md`
   margin-left: 100px; 
   margin-bottom:0;
  `}
`;

const ServicesCardsBox = styled.div`
  ${media.xs`
  padding: 46px 20px;`}
  ${media.md`  
  display: flex;
  justify-content: center;
   padding: 128px 0 148px 0;
  `}
`;

const RightElementWithMarign = styled(ServiceBoxElement)`
  ${media.xs`
  margin-top:20px;
  margin-left: 0;
  `}
  ${media.md`
    margin-top:0;
   margin-left: 92px;
  `}
`;

export const OurServices: FunctionComponent = () => {
  const { less, more } = useRWD();
  return (
    <MaxWidthWithBg BgColor="primary">
      <div className="Service" id="Service">
        <ServiceStyle>
          <OurSevicesBox>
            <SectionTitle section="Our Service" color="secondary" boxColor="primary" />
            {more.md && (
              <WholeTextPre>
                We specialize in web technologies - simply saying we are in love with <RedText>JavaScript!</RedText>
                <br />
                Those are few we know at expert level:
              </WholeTextPre>
            )}
            {less.md && (
              <WholeTextPre>
                We specialize in web technologies -<br /> simply saying we are in love with
                <br /> <RedText>JavaScript!</RedText>
                <br />
                <br />
                <br />
                Those are few we know at expert level:
              </WholeTextPre>
            )}
          </OurSevicesBox>
          <TechnicalsRow>
            <IconsSvgs src={JsTs} alt="" />
            <IconsSvgs src={Mongo} alt="" />
            <IconsSvgs src={ReactIcon} alt="" />
            <NodePng src={Node} alt="" />
            <IconsSvgs src={Pwa} alt="" />
            <IconsSvgs src={Graphql} alt="" />
          </TechnicalsRow>
          <ServicesCardsBox>
            <ServiceBoxElement
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
      </div>
    </MaxWidthWithBg>
  );
};
