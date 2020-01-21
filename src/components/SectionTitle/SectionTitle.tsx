import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
export type SectionColor = 'primary' | 'secondary';
export interface SectionProps {
  section: string;
  color?: SectionColor;
  boxColor?: SectionColor;
}

const Title = styled.h4`
  margin-left: 8px;
  margin-top: 14px;
  color: ${props =>
    props.color === 'primary' ? props.theme.colors.utils.background.mid.color : props.theme.colors.utils.text.dark};
`;

const SectionContent = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  border-left: 8px solid
  margin-bottom:8px;
    color:${props =>
      props.color === 'primary' ? props.theme.colors.main.tetiary : props.theme.colors.utils.text.dark};
`;

export const SectionTitle: FunctionComponent<SectionProps> = (props: SectionProps) => {
  const { section } = props;
  return (
    <SectionContent color={props.color}>
      <Title color={props.boxColor}>{section}</Title>
    </SectionContent>
  );
};
