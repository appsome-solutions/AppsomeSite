import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import image from 'assets/image.svg';
import { ArrowButton } from 'components/ArrowButton/ArrowButton';
import { SecondaryButton } from 'components/SecondaryButton/SecondaryButton';
import Vector from 'assets/Vector.svg';
import LeftVector from 'assets/LeftVector.svg';
const PortfolioStyle = styled.div`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  padding: 84px 112px 24px 60px;
  justify-content: space-between;
  display: flex;
`;

const LeftSide = styled.div``;

const TextUnderSection = styled.h6`
  color: ${props => props.theme.colors.utils.text.dark};
  margin: 8px 0 0 208px;
`;

const TitleBox = styled.div`
  margin-left: 192px;
`;
const RightSide = styled.div`
  display: space-between;
  padding: 176px 0 176px 0;
  margin-left: 44px;
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

const ArrowButtonWithMargin = styled(ArrowButton)`
  margin-left: 20px;
`;

const TitleSite = styled.h6`
  margin-bottom: 12px;
`;

const ButtonBlack = styled(SecondaryButton)`
  margin-left: 152px;
`;

const QuotationBoxWithQuoteSvg = styled.div`
  margin-bottom: 28px;
  width: 420px;
  height: 140px;
  padding: 20px 32px 22px 36px;
  background-color: ${props => props.theme.colors.main.primary};
`;

const QuotationBoxWithText = styled.div`
  ${props => props.theme.typography.body1};
  justify-content: center;
  text-align: center;
  margin-bottom: 16px;
`;

const QuotationText = styled.div`
  font-style: italic;
`;

const AuthorOfQuotation = styled.pre`
  text-align: center;
  ${props => props.theme.typography.body1};
`;

export const PortfolioStyled: FunctionComponent = () => (
  <PortfolioStyle>
    <LeftSide>
      <TitleBox>
        <SectionTitle section="Portfolio" color="primary" boxColor="secondary" />
      </TitleBox>
      <TextUnderSection>Our projects makes us proud</TextUnderSection>
      <img src={image} alt="" />
    </LeftSide>
    <RightSide>
      <TitleSite>Pizza Planet</TitleSite>
      <DescriptionSiteBox>
        <DescriptionSite>
          Pizza planet is a website where you can have menu <br />
          preview, choose your ingredient and order your pizza with <br />a life preview of a delivery status
          <Challenges>Challenges</Challenges>
          Bitcoin payment method, real-time delivery map preview
        </DescriptionSite>
      </DescriptionSiteBox>
      <QuotationBoxWithQuoteSvg>
        <QuotationBoxWithText>
          <QuotationText>
            The quality of the designs and ideas they had were impressive. We had a great experience working with them.
          </QuotationText>
        </QuotationBoxWithText>
        <AuthorOfQuotation>Managing Director, Konrad Radomski</AuthorOfQuotation>
      </QuotationBoxWithQuoteSvg>
      <ButtonsBox>
        <ArrowButton>
          <img src={LeftVector} alt="" />
        </ArrowButton>
        <ArrowButtonWithMargin>
          <img src={Vector} alt="" />
        </ArrowButtonWithMargin>
        <ButtonBlack>SEE ALL PROJECTS</ButtonBlack>
      </ButtonsBox>
    </RightSide>
  </PortfolioStyle>
);
