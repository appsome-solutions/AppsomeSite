import React, { FunctionComponent, useCallback, useRef } from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Icon } from 'components/Icon/Icon';
import Shape3 from 'assets/Shape3.svg';
import { PortfolioCarousel } from './PortfolioProperties';
import laptop from 'assets/laptop.svg';
import Phone from 'assets/Phone.svg';
import Oncologist from 'assets/Oncologist.png';
import ProList from 'assets/ProList.png';
import PersonaShare from 'assets/PersonaShare.png';
import { Carousel } from 'antd';
import LeftVector from 'assets/LeftVector.svg';
import Vector from 'assets/Vector.svg';
import { Button } from 'components/Button/Button';

const PortfolioStyle = styled.div`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  padding: 84px 112px 24px 192px;
  position: relative;
`;
const TextUnderSection = styled.h6`
  color: ${props => props.theme.colors.utils.text.dark};
  margin: 8px 0 0 16px;
`;

const Shape = styled(Icon)`
  height: 426px;
  width: 158px;
  left: 0px;
  top: -40px;
  z-index: ${props => props.theme.zIndex.house};
  position: absolute;
  background-color: ${props => props.theme.colors.main.secondary};
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
  justify-content: flex-end;
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
    <PortfolioStyle id="Portfolio">
      <Shape svgLink={Shape3} />
      <div>
        <SectionTitle section="Portfolio" color="primary" boxColor="secondary" />
      </div>
      <TextUnderSection>Our projects makes us proud</TextUnderSection>
      <Carousel ref={carouselRef} dots={false}>
        <PortfolioCarousel
          svgLink={laptop}
          imgDimension="laptop"
          svgImage={Oncologist}
          title="Onkolog Online"
          description="With Onkolog Online you can get advice or deep analise of your case from top specialists from oncology
        area. Website communication is based on emails and time for response takes maximum to 48h."
          challenges="Time based email system, extended textual editor"
          TestimonialText="They are truly invested and passionate."
          TestimonialPerson="Founder, Dawid Stefaniec"
        />
        <PortfolioCarousel
          svgLink={Phone}
          imgDimension="phone"
          svgImage={PersonaShare}
          title="Persona Share"
          description="Mobile application which aims to assists in a personal branding and expanding local companies
        to be more visible in real life by using QR codes."
          challenges="QR code scanner in PWA technology, extended PWA editor."
          TestimonialText="United Ideas overcommunicated everything, saving us a lot of time and money."
          TestimonialPerson="Founder, Mateusz Żukowski"
        />
        <PortfolioCarousel
          imgDimension="laptop"
          svgLink={laptop}
          svgImage={ProList}
          title="ProList"
          description="Website which manage specialists from given profession. With displaying their work, skillset in a graph representation."
          challenges="Advanced graph visualisation"
          TestimonialText="The website they built for us is better than I ever thought it could be."
          TestimonialPerson="Marketing and Sales, Magdalena Banasa"
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
    </PortfolioStyle>
  );
};
