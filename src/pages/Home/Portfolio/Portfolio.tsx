import React, { FunctionComponent, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Icon } from 'components/Icon/Icon';
import Shape3 from 'assets/Shape3.svg';
import { PortfolioCarousel } from './PortfolioProperties';
import { Carousel } from 'antd';
import { Element } from 'react-scroll';
import LeftVector from 'assets/LeftVector.svg';
import Vector from 'assets/Vector.svg';
import { Button } from 'components/Button/Button';
import { media, useRWD } from 'global/RWD';
import ZVision from 'assets/ZVision.svg';
import Persona from 'assets/Persona.svg';
import Cafe from 'assets/Cafe.svg';
import ProList from 'assets/ProList.svg';
import Oncologist from 'assets/Oncologist.svg';
import { MaxWidthWithBg } from 'components/MaxSizeAndBackground/MaxWidthAndBg';

const PortfolioStyle = styled(Element)`
  position: relative;
  background-color: ${props => props.theme.colors.utils.background.mid.color};
`;
const PortfolioPadding = styled.div`
  ${media.xs`
  padding: 36px 24px 32px 24px;
  `};
  ${media.lg`
  padding: 84px 192px 24px 192px;
`};
`;
const TextUnderSection = styled.h6`
  color: ${props => props.theme.colors.utils.text.dark};
  ${media.xs`
  margin: 24px 0 16px 0;
  `}
  ${media.lg`
  margin: 8px 0 0 16px;
`}
`;

const Shape = styled(Icon)`
  z-index: ${props => props.theme.zIndex.house};
  position: absolute;
  background-color: ${props => props.theme.colors.main.secondary};
  ${media.md`
  height: 426px;
  width: 158px;
  left: -20px;
  top: -40px;
  `}
  ${media.xxl`
  left: 0vw;
  height: 426px;
  width: 158px;
  `}
`;

const ArrowIcon = styled(Icon)`
  height: 22px;
  width: 12px;
  background-color: white;
`;

const ArrowIconRight = styled(ArrowIcon)`
  background-color: white;
`;

const ArrowButtonsBox = styled.div`
  display: flex;
  ${media.xs`
  justify-content:center;
  `}
  ${media.lg`
  justify-content:flex-end;
  `}
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

export const PortfolioStyled: FunctionComponent = () => {
  const carouselRef = useRef<Carousel>(null);
  const { more } = useRWD();
  const goToPrev = useCallback(() => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.prev();
    }
  }, []);

  const goToNext = useCallback(() => {
    if (carouselRef && carouselRef.current) {
      carouselRef.current.next();
    }
  }, []);

  return (
    <PortfolioStyle id="Portfolio" name="Portfolio">
      {more.lg && <Shape svgLink={Shape3} />}
      <MaxWidthWithBg BackgroundColorProps="secondary">
        <PortfolioPadding>
          <div>
            <SectionTitle section="Portfolio" color="primary" boxColor="secondary" />
          </div>
          <TextUnderSection>Our projects make us proud</TextUnderSection>
          <Carousel ref={carouselRef} dots={false} adaptiveHeight={true}>
            <PortfolioCarousel
              imgDimension="laptop"
              svgLink={Oncologist}
              title="Onkolog Online"
              description="With Onkolog Online you can get advice or deep analysis of your case from top specialists from the oncology
        area. Website communication is based on emails and time for a response takes maximum to 48h."
              challenges="Time-based email system, extended textual editor"
              TestimonialText="They are truly invested and passionate software engineers."
              TestimonialPerson="Founder, Dawid Stefaniec"
            />
            <PortfolioCarousel
              svgLink={Persona}
              title="Persona Share"
              description="Mobile application aims to assists in personal branding and expanding local companies
        to be more visible in real life by using QR codes."
              challenges="QR code scanner in PWA technology, extended PWA editor."
              TestimonialText="Outsourcing and their united ideas overcommunicated everything, saving us a lot of time and money."
              TestimonialPerson="Founder, Mateusz Żukowski"
            />
            <PortfolioCarousel
              imgDimension="laptop"
              svgLink={ProList}
              title="ProList"
              description="Website which manages specialists from a given profession. By displaying their work, skillset in a graph representation."
              challenges="Advanced graph visualization"
              TestimonialText="The website they built for us is better than I ever thought it could be. Our consumer software is perfect now."
              TestimonialPerson="Marketing and Sales, Magdalena Banasa"
            />
            <PortfolioCarousel
              imgDimension="laptop"
              svgLink={Cafe}
              title="Cafe"
              description="It is a presentational website that attracts customers to visit this place. Includes a rich gallery and menu."
              challenges="Creating an astonishing, beautiful design and photographies"
              TestimonialText="Communication and cooperation were great, the software was delivered fast with quality that exceeded expectations!"
              TestimonialPerson="Mark Rowe Owner"
            />
            <PortfolioCarousel
              svgLink={ZVision}
              title="Z Vision"
              description="It is a website and mobile, presenting photographic work and booking system. It allows browsing of different plans for weddings, tourist tours, studio and fashion events."
              challenges="Creating 'live' booking system, for instant communication between company and customers, along with email notifications"
              TestimonialText="A highly impressive approach to software engineering, we had no troubles during the process of refinement and then the product was done fast and in the highest quality. Also, they provide great support in case of needs or questions!"
              TestimonialPerson="Margot Regan, Managing Director "
            />
          </Carousel>
          <ArrowButtonsBox>
            <ArrowButtonLeft type="primary" onClick={() => goToPrev()}>
              <ArrowIcon svgLink={LeftVector} />
            </ArrowButtonLeft>
            <ArrowButtonWithMargin type="primary" onClick={() => goToNext()}>
              <ArrowIconRight svgLink={Vector} />
            </ArrowButtonWithMargin>
          </ArrowButtonsBox>
        </PortfolioPadding>
      </MaxWidthWithBg>
    </PortfolioStyle>
  );
};
