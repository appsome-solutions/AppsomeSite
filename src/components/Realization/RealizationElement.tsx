import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Realization from 'assets/Realization.svg';
export type PositionText = 'right' | 'left';
export interface RealizationProps {
  title?: string;
  content?: string | JSX.Element;
  contentPosition: PositionText;
}

const PositionAbsolute = styled.div`
  position: absolute;
`;
const ProcessTimeLineElement = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const RealizationSection = styled(PositionAbsolute)`
  right: 184px;
`;
const Title = styled.h5`
  color: ${props => props.theme.colors.main.secondary};
`;
const Content = styled.pre`
  ${props => props.theme.typography.body1};
`;
const TextPosition = styled.div<RealizationProps>`
  text-align: ${props => (props.contentPosition === 'left' ? 'left' : 'right')};
`;

export const RealizationElement: FunctionComponent<RealizationProps> = (props: RealizationProps): JSX.Element => {
  const { title, content } = props;
  return (
    <ProcessTimeLineElement>
      <img src={Realization} alt="" />
      <RealizationSection>
        <TextPosition contentPosition={props.contentPosition}>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </TextPosition>
      </RealizationSection>
    </ProcessTimeLineElement>
  );
};
