import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import cutted from './cutted.svg';
import { Button } from 'components/Button/Button';
import { Body1 } from 'components/Body1/Body1';
const Frame = styled.div`
  margin: 0;
  padding: 0;
  outline: 0;
`;
const BannerStyle = styled.div`
  width: 100%;
  height: auto;
  background-color: ${props => props.theme.colors.main.primary};
  padding: 60px 80px 60px 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const GroupedTextWithButton = styled.div`
  margin-right: 40px;
`;
const FirstText = styled.h3`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-bottom: 24px;
`;
const SecondText = styled(Body1)`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-bottom: 40px;
`;

export const Banner: FunctionComponent = () => (
  <Frame>
    <BannerStyle>
      <GroupedTextWithButton>
        <FirstText>Change your idea into working product</FirstText>
        <SecondText>
          We are here to help you succeed. That is why we provide our time
          <br />
          and top quality code. We care and take responsibility for your
          <br />
          products - you can focus on your business strategies!
        </SecondText>
        <Button>contact us</Button>
      </GroupedTextWithButton>
      <img src={cutted} alt="" />
    </BannerStyle>
  </Frame>
);
