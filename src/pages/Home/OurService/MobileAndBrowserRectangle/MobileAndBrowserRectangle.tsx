import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button/Button';
import { Icon } from 'components/Icon/Icon';
export interface ElementProps {
  title?: string;
  content?: string | JSX.Element;
  svgLink: string;
  className?: string;
}

const RectangleInServicesCards = styled.div`
  background: rgba(241, 232, 230, 0.1);
  border: 1px solid rgba(241, 232, 230, 0.2);
  padding: 32px 32px 32px 28px;
`;
const TypeAplicationText = styled.h5`
  margin: 20px 0 8px 0;
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const DescribingText = styled.pre`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.utils.background.mid.color};
`;
const MoreButton = styled(Button)`
  width: 112px;
  float: right;
`;

export const MobileAndBrowserElement: FunctionComponent<ElementProps> = (props: ElementProps): JSX.Element => {
  const { title, content, svgLink } = props;
  return (
    <RectangleInServicesCards className={props.className}>
      <Icon svgLink={svgLink} />
      <TypeAplicationText>{title}</TypeAplicationText>
      <DescribingText>{content}</DescribingText>
      <MoreButton>MORE</MoreButton>
    </RectangleInServicesCards>
  );
};
