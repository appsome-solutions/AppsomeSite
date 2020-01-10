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
import { RectangleBox } from 'components/Box/RectangleBox';
import { TextRectangle } from 'components/TextRectangle/TextRectangle';
import { Button } from 'components/Button/Button';

const Servicestyle = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  padding-top: 103px;
`;
const OurSevicesBox = styled.div`
  padding-bottom: 104px;
  margin-left: 192px;
`;
const BoxProcesss = styled(RectangleBox)`
  color: ${props => props.theme.colors.utils.text.dark};
  margin-bottom: 8px;
`;
const BoxText = styled(TextRectangle)`
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const WeSpecialize = styled.h6`
  display: flex;
  margin-bottom: 0px;
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const TextJava = styled.h6`
  margin-bottom: 0px;
  margin-left: 8px;
  color: ${props => props.theme.colors.main.secondary};
`;
const NextText = styled.h6`
  clear: both;
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const Row = styled.div`
  padding-top: 36px;
  padding-bottom: 36px;
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  display: flex;
  justify-content: center;
  align-items: center;
`;
const RowMargin = styled.div`
  margin-left: 100px;
`;
const ServicesCardsBox = styled.div`
  padding-top: 128px;
  padding-bottom: 146px;
  display: flex;
  justify-content: center;
`;
const BrowserRectangle = styled.div`
  background: rgba(241, 232, 230, 0.1);
  border: 1px solid rgba(241, 232, 230, 0.2);
  padding-top: 32px;
  padding-left: 30px;
  padding-right: 33px;
  padding-bottom: 32px;
`;
const TypeAplicationText = styled.h5`
  margin-top: 20px;
  margin-bottom: 8px;
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const DescribingText = styled.pre`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const ButtonFloatRight = styled.div`
  float: right;
`;
const MoreButton = styled(Button)`
  width: 112px;
`;
const MobileRectangle = styled.div`
  background: rgba(241, 232, 230, 0.1);
  border: 1px solid rgba(241, 232, 230, 0.2);
  padding-top: 32px;
  padding-left: 28px;
  padding-right: 40px;
  padding-bottom: 32px;
  margin-left: 94px;
`;
export const OurServices: FunctionComponent = () => (
  <Servicestyle>
    <OurSevicesBox>
      <BoxProcesss>
        <BoxText>Our Services</BoxText>
      </BoxProcesss>
      <WeSpecialize>
        We specialize in web technologies - simply saying we are in love with <TextJava> JavaScript!</TextJava>
      </WeSpecialize>
      <NextText>Those are few we know at expert level:</NextText>
    </OurSevicesBox>
    <Row>
      <RowMargin>
        <img src={JsTs} alt="" />
      </RowMargin>
      <RowMargin>
        <img src={Mongo} alt="" />
      </RowMargin>
      <RowMargin>
        <img src={ReactIcon} alt="" />
      </RowMargin>
      <RowMargin>
        <img src={Node} alt="" />
      </RowMargin>
      <RowMargin>
        <img src={Pwa} alt="" />
      </RowMargin>
      <RowMargin>
        <img src={Graphql} alt="" />
      </RowMargin>
    </Row>
    <ServicesCardsBox>
      <BrowserRectangle>
        <img src={Browser} alt="" />
        <TypeAplicationText>Web Aplications</TypeAplicationText>
        <DescribingText>
          Lorem Ipsum is simply dummy text of the printing and
          <br />
          typesetting industry. Lorem Ipsum has been the industrys
          <br />
          standard dummy text ever since the 1500s, when an
          <br />
          unknown printer took a galley of type and scrambled it to
          <br />
          make a type specimen book.Lorem Ipsum is simply
          <br />
          dummy text of the printing and typesetting industry.
          <br />
          Lorem Ipsum has been the industrys standard dummy
          <br />
          text ever since the 1500s, when an unknown printer took
          <br />a galley of type and scrambled it to make a type
          <br />
          specimen book.
        </DescribingText>
        <ButtonFloatRight>
          <MoreButton>MORE</MoreButton>
        </ButtonFloatRight>
      </BrowserRectangle>
      <MobileRectangle>
        <img src={App} alt="" />
        <TypeAplicationText>Mobile Aplications</TypeAplicationText>
        <DescribingText>
          Lorem Ipsum is simply dummy text of the printing and
          <br />
          typesetting industry. Lorem Ipsum has been the
          <br />
          industrys standard dummy text ever since the 1500s, <br />
          when an unknown printer took a galley of type and
          <br />
          scrambled it to make a type specimen book.Lorem
          <br />
          Ipsum is simply dummy text of the printing and
          <br />
          typesetting industry. Lorem Ipsum has been the
          <br />
          industrys standard dummy text ever since the 1500s,
          <br />
          when an unknown printer took a galley of type and
          <br />
          scrambled it to make a type
          <br />
          specimen book.
        </DescribingText>
        <ButtonFloatRight>
          <MoreButton>MORE</MoreButton>
        </ButtonFloatRight>
      </MobileRectangle>
    </ServicesCardsBox>
  </Servicestyle>
);
