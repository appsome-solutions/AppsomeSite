import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Line from 'assets/Line.svg';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { IdeaElement } from 'components/Idea/IdeaElement';
import { RequirementsElement } from 'components/Requirements/RequiremetsElement';
import { RealizationElement } from 'components/Realization/RealizationElement';
import { LaunchElement } from 'components/Launch/LaunchElement';
import { DesignsElement } from 'components/Designs/DesignsElement';
const ProcessFrame = styled.div`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  padding: 104px 104px 24px 180px;
`;
const TimeLine = styled.div`
  margin: 40px 96px 60px 0;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
const BottomText = styled.div`
  float: right;
  ${props => props.theme.typography.body2}
`;

export const TheProcess: FunctionComponent = () => (
  <ProcessFrame>
    <SectionTitle section="TheProcess" color="primary" boxColor="secondary" />
    <TimeLine>
      <IdeaElement title="Idea" content="Everything starts with your idea" contentPosition="left" />
      <img src={Line} alt="" />
      <RequirementsElement
        title="Requirements"
        content=" We talk together, gather your
requirements and share our thoughts"
        contentPosition="right"
      />
      <img src={Line} alt="" />
      <DesignsElement
        title="*Designs"
        content="Based on requirements we create full set of
views with best User Experience in mind"
        contentPosition="left"
      />
      <img src={Line} alt="" />
      <RealizationElement
        title="Realization"
        content="With some coffe and keyboard in hands we change
desings to working mobile or web applications"
        contentPosition="right"
      />
      <img src={Line} alt="" />
      <LaunchElement
        title="Launch"
        content="It’s time to make your working idea visible for others.
Let’s launch it!"
        contentPosition="left"
      />
    </TimeLine>
    <BottomText>*Designs can be provided </BottomText>
  </ProcessFrame>
);
