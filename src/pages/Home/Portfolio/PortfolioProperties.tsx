import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Icon } from 'components/Icon/Icon';
import Quote from 'assets/Quote.svg';
import { media, useRWD } from '../../../global/RWD';

export type imgDimensions = 'phone' | 'laptop';
export interface PortfolioProps {
  title?: string;
  description?: string | JSX.Element;
  svgLink?: string;
  challenges?: string;
  TestimonialText?: string;
  TestimonialPerson?: string;
  imgDimension?: imgDimensions;
}

const PortfolioDescription = styled.div`
  ${media.xs`
  margin-left: 0;
  padding-top: 8px;
  `} ${media.md`
  margin-left: 44px;
  padding: 140px 0 176px 0;
`};
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
  padding: 0 24px;
`;

const CarouselWhole = styled.div`
  display: flex !important;
  justify-content: center;
  ${media.xs`
  flex-direction:column;
  align-items:center;
  `}
  ${media.md`
  flex-direction:row;
   align-items: center;
  `}
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

type imgProps = { imgDimension?: imgDimensions };
const ImgBox = styled.div<imgProps>`
  position: relative;
  display: flex;
  justify-content: center;
  ${media.xs`margin-right:4px`}
  ${media.md`margin-right:126px;`}
`;

const ImgDiv = styled.img`
  position: relative;
  display: flex;
  height: 100%;
  ${media.xs`width:100%;`};
  ${media.md`width:auto;`};
`;

export const PortfolioCarousel: FunctionComponent<PortfolioProps> = (props: PortfolioProps): JSX.Element => {
  const { title, description, svgLink, TestimonialPerson, TestimonialText, challenges, imgDimension } = props;
  const { less, more } = useRWD();
  return (
    <CarouselWhole>
      {more.md && (
        <ImgBox>
          <ImgDiv src={svgLink} />
        </ImgBox>
      )}
      {less.md && (
        <ImgBox imgDimension={imgDimension}>
          <ImgDiv src={svgLink} />
        </ImgBox>
      )}
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
