import React, { FunctionComponent } from 'react';
import { message } from 'antd';
import styled from 'styled-components';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import Email from 'assets/Email.svg';
import { Button } from 'components/Button/Button';
import { Form, Formik } from 'formik';
import axios from 'axios';
import FormikInput from 'components/FormikFields/FormikInput/FormikInput';

const NewsletterRow = styled.div`
  padding: 68px 136px 84px 136px;
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  justify-content: space-between;
  display: flex;
  border-bottom: 1px solid ${props => props.theme.colors.main.tetiary};
`;

const TextUnderSection = styled.span`
  ${props => props.theme.typography.body1};
  margin-left: 16px;
`;

const InputBox = styled.div`
  position: relative;
  height: 36px;
  display: flex;
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
  top: 10px;
`;

const SubscribeButton = styled(Button)`
  && {
    border: 1px solid ${props => props.theme.colors.utils.text.dark};
  }
`;

export const Newsletter: FunctionComponent = () => {
  return (
    <NewsletterRow>
      <div>
        <SectionTitle section="Join our newsletter" color="primary" boxColor="secondary" />
        <TextUnderSection>
          We have also blog where we publish technological solutions directly from the kitchen.
        </TextUnderSection>
      </div>
      <Formik
        initialValues={{
          email: '',
        }}
        onSubmit={values => {
          axios
            .post('https://us-central1-appsome-solutions.cloudfunctions.net/newsletter/subscription', {
              email: values.email,
            })
            .then(function() {
              message.success('Subscribed, get ready for awesome content!');
            })
            .catch(function() {
              message.error('Something went wrong when sending :/');
            });
        }}
      >
        <Form translate={false}>
          <InputBox>
            <FormikInput
              name="email"
              InputComponent={(props: any) => <EmailInput {...props} placeholder="Email" type="primary" />}
            />
            <EmailIcon src={Email} alt="" />
            <SubscribeButton htmlType="submit" type="primary">
              SUBSCRIBE
            </SubscribeButton>
          </InputBox>
        </Form>
      </Formik>
    </NewsletterRow>
  );
};
