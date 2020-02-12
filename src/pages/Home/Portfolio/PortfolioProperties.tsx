import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import Quote from 'assets/Quote.svg';

export type imgDimensions = 'phone' | 'laptop';
export interface PortfolioProps {
  title?: string;
  description?: string | JSX.Element;
  svgLink?: string;
  svgImage?: string;
  challenges?: string;
  TestimonialText?: string;
  TestimonialPerson?: string;
  imgDimension?: imgDimensions;
}

const PortfolioDescription = styled.div`
  padding: 140px 0 176px 0;
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

const CarouselWhole = styled.div`
  display: flex !important;
  justify-content: center;
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

const ImgBox = styled.div`
  position: relative;
  display: flex;
  padding-bottom: 120px;
`;

const ImgDiv = styled.img`
  margin-right: 136px;
`;

type imgProps = { imgDimension?: imgDimensions };
const WebSvg = styled.img<imgProps>`
  position: absolute;
  width:  ${props => (props.imgDimension === 'phone' ? '224px;' : '488px;')}
  height:  ${props => (props.imgDimension === 'phone' ? '392px;' : '300px;')}
  top: ${props => (props.imgDimension === 'phone' ? '88px;' : '120px;')}
  left: ${props => (props.imgDimension === 'phone' ? '10px;' : '60px;')}
`;

export const PortfolioCarousel: FunctionComponent<PortfolioProps> = (props: PortfolioProps): JSX.Element => {
  const { title, description, svgLink, TestimonialPerson, TestimonialText, challenges, svgImage, imgDimension } = props;

  return (
    <CarouselWhole>
      <ImgBox>
        <ImgDiv src={svgLink} />
        <WebSvg src={svgImage} imgDimension={imgDimension} />
      </ImgBox>
      <PortfolioDescription>
        <TitleSite>{title}</TitleSite>
        <DescriptionSiteBox>
          <DescriptionSite>
            {description}
            <Challenges>Challenges</Challenges>
            {challenges}
          </DescriptionSite>
        </DescriptionSiteBox>
        <QuotationBoxWithQuoteSvg>
          <QuoteSign svgLink={Quote} />
          <QuotationBoxWithText>{TestimonialText}</QuotationBoxWithText>
          <BoxWithSecondQuote>
            <QuoteSign svgLink={Quote} />
          </BoxWithSecondQuote>
          <AuthorText>{TestimonialPerson}</AuthorText>
        </QuotationBoxWithQuoteSvg>
      </PortfolioDescription>
    </CarouselWhole>
  );
};
