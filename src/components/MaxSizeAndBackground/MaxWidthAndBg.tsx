import React, { FunctionComponent } from 'react';
import styled from 'styled-components';

export type ColorBacground = 'primary' | 'secondary';
export interface WithAndBgProps {
  BgColor?: ColorBacground;
  children?: React.ReactNode;
}

const MaxWidth = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  float: none;
  position: relative;
`;

type BgProps = { BgColor?: ColorBacground };
const BackgroundSize = styled.div<BgProps>`
  max-width: 100%;
  background-color: ${props =>
    props.BgColor === 'primary' ? props.theme.colors.main.primary : props.theme.colors.utils.background.mid.color};
`;

export const MaxWidthWithBg: FunctionComponent<WithAndBgProps> = (props: WithAndBgProps) => {
  const { BgColor, children } = props;
  return (
    <BackgroundSize BgColor={BgColor}>
      <MaxWidth>{children}</MaxWidth>
    </BackgroundSize>
  );
};
