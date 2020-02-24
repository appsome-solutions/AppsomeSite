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
import { media } from '../../../global/RWD';

interface EditorStylesWrapperType {
  hasError?: boolean;
}

const ContactStyle = styled.div`
  background-color: ${props => props.theme.colors.main.primary};
  ${media.xs`
  padding: 98px 16px 52px 16px;  
  `}
  ${media.md`
  padding: 96px 192px 80px 192px;
  `}
`;

const TextUnderSectionTitle = styled.h5`
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${media.xs`
  margin: 24px 0 0 0  ;
  `}
  ${media.md`
  margin: 24px 0 96px 16px;
  `}
`;

const InputBoxes = styled.div`
  margin: 0 0 32px 0;
  ${media.xs`
  `}
  ${media.md`
   display: flex;
   justify-content: space-between;
  `}
`;

const StyledInput = styled.input<EditorStylesWrapperType>`
  height: 48px;
  ${CommonFormElementStyling}
   border-color: ${props => (props.hasError ? props.theme.colors.functional.error : null)};
   ${media.xs`
   padding:0 0 0 12px;
   margin-bottom:0px;
  `}
  ${media.md`
  margin-bottom:0px;
  padding:0 0 0 20px;
  `}
`;

const NameInputText = styled.h6`
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${media.xs`
    margin:20px 0 32px 0;
  `}
  ${media.md`
   margin: 0 0 0 0;
   `}
`;

const NameInput = styled(StyledInput)`
  ${media.xs`
  width: 100%;
  `}
  ${media.md`
  width: 400px;
  `}
`;

const EmailInputText = styled.h6<EditorStylesWrapperType>`
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const EmailInput = styled(StyledInput)`
  ${media.xs`
  width: 100%;
  `}
  ${media.md`
  width: 400px;
  `}
`;

const MessageTextArea = styled.textarea<EditorStylesWrapperType>`
  height: 136px;
  padding: 20px 0 0 20px;
  width: 100%;
  ${CommonFormElementStyling}
    border-color: ${props => (props.hasError ? props.theme.colors.functional.error : null)};
   ${media.xs`
   margin-bottom:0px;
  `}
  ${media.md`
  margin-bottom:0px;
  `}
`;

const MessageText = styled.h6`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${media.xs`
  margin: 0 0 16px 0;
  `}
  ${media.md`
  margin: 0 0 32px 0;

  `}
`;

const ButtonPosition = styled.div`
  text-align: right;
`;

const SendButton = styled(Button)`
  ${media.xs`
  width:100%
  margin-top: 16px;
  `}
  ${media.md`
  margin-top: 0;
  width: 116px;
`}
`;

const TermServiceAndPolicyText = styled.span`
  ${props => props.theme.typography.body2};
  cursor: pointer;
  color: ${props => props.theme.colors.utils.background.mid.color};
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
    text-decoration-line: ${props => props.theme.textDecorationLine};
  }
  ${media.xs`
   color: #F55951;
`}
  ${media.md`
  color: #F1E8E6`}
`;
const CheckBoxStyle = styled(FormikCheckbox)`
  color: ${props => props.theme.colors.utils.background.mid.color};
  ${props => props.theme.typography.body2};
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

const FormStyle = styled(Form)`
  ${media.xs`
  margin-left: 0;
`}
  ${media.md`
  margin-left: 16px;
`}
`;

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
        <FormStyle translate={false}>
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
            I agree to{' '}
            <Link to="/term-of-service">
              <TermServiceAndPolicyText>term of service</TermServiceAndPolicyText>
            </Link>{' '}
            and{' '}
            <Link to="/privacy-policy">
              <TermServiceAndPolicyText>privacy policy</TermServiceAndPolicyText>
            </Link>
          </CheckBoxStyle>
          <ButtonPosition>
            <SendButton htmlType="submit">SEND</SendButton>
          </ButtonPosition>
        </FormStyle>
      </Formik>
    </ContactStyle>
  );
};
