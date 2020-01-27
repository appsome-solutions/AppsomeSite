import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import cut from 'assets/cut.svg';
import { Button } from 'components/Button/Button';
const BannerStyle = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  padding: 60px 80px;
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
const SecondText = styled.pre`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-bottom: 40px;
  line-height: 19px;
  ${props => props.theme.typography.body1};
`;
const ContactButton = styled(Button)`
  width: 200px;
`;
export const Banner: FunctionComponent = () => (
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
      <ContactButton>contact us</ContactButton>
    </GroupedTextWithButton>
    <img src={cut} alt="" />
  </BannerStyle>
);
