import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import Designs from 'assets/Designs.svg';

export type PositionText = 'right' | 'left';
export interface DesignsProps {
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
const DesignsSection = styled(PositionAbsolute)`
  left: 188px;
`;
const Title = styled.h5`
  color: ${props => props.theme.colors.main.secondary};
`;
const Content = styled.pre`
  ${props => props.theme.typography.body1};
`;

const TextPosition = styled.div<DesignsProps>`
  text-align: ${props => (props.contentPosition === 'left' ? 'left' : 'right')};
`;
export const DesignsElement: FunctionComponent<DesignsProps> = (props: DesignsProps): JSX.Element => {
  const { title, content } = props;
  return (
    <ProcessTimeLineElement>
      <img src={Designs} alt="" />
      <TextPosition contentPosition={props.contentPosition}>
        <DesignsSection>
          <Title>{title}</Title>
          <Content>{content}</Content>
        </DesignsSection>
      </TextPosition>
    </ProcessTimeLineElement>
  );
};
