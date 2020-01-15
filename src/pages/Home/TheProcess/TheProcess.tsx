import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import IdeaCircle from 'assets/IdeaCircle.svg';
import RequirementsCircle from 'assets/RequirementsCircle.svg';
import Launch from 'assets/Launch.svg';
import Realization from 'assets/Realization.svg';
import Designs from 'assets/Designs.svg';
import Line from 'assets/Line.svg';

const PositionAbsolute = styled.div`
  position: absolute;
`;
const TextGroupRight = styled.div`
  text-align: right;
`;
const SecondTextInProcess = styled.pre`
  ${props => props.theme.typography.body1};
`;
const TextInProcess = styled.h5`
  color: ${props => props.theme.colors.main.secondary};
`;
const ProcessTimeLineElement = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProcessFrame = styled.div`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  padding-left: 178px;
  padding-right: 102px;
  padding-top: 103px;
  padding-bottom: 23px;
`;
const BoxProcesss = styled.div``;
const TimeLine = styled.div`
  margin-top: 40px;
  margin-bottom: 59px;
  margin-right: 98px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
const IdeaSection = styled(PositionAbsolute)`
  left: 187px;
`;
const RequirementsSection = styled(PositionAbsolute)`
  right: 184px;
`;
const DesignsSection = styled(PositionAbsolute)`
  left: 188px;
`;
const RealizationSection = styled(PositionAbsolute)`
  right: 184px;
`;
const LaunchSection = styled(PositionAbsolute)`
  left: 187px;
`;
const BottomText = styled.div`
  float: right;
  ${props => props.theme.typography.body2}
`;
export const TheProcess: FunctionComponent = () => (
  <ProcessFrame>
    <BoxProcesss></BoxProcesss>
    <TimeLine>
      <ProcessTimeLineElement>
        <img src={IdeaCircle} alt="" />
        <IdeaSection>
          <TextInProcess>Idea</TextInProcess>
          <SecondTextInProcess>Everything starts with your idea</SecondTextInProcess>
        </IdeaSection>
      </ProcessTimeLineElement>
      <img src={Line} alt="" />
      <ProcessTimeLineElement>
        <img src={RequirementsCircle} alt="" />
        <RequirementsSection>
          <TextGroupRight>
            <TextInProcess>Requirements</TextInProcess>
            <SecondTextInProcess>
              We talk together, gather your
              <br />
              requirements and share our thoughts
            </SecondTextInProcess>
          </TextGroupRight>
        </RequirementsSection>
      </ProcessTimeLineElement>
      <img src={Line} alt="" />
      <ProcessTimeLineElement>
        <img src={Designs} alt="" />
        <DesignsSection>
          <TextInProcess>*Design</TextInProcess>
          <SecondTextInProcess>
            Based on requirements we create full set of <br />
            views with best User Experience in mind
          </SecondTextInProcess>
        </DesignsSection>
      </ProcessTimeLineElement>
      <img src={Line} alt="" />
      <ProcessTimeLineElement>
        <img src={Realization} alt="" />
        <RealizationSection>
          <TextGroupRight>
            <TextInProcess>Realization</TextInProcess>
            <SecondTextInProcess>
              With some coffe and keyboard in hands we change <br />
              desings to working mobile or web applications
            </SecondTextInProcess>
          </TextGroupRight>
        </RealizationSection>
      </ProcessTimeLineElement>
      <img src={Line} alt="" />
      <ProcessTimeLineElement>
        <img src={Launch} alt="" />
        <LaunchSection>
          <TextInProcess>Launch</TextInProcess>
          <SecondTextInProcess>
            It’s time to make your working idea visible for others.
            <br />
            Let’s launch it!
          </SecondTextInProcess>
        </LaunchSection>
      </ProcessTimeLineElement>
    </TimeLine>
    <BottomText>*Designs can be provided </BottomText>
  </ProcessFrame>
);
