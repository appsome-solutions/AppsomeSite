import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import RequirementsCircle from 'assets/RequirementsCircle.svg';
export type PositionText = 'right' | 'left';
export interface RequirementsProps {
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
const RequirementsSection = styled(PositionAbsolute)`
  right: 184px;
`;
const Title = styled.h5`
  color: ${props => props.theme.colors.main.secondary};
`;
const Content = styled.pre`
  ${props => props.theme.typography.body1};
`;
const TextPosition = styled.div<RequirementsProps>`
  text-align: ${props => (props.contentPosition === 'left' ? 'left' : 'right')};
`;
export const RequirementsElement: FunctionComponent<RequirementsProps> = (props: RequirementsProps): JSX.Element => {
  const { title, content } = props;
  return (
    <ProcessTimeLineElement>
      <img src={RequirementsCircle} alt="" />
      <RequirementsSection>
        <TextPosition contentPosition={props.contentPosition}>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </TextPosition>
      </RequirementsSection>
    </ProcessTimeLineElement>
  );
};
