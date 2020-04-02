import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { Button } from 'components/Button/Button';
import { Icon } from 'components/Icon/Icon';
import { media } from 'global/RWD';

export interface ElementProps {
  title?: string;
  content?: string | JSX.Element;
  svgLink: string;
  moreUrl: string;
  className?: string;
}

const RectangleInServicesCards = styled.div`
  background: rgba(241, 232, 230, 0.1);
  border: 1px solid rgba(241, 232, 230, 0.2);
  ${media.xs`
    padding: 32px 28px 60px 28px;
  `}
  ${media.lg`
   padding: 32px;
  `}
`;

const TypeAplicationText = styled.h5`
  margin: 20px 0 8px 0;
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const DescribingText = styled.pre`
  ${props => props.theme.typography.body1};
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-bottom: 24px;
  white-space: pre-wrap;
`;

const MoreButton = styled(Button)`
  float: right;
  ${media.xs`
  width:100%;
  `}
  ${media.lg`
   min-width: 112px;
   width: auto;
   `}
`;

const ServiceBoxIcon = styled(Icon)`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
`;

export const ServiceBoxElement: FunctionComponent<ElementProps> = (props: ElementProps): JSX.Element => {
  const { title, content, svgLink, moreUrl } = props;
  return (
    <RectangleInServicesCards className={props.className}>
      <ServiceBoxIcon svgLink={svgLink} />
      <TypeAplicationText>{title}</TypeAplicationText>
      <DescribingText>{content}</DescribingText>
      <a href={moreUrl} target="_blank" rel="noopener noreferrer">
        <MoreButton type="secondary" aria-label="more on our blog">
          MORE ON OUR BLOG
        </MoreButton>
      </a>
    </RectangleInServicesCards>
  );
};
