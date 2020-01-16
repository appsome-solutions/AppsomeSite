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
`;
const TextUnderTitleText = styled.span`
  ${props => props.theme.typography.body1};
  width: 416px;
  height: 248px;
  display: flex;
`;
const ButtonsBox = styled.div`
  display: flex;
  align-items: center;
`;
const ArrowButtonMargin = styled(ArrowButton)`
  margin-left: 20px;
`;
const OncologistOnline = styled.h6``;
const ButtonBlack = styled(SecondaryButton)`
  margin-left: 174px;
  background-color: ${props => props.theme.colors.main.primary};
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
      <OncologistOnline>Oncologist Online</OncologistOnline>
      <TextUnderTitleText>
        Platform where you can ask questions to specialists from oncology field. Fully supports mobile usage.
      </TextUnderTitleText>
      <ButtonsBox>
        <ArrowButton>
          <img src={LeftVector} alt="" />
        </ArrowButton>
        <ArrowButtonMargin>
          <img src={Vector} alt="" />
        </ArrowButtonMargin>
        <ButtonBlack>SEE ALL PROJECTS</ButtonBlack>
      </ButtonsBox>
    </RightSide>
  </PortfolioStyle>
);
