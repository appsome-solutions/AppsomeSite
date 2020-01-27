import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import Email from 'assets/Email.svg';
import { Button } from 'components/Button/Button';

const NewsletterRow = styled.div`
  padding: 68px 136px 84px 136px;
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.main.tetiary};
`;

const SectionBox = styled.div``;
const TextUnderSection = styled.span`
  ${props => props.theme.typography.body1};
  margin-left: 16px;
`;

const InputBox = styled.div`
  position: relative;
  height: 36px;
`;

const EmailInput = styled.input`
  box-sizing: border-box;
  height: 36px;
  padding-left: 40px;
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  border: 1px solid ${props => props.theme.colors.utils.text.dark};
  outline: 0;
  :: placeholder {
    color: ${props => props.theme.colors.utils.text.dark};
  }
`;

const EmailIcon = styled.img`
  position: absolute;
  left: 12px;
  top: 14px;
`;

const SubscribeButton = styled(Button)`
  && {
    border: 1px solid ${props => props.theme.colors.utils.text.dark};
  }
  margin-top: 4px;
`;

export const Newsletter: FunctionComponent = () => (
  <NewsletterRow>
    <SectionBox>
      <SectionTitle section="Join our newsletter" color="primary" boxColor="secondary" />
      <TextUnderSection>
        We have also blog where we publish technological solutions directly from the kitchen.
      </TextUnderSection>
    </SectionBox>
    <InputBox>
      <EmailInput placeholder="Email" type="primary" />
      <EmailIcon src={Email} alt="" />
      <SubscribeButton type="primary">SUBSCRIBE</SubscribeButton>
    </InputBox>
  </NewsletterRow>
);
