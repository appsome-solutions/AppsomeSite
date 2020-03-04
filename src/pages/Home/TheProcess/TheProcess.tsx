import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Element } from 'react-scroll';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { TimeLineElement } from './TimeLineElement/TimeLineElement';
import IdeaIcon from 'assets/IdeaIcon.svg';
import DesignIcon from 'assets/DesignIcon.svg';
import LaunchIcon from 'assets/LaunchIcon.svg';
import RequirementsIcon from 'assets/RequirementsIcon.svg';
import RealizationIcon from 'assets/RealizationIcon.svg';
import Shape2 from 'assets/Shape2.svg';
import { Icon } from 'components/Icon/Icon';
import { media, useRWD } from 'global/RWD';
import ShapeProcess from 'assets/ShapeProcess.svg';
import { MaxWidthWithBg } from 'components/MaxSizeAndBackground/MaxWidthAndBg';

const ProcessFrame = styled(Element)`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  ${media.xs`
  padding: 100px 20px 64px 20px;  
  `}
  ${media.lg`
  padding: 104px 104px 48px 180px;
  `}
`;

const ProcessTimeLine = styled.div`
  margin: 40px 96px 20px 0;
  flex-direction: column;
  display: flex;
  align-items: center;
  ${media.xs`
  margin-top: 32px;
  width:100%;
  `}
`;

const BottomText = styled.div`
  float: right;
  ${props => props.theme.typography.body2}
  ${media.xs`
  margin-top: 10px;
  `}
  ${media.lg`
  margin-top:20px;`}
`;

const Shape = styled(Icon)`
  position: absolute;
  background-color: ${props => props.theme.colors.main.secondary};
  z-index: ${props => props.theme.zIndex.house};
  ${media.xs`
  width:27px;
  height:210px;
  right:0vh;
  top: 1720px;
  `} ${media.lg`
  width: 77px;
  height: 376px;
  right:0vh;
  top: 1280px;
  `} ${media.xxl`
  top:1200px
  right:0px;
  width: 77px;
  height: 376px;
  `};
`;

export const TheProcess: FunctionComponent = () => {
  const { less, more } = useRWD();
  return (
    <MaxWidthWithBg BgColor="secondary">
      <ProcessFrame name="Process" id="Process" className="element">
        <SectionTitle section="The process" color="primary" boxColor="secondary" />
        <ProcessTimeLine>
          <TimeLineElement
            positionText="right"
            svgLink={IdeaIcon}
            title="Idea"
            content="Everything starts with your idea"
            contentPosition="left"
          />
          <TimeLineElement
            positionText="left"
            svgLink={RequirementsIcon}
            title="Requirements"
            content="We talk together, gather your
requirements and share our thoughts"
            contentPosition="right"
          />
          <TimeLineElement
            positionText="right"
            svgLink={DesignIcon}
            title="*Designs"
            content="Based on requirements we create full set of
views with best user experience in mind"
            contentPosition="left"
          />
          {more.md && (
            <TimeLineElement
              positionText="left"
              svgLink={RealizationIcon}
              title="Realization"
              content="With some coffe and keyboard in hands we change
desings to working mobile or web applications"
              contentPosition="right"
            />
          )}
          {less.md && (
            <TimeLineElement
              positionText="left"
              svgLink={RealizationIcon}
              title="Realization"
              content="With some coffe and keyboard in hands we change desings to working mobile or web applications"
              contentPosition="right"
            />
          )}
          {more.md && (
            <TimeLineElement
              positionText="right"
              svgLink={LaunchIcon}
              title="Launch"
              content="It’s time to make your working idea visible for others.
Let’s launch it!"
              contentPosition="left"
              isWithLine={false}
            />
          )}
          {less.md && (
            <TimeLineElement
              positionText="right"
              svgLink={LaunchIcon}
              title="Launch"
              content="It’s time to make your working idea visible for others. Let’s launch it!"
              contentPosition="left"
              isWithLine={false}
            />
          )}
        </ProcessTimeLine>
        <BottomText>*Designs can be provided </BottomText>
        {more.lg && (less.xxl && <Shape svgLink={Shape2} />)}
        {less.lg && <Shape svgLink={ShapeProcess} />}
      </ProcessFrame>
      {more.xxl && <Shape svgLink={Shape2} />}
    </MaxWidthWithBg>
  );
};
