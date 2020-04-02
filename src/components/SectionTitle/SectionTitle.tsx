import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
export type SectionColor = 'primary' | 'secondary';
export interface SectionProps {
  section: string;
  color?: SectionColor;
  boxColor?: SectionColor;
  textUnderSection?: string;
}

const Title = styled.h2`
  ${props => props.theme.typography.h4}
  margin-left: 16px;
  margin-top: 14px;
  color: ${props =>
    props.color === 'primary' ? props.theme.colors.utils.background.mid.color : props.theme.colors.utils.text.dark};
`;

const SectionContent = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;
  position: relative;
`;

const SectionSeparator = styled.span`
  height: 30px;
  border-left: 8px solid;
  position: absolute;
  top: 26px;
  color: ${props => (props.color === 'primary' ? props.theme.colors.main.tetiary : props.theme.colors.utils.text.dark)};
`;

export const SectionTitle: FunctionComponent<SectionProps> = (props: SectionProps) => {
  const { section } = props;
  return (
    <SectionContent>
      <SectionSeparator color={props.color} />
      <Title color={props.boxColor}>{section}</Title>
    </SectionContent>
  );
};
