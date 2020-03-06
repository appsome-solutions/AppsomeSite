import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export type ColorBackgroundType = 'primary' | 'secondary';
export interface WithAndBgProps {
  BackgroundColorProps?: ColorBackgroundType;
  children?: React.ReactNode;
}

const MaxWidth = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  float: none;
`;

type BgProps = { BackgroundColorProps?: ColorBackgroundType };
const BackgroundSize = styled.div<BgProps>`
  max-width: 100%;
  background-color: ${props =>
    props.BackgroundColorProps === 'primary'
      ? props.theme.colors.main.primary
      : props.theme.colors.utils.background.mid.color};
  position: relative;
`;

export const MaxWidthWithBg: FunctionComponent<WithAndBgProps> = (props: WithAndBgProps) => {
  const { BackgroundColorProps, children } = props;
  return (
    <BackgroundSize BackgroundColorProps={BackgroundColorProps}>
      <MaxWidth>{children}</MaxWidth>
    </BackgroundSize>
  );
};
