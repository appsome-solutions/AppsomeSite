import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import image from 'assets/image.svg';
import { Button } from 'components/Button/Button';
import Vector from 'assets/Vector.svg';
import LeftVector from 'assets/LeftVector.svg';
import Quote from 'assets/Quote.svg';
import { Icon } from 'components/Icon/Icon';

const PortfolioStyle = styled.div`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  padding: 84px 112px 24px 60px;
  justify-content: space-between;
  display: flex;
`;
const TextUnderSection = styled.h6`
  color: ${props => props.theme.colors.utils.text.dark};
  margin: 8px 0 0 208px;
`;

const TitleBox = styled.div`
  margin-left: 192px;
`;

const PortfolioImage = styled.div``;

const PortfolioDescription = styled.div`
  padding: 176px 0 176px 0;
  margin-left: 44px;
  width: 420px;
`;

const DescriptionSiteBox = styled.div`
  ${props => props.theme.typography.body1};
  margin-bottom: 24px;
`;

const DescriptionSite = styled.div`
  ${props => props.theme.typography.body1}
`;

const Challenges = styled.div`
  ${props => props.theme.typography.body1}
  margin: 16px 0 12px 0;
  font-weight: 500;
`;

const ButtonsBox = styled.div`
  display: flex;
  justify-content: space-between;
`;
const ArrowButtonsBox = styled.div`
  display: flex;
`;
const ArrowButtonWithMargin = styled(Button)`
  margin-left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ArrowButtonLeft = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const TitleSite = styled.h6`
  margin-bottom: 12px;
`;

const QuotationBoxWithQuoteSvg = styled.div`
  background-color: ${props => props.theme.colors.functional.main.primary.opacity};
  margin-bottom: 28px;
  padding: 16px 12px 20px 12px;
`;

const QuotationBoxWithText = styled.div`
  ${props => props.theme.typography.body1};
  display: flex;
  justify-content: center;
  text-align: center;
  font-style: italic;
  padding: 0 24px 0 24px;
`;

const BoxWithSecondQuote = styled.div`
  text-align: right;
  margin-bottom: 12px;
`;

const AuthorText = styled.div`
  display: flex;
  justify-content: center;
  ${props => props.theme.typography.body1};
`;

const QuoteSign = styled(Icon)`
  height: 20px;
  width: 20px;
`;

const ArrowIcon = styled(Icon)`
  height: 24px;
  width: 16px;
  background-color: white;
`;
const ArrowIconRight = styled(ArrowIcon)`
  background-color: white;
`;

export const PortfolioStyled: FunctionComponent = () => (
  <PortfolioStyle>
    <PortfolioImage>
      <TitleBox>
        <SectionTitle section="Portfolio" color="primary" boxColor="secondary" />
      </TitleBox>
      <TextUnderSection>Our projects makes us proud</TextUnderSection>
      <img src={image} alt="" />
    </PortfolioImage>
    <PortfolioDescription>
      <TitleSite>Pizza Planet</TitleSite>
      <DescriptionSiteBox>
        <DescriptionSite>
          Pizza planet is a website where you can have menu <br />
          preview, choose your ingredient and order your pizza with <br />a life preview of a delivery status.
          <Challenges>Challenges</Challenges>
          Bitcoin payment method, real-time delivery map preview
        </DescriptionSite>
      </DescriptionSiteBox>
      <QuotationBoxWithQuoteSvg>
        <QuoteSign svgLink={Quote} />
        <QuotationBoxWithText>
          The quality of the designs and ideas they had were impressive. We had a great experience working with them.
        </QuotationBoxWithText>
        <BoxWithSecondQuote>
          <QuoteSign svgLink={Quote} />
        </BoxWithSecondQuote>
        <AuthorText>Managing Director, Konrad Radomski</AuthorText>
      </QuotationBoxWithQuoteSvg>
      <ButtonsBox>
        <ArrowButtonsBox>
          <ArrowButtonLeft type="primary">
            <ArrowIcon svgLink={LeftVector} />
          </ArrowButtonLeft>
          <ArrowButtonWithMargin type="primary">
            <ArrowIconRight svgLink={Vector} />
          </ArrowButtonWithMargin>
        </ArrowButtonsBox>
        <Button type="primary">SEE ALL PROJECTS</Button>
      </ButtonsBox>
    </PortfolioDescription>
  </PortfolioStyle>
);
