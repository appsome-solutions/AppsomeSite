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
const RelativePosition = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ProcessFrame = styled.div`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  height: 1406px;
  flex-direction: column;
  padding-left: 178px;
  padding-right: 200px;
  padding-top: 103px;
  display: flex;
  justify-content: center;
`;
const BoxProcess = styled.div`
  width: 202px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Rectangle = styled.div`
  ${props => props.theme.rectangle11};
  background-color: ${props => props.theme.colors.main.tetiary};
`;
const TextProcess = styled.h4`
  margin-top: 10px;
  color: ${props => props.theme.colors.utils.text.dark};
`;
const TimeLine = styled.div`
  margin-top: 40px;
  height: 1120px;
  flex-direction: column;
  display: flex;
  align-items: center;
`;
const IdeaSection = styled(PositionAbsolute)`
  left: 187px;
`;
const TextGroupIdea = styled.div`
  width: 254px;
  height: 46px;
`;
const TextIdea = styled.h5`
  color: ${props => props.theme.colors.main.secondary};
`;
const NextTextIdea = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.utils.text.dark};
`;
const RequirementsSection = styled(PositionAbsolute)`
  right: 184px;
`;
const TextGroupRequirements = styled.div`
  width: 268px;
  height: 66px;
  text-align: right;
`;
const TextRequirements = styled.h5`
  color: ${props => props.theme.colors.main.secondary};
`;
const NextTextRequirements = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.utils.text.dark};
`;
const DesignsSection = styled(PositionAbsolute)`
  left: 188px;
`;
const TextGroupDesigns = styled.div`
  width: 317px;
  height: 97px;
`;
const TextDesigns = styled.h5`
  color: ${props => props.theme.colors.main.secondary};
`;
const NextTextDesigns = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.utils.text.dark};
`;
const RealizationSection = styled(PositionAbsolute)`
  right: 184px;
`;
const TextGroupRealization = styled.div`
  width: 400px;
  height: 66px;
  text-align: right;
`;
const TextRealization = styled.h5`
  color: ${props => props.theme.colors.main.secondary};
`;
const NextTextRealization = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.utils.text.dark};
`;
const LaunchSection = styled(PositionAbsolute)`
  left: 187px;
`;
const TextGroupLaunch = styled.div`
  width: 378px;
  height: 66px;
`;
const TextLaunch = styled.h5`
  color: ${props => props.theme.colors.main.secondary};
`;
const NextTextLaunch = styled.span`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.utils.text.dark};
`;
export const TheProcess: FunctionComponent = () => (
  <>
    <ProcessFrame>
      <BoxProcess>
        <Rectangle />
        <TextProcess>The process</TextProcess>
      </BoxProcess>
      <TimeLine>
        <RelativePosition>
          <img src={IdeaCircle} alt="" />
          <IdeaSection>
            <TextGroupIdea>
              <TextIdea>Idea</TextIdea>
              <NextTextIdea>Everything starts with your idea</NextTextIdea>
            </TextGroupIdea>
          </IdeaSection>
        </RelativePosition>
        <img src={Line} alt="" />
        <RelativePosition>
          <img src={RequirementsCircle} alt="" />
          <RequirementsSection>
            <TextGroupRequirements>
              <TextRequirements>Requirements</TextRequirements>
              <NextTextRequirements>
                We talk together, gather your
                <br />
                requirements and share our thoughts
              </NextTextRequirements>
            </TextGroupRequirements>
          </RequirementsSection>
        </RelativePosition>
        <img src={Line} alt="" />
        <RelativePosition>
          <img src={Designs} alt="" />
          <DesignsSection>
            <TextGroupDesigns>
              <TextDesigns>*Design</TextDesigns>
              <NextTextDesigns>
                Based on requirements we create full set of views with best User Experience in mind
              </NextTextDesigns>
            </TextGroupDesigns>
          </DesignsSection>
        </RelativePosition>
        <img src={Line} alt="" />
        <RelativePosition>
          <img src={Realization} alt="" />
          <RealizationSection>
            <TextGroupRealization>
              <TextRealization>Realization</TextRealization>
              <NextTextRealization>
                With some coffe and keyboard in hands we change desings to working mobile or web applications
              </NextTextRealization>
            </TextGroupRealization>
          </RealizationSection>
        </RelativePosition>
        <img src={Line} alt="" />
        <RelativePosition>
          <img src={Launch} alt="" />
          <LaunchSection>
            <TextGroupLaunch>
              <TextLaunch>Launch</TextLaunch>
              <NextTextLaunch>It’s time to make your working idea visible for others. Let’s launch it!</NextTextLaunch>
            </TextGroupLaunch>
          </LaunchSection>
        </RelativePosition>
      </TimeLine>
    </ProcessFrame>
  </>
);
