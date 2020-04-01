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
  position: relative;
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  ${media.xs`
  padding: 60px 20px 64px 20px;  
  `}
  ${media.lg`
  padding: 104px 104px 48px 192px;
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
  right:0px;
  bottom:-160px; 
  `} ${media.lg`
  width: 77px;
  height: 376px;
  right:0px;
  bottom:0px; 
  `}
`;

export const TheProcess: FunctionComponent = () => {
  const { less, more } = useRWD();
  return (
    <MaxWidthWithBg BackgroundColorProps="secondary">
      <ProcessFrame name="Process" id="Process" className="element">
        <SectionTitle section="Development process" color="primary" boxColor="secondary" />
        <ProcessTimeLine>
          <TimeLineElement
            positionText="right"
            svgLink={IdeaIcon}
            title="Idea"
            content="Digital transformation starts with your idea"
            contentPosition="left"
          />
          <TimeLineElement
            positionText="left"
            svgLink={RequirementsIcon}
            title="Consulting"
            content="We communicate together, gather your
requirements and share our thoughts in an agile manner"
            contentPosition="right"
          />
          <TimeLineElement
            positionText="right"
            svgLink={DesignIcon}
            title="*UI/UX Design"
            content="Based on requirements we create a user interface
with best user experience in mind"
            contentPosition="left"
          />
          {more.md && (
            <TimeLineElement
              positionText="left"
              svgLink={RealizationIcon}
              title="Realization"
              content="With some coffee and keyboard in hands, our engineering team
change designs into working mobile or web application"
              contentPosition="right"
            />
          )}
          {less.md && (
            <TimeLineElement
              positionText="left"
              svgLink={RealizationIcon}
              title="Realization"
              content="With some coffee and keyboard in hands, our engineering team change designs into working mobile or web application"
              contentPosition="right"
            />
          )}
          {more.md && (
            <TimeLineElement
              positionText="right"
              svgLink={LaunchIcon}
              title="Launch"
              content="It’s time to make your custom software visible for others.
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
              content="It’s time to make your custom software visible for others. Let’s launch it!"
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
