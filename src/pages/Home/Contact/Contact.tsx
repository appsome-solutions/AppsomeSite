import React, { FunctionComponent } from 'react';
import styled from 'styled-components';
import { SectionTitle } from 'components/SectionTitle/SectionTitle';
import { Button } from 'components/Button/Button';
import { CommonFormElementStyling } from './InputStyle';
import FormikInput from '../../../components/FormikFields/FormikInput/FormikInput';
import FormikTextArea from '../../../components/FormikFields/FormikTextArea/FormikTextArea';
import { Form, Formik } from 'formik';
import FormikCheckbox from '../../../components/FormikFields/FormikChecbox/FormikCheckbox';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

interface EditorStylesWrapperType {
  hasError?: boolean;
}

const ContactStyle = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  padding: 96px 192px 80px 192px;
`;

const TextUnderSectionTitle = styled.h5`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin: 24px 0 92px 16px;
`;

const InputBoxes = styled.div`
  display: flex;
  justify-content: space-between;
  margin-left: 16px;
`;

const StyledInput = styled.input<EditorStylesWrapperType>`
  height: 48px;
  padding-left: 20px;
  ${CommonFormElementStyling}
    border-color: ${props => (props.hasError ? props.theme.colors.functional.error : null)};
`;

const NameInputText = styled.h6`
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const NameInput = styled(StyledInput)`
  width: 400px;
`;

const EmailInputText = styled.h6<EditorStylesWrapperType>`
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const EmailInput = styled(StyledInput)`
  width: 400px;
  isValid
`;

const MessageTextArea = styled.textarea<EditorStylesWrapperType>`
  height: 136px;
  padding: 20px 0 0 20px;
  width: 100%;
  ${CommonFormElementStyling}
    border-color: ${props => (props.hasError ? props.theme.colors.functional.error : null)};

`;

const MessageText = styled.h6`
  display: flex;
  align-items: center;
  margin-left: 16px;
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-bottom: 32px;
`;

const ButtonPosition = styled.div`
  text-align: right;
`;

const SendButton = styled(Button)`
  width: 116px;
`;

const TermServiceAndPolicyText = styled.span`
  ${props => props.theme.typography.overline};
  cursor: pointer;
  color: ${props => props.theme.colors.utils.background.mid.color};
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine};
  }
`;
const CheckBoxStyle = styled(FormikCheckbox)`
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${props => props.theme.typography.overline};
  margin-left: 16px;
  .eVUHdb[style] {
    margin-left: 16px !important;
  }
`;

const SignupSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  message: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  checkBox: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept Term Of Service and Privacy Policy.'),
});

export const ContactStyled: FunctionComponent = () => {
  return (
    <ContactStyle className="Contact" id="Contact">
      <SectionTitle section="Contact" color="secondary" boxColor="primary" />
      <TextUnderSectionTitle>
        Contact us. We will analise Your product and deliver the best quality solution!
      </TextUnderSectionTitle>
      <Formik
        initialValues={{
          name: '',
          email: '',
          message: '',
          checkBox: ``,
        }}
        validationSchema={SignupSchema}
        onSubmit={() => console.log('mleko')}
      >
        <Form translate={false}>
          <InputBoxes>
            <NameInputText>
              <FormikInput name="name" InputComponent={(props: any) => <NameInput {...props} placeholder="Name" />} />
            </NameInputText>
            <EmailInputText>
              <FormikInput
                name="email"
                InputComponent={(props: any) => <EmailInput {...props} placeholder="Email" type="primary" />}
              />
            </EmailInputText>
          </InputBoxes>
          <MessageText>
            <FormikTextArea
              name="message"
              InputComponent={(props: any) => <MessageTextArea {...props} placeholder="Message" />}
            />
          </MessageText>
          <CheckBoxStyle name="checkBox">
            I accept{' '}
            <Link to="/term-of-service">
              <TermServiceAndPolicyText>Term Of Service</TermServiceAndPolicyText>
            </Link>{' '}
            and{' '}
            <Link to="/privacy-policy">
              <TermServiceAndPolicyText>PRIVACY POLICY</TermServiceAndPolicyText>
            </Link>
          </CheckBoxStyle>
          <ButtonPosition>
            <SendButton htmlType="submit">SEND</SendButton>
          </ButtonPosition>
        </Form>
      </Formik>
    </ContactStyle>
  );
};
