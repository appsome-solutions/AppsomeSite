import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { FieldMetaProps, FieldProps } from 'formik';
import { InputProps, TextAreaProps } from 'antd/lib/input';
import { Radio } from 'antd';

const ExperienceYearStyle = styled.div`
  display: flex;
  flex-direction: column;
`;

const ExperienceYearBoxStyle = styled(Radio.Group)`
  margin-top: 16px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  .ant-radio-button-wrapper {
    border-width: 1px;
  }
`;

const QuestionsStyle = styled.span`
  ${props => props.theme.typography.h6};
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const ExperienceButtonStyle = styled(Radio.Button)`
  && {
    margin-bottom: 8px;
    &:not(:first-child):before {
      width: 0px;
    }
    &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled) {
      background-color: ${props => props.theme.colors.main.secondary};
      border-color: ${props => props.theme.colors.main.secondary};
    }
    cursor: pointer;
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.24), 0px 0px 2px rgba(0, 0, 0, 0.12);
    line-height: 16px;
    text-align: center;
    &:disabled {
      cursor: not-allowed;
    }
    &&:hover {
      color: ${props => props.theme.colors.utils.text.dark};
      background-color: ${props => props.theme.colors.main.secondary};
    }
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80px;
    height: 80px;
    color: ${props => props.theme.colors.utils.background.mid.color};
    background-color: ${props => props.theme.colors.main.primary};
    border-radius: 4px;
    &.ant-radio-button-wrapper-checked:not(.ant-radio-button-wrapper-disabled):focus-within {
      background-color: ${props => props.theme.colors.main.secondary};
      border-color: ${props => props.theme.colors.main.secondary};
    }
  }
  margin-right: 20px;
`;

type CustomInputComponentProps = FieldProps & InputProps & TextAreaProps & FieldMetaProps<any>;

const RequiredError = styled.div`
  ${props => props.theme.typography.subtitle1};
  color: ${props => props.theme.colors.functional.error};
`;

export const YearsOfExperience = (props: CustomInputComponentProps): ReactElement<CustomInputComponentProps> => {
  const { field, form } = props;

  const handleOnClick = (e: any) => {
    form.setFieldValue(field.name, e.target.value);
  };

  return (
    <>
      <ExperienceYearStyle>
        <div style={{ marginTop: '40px' }}>
          <QuestionsStyle>
            <text>How many years of experience you have?</text>
          </QuestionsStyle>
        </div>
        <ExperienceYearBoxStyle onChange={handleOnClick}>
          <ExperienceButtonStyle value={'0-1'}>0-1</ExperienceButtonStyle>
          <ExperienceButtonStyle value={'1-2'}>1-2</ExperienceButtonStyle>
          <ExperienceButtonStyle value={'2-4'}>2-4</ExperienceButtonStyle>
          <ExperienceButtonStyle value={'4-6'}>4-6</ExperienceButtonStyle>
          <ExperienceButtonStyle value={'6-10'}>6-10</ExperienceButtonStyle>
          <ExperienceButtonStyle value={'10+'}>10+</ExperienceButtonStyle>
        </ExperienceYearBoxStyle>
      </ExperienceYearStyle>
      {form.errors.yearsOfExperience && form.touched.yearsOfExperience ? <RequiredError>Required</RequiredError> : null}
    </>
  );
};
