import React, { FunctionComponent } from 'react';
import { message } from 'antd';
import styled from 'styled-components';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import Email from 'assets/Email.svg';
import { Button } from 'components/Button/Button';
import { Form, Formik } from 'formik';
import axios from 'axios';
import FormikInput from 'components/FormikFields/FormikInput/FormikInput';
import { media } from 'global/RWD';
import { MaxWidthWithBg } from 'components/MaxSizeAndBackground/MaxWidthAndBg';
import * as Yup from 'yup';

const NewsletterRow = styled.div`
  background-color: ${props => props.theme.colors.utils.background.mid.color};
  border-bottom: 1px solid ${props => props.theme.colors.main.tetiary};
  display: flex;
  justify-content: space-between;
  ${media.xs`
  flex-direction:column;
  padding: 40px 16px 52px 16px;
`}
  ${media.lg`
  flex-direction:row;
  padding: 68px 136px 84px 136px;
`}
`;

const TextUnderSection = styled.span`
  ${props => props.theme.typography.body1};
`;

const InputBox = styled.div`
  position: relative;
  display: flex;
  ${media.xs`
   flex-direction:column;
  `}
  ${media.lg`
  flex-direction:row;
`}
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
  ${media.xs`
  margin-top:30px;
`}
  ${media.lg`
  margin-top:0;
`}
`;

const EmailIcon = styled.img`
  position: absolute;
  ${media.xs`
  top: 40px;
  left:12px;
`}
  ${media.lg`
  top: 10px;
  left:12px;
`}
`;

const SubscribeButton = styled(Button)`
  && {
    border: 1px solid ${props => props.theme.colors.utils.text.dark};
    height: 36px;
  }
  ${media.xs`
    margin-top:20px;
`}
  ${media.lg`
    margin-top:0;
`}
`;
const TextUnderSectionDiv = styled.div`
  ${media.xs`
   margin-top:36px;
  `};
  ${media.lg`
   margin-top:0;
  `};
`;

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});
export const Newsletter: FunctionComponent = () => {
  return (
    <MaxWidthWithBg BgColor="secondary">
      <NewsletterRow>
        <div>
          <SectionTitle section="Join our newsletter" color="primary" boxColor="secondary" />
          <TextUnderSectionDiv>
            <TextUnderSection>
              We have also blog where we publish technological solutions directly from the kitchen.
            </TextUnderSection>
          </TextUnderSectionDiv>
        </div>
        <Formik
          initialValues={{
            email: '',
          }}
          validationSchema={SignUpSchema}
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
    </MaxWidthWithBg>
  );
};
