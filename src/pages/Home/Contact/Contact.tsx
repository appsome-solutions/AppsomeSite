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

const InputBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 16px;
`;

const InputValues = styled.input`
  border: 1px solid ${props => props.theme.colors.functional.main.primary.opacity};
  height: 48px;
  margin-bottom: 32px;
  background-color: ${props => props.theme.colors.main.primary};
  padding-left: 20px;
  outline: 0;
`;

const NameInputText = styled.h6`
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const NameInput = styled(InputValues)`
  width: 400px;
`;

const EmailInputText = styled.h6`
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const EmailInput = styled(InputValues)`
  width: 400px;
`;

const MessageText = styled.h6`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const MessageTextArea = styled.textarea`
  height: 136px;
  border: 1px solid ${props => props.theme.colors.functional.main.primary.opacity};
  margin: 0 0 32px 16px;
  background-color: ${props => props.theme.colors.main.primary};
  padding: 20px 0 0 20px;
  outline: 0;
  width: 100%;
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
      Contact us. We will analise Your product and deliver the best quality solution!
    </TextUnderSectionTitle>
    <InputBoxes>
      <NameInputText>
        <NameInput placeholder="Name" />
      </NameInputText>
      <EmailInputText>
        <EmailInput placeholder="Email" />
      </EmailInputText>
    </InputBoxes>
    <MessageText>
      <MessageTextArea placeholder="Message" />
    </MessageText>
    <ButtonPosition>
      <SendButton>SEND</SendButton>
    </ButtonPosition>
  </ContactStyle>
);
