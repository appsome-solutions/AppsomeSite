import React from 'react';
import styled from 'styled-components';
import { Formik, Form, Field } from 'formik';
import FormikInput from '../../components/FormikFields/FormikInput/FormikInput';
import { media } from '../../global/RWD';
import { CommonFormElementStyling } from '../Home/Contact/InputStyle';
import * as Yup from 'yup';
import { Button } from 'components/Button/Button';
import { FirebaseProvider } from '../../global/Firebase/Firebase';
import { UploadButtonComponent } from './UploadButtonComponent';
import { Link } from 'react-router-dom';
import FormikCheckbox from '../../components/FormikFields/FormikChecbox/FormikCheckbox';
import { TagForm } from './TagForm';
import { YearsOfExperience } from './YearsOfExperience';
import { SliderComponent } from './SliderComponent';
import firebase from 'firebase';
import { message } from 'antd';

interface EditorStylesWrapperType {
  hasError?: boolean;
}

const MainComponent = styled.div`
  border-top: 1px solid ${props => props.theme.colors.utils.border.light};
  background-color: ${props => props.theme.colors.main.primary};
  padding: 20px 20px 48px 20px;
  ${media.md`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`}
`;

const TextUnderSectionTitle = styled.h3`
  ${media.xs`
   padding-left:12px;
   padding-right:4px;
  `}
  ${props => props.theme.typography.h5};
  color: ${props => props.theme.colors.utils.background.mid.color};
  padding-top: 20px;
  padding-bottom: 48px;
`;

const InputBoxes = styled.div`
  margin-bottom: 8px;
  width: 100%;
  flex-direction: column;
  ${media.xl`
   display: flex;
  `};
`;

const StyledInput = styled.input<EditorStylesWrapperType>`
  height: 48px;
  ${CommonFormElementStyling}
  border-color: ${props => (props.hasError ? props.theme.colors.functional.error : null)};
  color: ${props => props.theme.colors.main.tetiary};
   ${media.xs`
   padding-left:12px;
   margin-bottom:0px;
  `}
  ${media.xl`
   margin-bottom:0px;
  `}
    ${media.xxl`
   margin-bottom:0px;
  `}
`;

const EmailInput = styled(StyledInput)`
  ${media.xs`
  width: 100%;
  `}
  ${media.sm`
  width:400px
  `}
  ${media.xl`
  width: 400px;
  `}
   ${media.xxl`
   margin-bottom:0px;
  `}
`;

const ButtonPosition = styled.div`
  float: right;
`;

const FormStyle = styled(Form)`
  ${media.xs`
  margin-left: 0;
  padding-right: 20px
`}
  ${media.md`
  margin-left: 16px;
`}
`;

const EmailInputText = styled.h6<EditorStylesWrapperType>`
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-top: 16px;
  margin-bottom: 40px;
  ${media.md`
  float:none;
  `};
  ${media.xl`
    float: left;
  `}
`;

const CheckBoxStyle = styled(FormikCheckbox)`
  color: ${props => props.theme.colors.utils.background.mid.color};
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  .ant-checkbox-checked .ant-checkbox-inner:after {
    border-color: ${props => props.theme.colors.main.primary};
  }
`;

const TextInCheckBox = styled.div`
  margin-left: 8px;
  ${props => props.theme.typography.body2};
`;

const TermServiceAndPolicyText = styled.span`
  cursor: pointer;
  color: ${props => props.theme.colors.utils.background.mid.color};
  &:hover {
    color: ${props => props.theme.colors.main.secondary};
  }
  ${media.xs`
   color: #F55951;
   `}
`;

const CheckBoxFormStyle = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckBoxSecondFormStyle = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuestionsStyle = styled.span`
  ${props => props.theme.typography.h6};
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const SignupSchemaForm = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required(),
  checkBox: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must accept Term Of Service and Privacy Policy.'),
  urlFile: Yup.string(),
  slider: Yup.string(),
  yearsOfExperience: Yup.string(),
  tagForm: Yup.string(),
  checkBoxSecond: Yup.boolean()
    .required('Required')
    .oneOf([true], 'You must agree for sharing of personal data.'),
});

const initialFormValues = {
  email: '',
  fileList: [],
  checkBox: '',
  slider: '',
  yearsOfExperience: '',
  tagForm: '',
  checkBoxSecond: '',
};

const withFirebaseProvider = (Component: React.ElementType) => () => (
  <FirebaseProvider>
    <Component />
  </FirebaseProvider>
);

export const BasicForm = withFirebaseProvider(() => {
  const db = firebase.firestore();

  const customUpload = async (file: any) => {
    const storage = firebase.storage();
    const metadata = {
      contentType: `application/pdf`,
    };
    const storageRef = await storage.ref();
    const imgFile = storageRef.child(`/cv/${file.name}-${Date.now()}`);
    try {
      await imgFile.put(file.originFileObj, metadata);
    } catch (e) {
      console.log(e);
    }
    return imgFile
      .getDownloadURL()
      .then(url => {
        return url;
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <MainComponent>
      <div style={{ display: 'inline', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <TextUnderSectionTitle>
          Fill out the form and we will send you the best company proposals to you.
        </TextUnderSectionTitle>
        <Formik
          initialValues={initialFormValues}
          validationSchema={SignupSchemaForm}
          onSubmit={async (values, { resetForm }) => {
            const urlFile = await customUpload(values.fileList[0]);
            console.log(urlFile);
            db.collection('basic-form')
              .add({
                email: values.email,
                urlFile: urlFile,
                slider: values.slider,
                tagForm: values.tagForm,
                yearsOfExperience: values.yearsOfExperience,
              })
              .then(() => {
                message.success('Properly send data!');
                resetForm();
              })
              .catch(() => message.success('Got some errors when sending data :/'));
          }}
        >
          <FormStyle translate={false}>
            <InputBoxes>
              <QuestionsStyle>
                <text>Enter your email.</text>
              </QuestionsStyle>
              <EmailInputText>
                <FormikInput
                  name="email"
                  id="email-basic-form"
                  InputComponent={(props: any) => <EmailInput {...props} placeholder="Email" />}
                />
              </EmailInputText>
              <Field name="fileList" component={UploadButtonComponent} placeholder="urlFile" id="urlFile-basic-form" />
              <Field name="tagForm" component={TagForm} placeholder="tagForm" id="tagForm-basic-form" />
              <Field name="slider" component={SliderComponent} placeholder="slider" id="slider-basic-form" />
              <Field
                name="yearsOfExperience"
                component={YearsOfExperience}
                placeholder="yearsOfExperience"
                id="yearsOfExperience-basic-form"
              />
              <CheckBoxFormStyle>
                <CheckBoxStyle name="checkBox" id="checkbox-basic-form">
                  <TextInCheckBox>
                    I agree to{' '}
                    <Link to="/term-of-service">
                      <TermServiceAndPolicyText>term of service</TermServiceAndPolicyText>
                    </Link>{' '}
                    and{' '}
                    <Link to="/privacy-policy">
                      <TermServiceAndPolicyText>privacy policy</TermServiceAndPolicyText>
                    </Link>
                  </TextInCheckBox>
                </CheckBoxStyle>
              </CheckBoxFormStyle>
              <CheckBoxSecondFormStyle>
                <CheckBoxStyle name="checkBoxSecond" id="checkbox-basic-second-form">
                  <TextInCheckBox>
                    I consent to the sharing of my personal data for recruitment purposes with groups of entities in
                    connection with connection with the recruitment process for order fulfillment.
                  </TextInCheckBox>
                </CheckBoxStyle>
              </CheckBoxSecondFormStyle>
            </InputBoxes>
            <ButtonPosition>
              <Button style={{ marginRight: '10px' }} htmlType="submit" aria-label="send contact form">
                SEND
              </Button>
            </ButtonPosition>
          </FormStyle>
        </Formik>
      </div>
    </MainComponent>
  );
});
