import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Button } from 'components/Button/Button';
const ContactStyle = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  padding: 96px 192px 80px 192px;
`;
const TextUnderSectionTitle = styled.h5`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin: 24px 0 92px 16px;
  align-items: center;
  justify-content: center;
`;
const InputBoxs = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 16px;
`;
const InputValues = styled.input`
  opacity: 0.5;
  border: 1px solid #f1e8e6;
  height: 48px;
  margin-bottom: 32px;
  border: 1px solid #f1e8e6;
  background-color: ${props => props.theme.colors.main.primary};
  color: ${props => props.theme.colors.utils.background.mid.color};
  padding-left: 20px;
`;
const NameInput = styled(InputValues)`
  width: 400px;
`;
const EmailInput = styled(InputValues)`
  width: 400px;
`;
const MessageTextArea = styled.textarea`
  height: 136px;
  margin: 0 0 32px 16px;
  background-color: ${props => props.theme.colors.main.primary};
  color: ${props => props.theme.colors.utils.background.mid.color};
  padding: 20px 0 0 20px;
  width: 1120px;
`;
const ButtonPosition = styled.div`
  text-align: right;
`;
const SendButton = styled(Button)`
  width: 116px;
`;
export const ContactStyled: FunctionComponent = () => (
  <ContactStyle>
    <SectionTitle section="Contact" color="secondary" boxColor="primary" />
    <TextUnderSectionTitle>
      Contact us. We will analize Your product and deliver the best quality solution!
    </TextUnderSectionTitle>
    <InputBoxs>
      <NameInput placeholder="NAME"></NameInput>
      <EmailInput placeholder="EMAIL"></EmailInput>
    </InputBoxs>
    <MessageTextArea placeholder="Message"></MessageTextArea>
    <ButtonPosition>
      <SendButton>SEND</SendButton>
    </ButtonPosition>
  </ContactStyle>
);
