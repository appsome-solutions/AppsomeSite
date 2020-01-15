import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Launch from 'assets/Launch.svg';
export type PositionText = 'right' | 'left';
export interface LaunchProps {
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
const LaunchSection = styled(PositionAbsolute)`
  left: 187px;
`;
const Title = styled.h5`
  color: ${props => props.theme.colors.main.secondary};
`;
const Content = styled.span`
  ${props => props.theme.typography.body1};
  white-space:pre
`;
const TextPosition = styled.div<LaunchProps>`
  text-align: ${props => (props.contentPosition === 'left' ? 'left' : 'right')};
`;
export const LaunchElement: FunctionComponent<LaunchProps> = (props: LaunchProps): JSX.Element => {
  const { title, content } = props;
  return (
    <ProcessTimeLineElement>
      <img src={Launch} alt="" />
      <LaunchSection>
        <TextPosition contentPosition={props.contentPosition}>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </TextPosition>
      </LaunchSection>
    </ProcessTimeLineElement>
  );
};
