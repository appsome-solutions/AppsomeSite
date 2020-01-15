import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import IdeaCircle from 'assets/IdeaCircle.svg';
export type PositionText = 'right' | 'left';
export interface IdeaProps {
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
const IdeaSection = styled(PositionAbsolute)`
  left: 187px;
`;
const Title = styled.h5`
  color: ${props => props.theme.colors.main.secondary};
`;
const IdeaContent = styled.pre`
  ${props => props.theme.typography.body1};
`;
const TextPosition = styled.div<IdeaProps>`
  text-align: ${props => (props.contentPosition === 'left' ? 'left' : 'right')};
`;

export const IdeaElement: FunctionComponent<IdeaProps> = (props: IdeaProps): JSX.Element => {
  const { title, content } = props;
  return (
    <ProcessTimeLineElement>
      <img src={IdeaCircle} alt="" />
      <IdeaSection>
        <TextPosition contentPosition={props.contentPosition}>
          <Title>{title}</Title>
          <IdeaContent>{content}</IdeaContent>
        </TextPosition>
      </IdeaSection>
    </ProcessTimeLineElement>
  );
};
