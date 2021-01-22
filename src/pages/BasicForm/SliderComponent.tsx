import React, { ReactElement, useState } from 'react';
import { Slider } from 'antd';
import styled from 'styled-components';
import { FieldMetaProps, FieldProps } from 'formik';
import { InputProps, TextAreaProps } from 'antd/lib/input';

const SliderBoxStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const SliderStyle = styled(Slider)`
  width: 400px;
  margin-left: 16px;
  margin-right: 16px;
  .ant-slider-rail {
    border: 2px solid ${props => props.theme.colors.utils.background.light};
  }
  .ant-slider-track {
    border: 2px solid ${props => props.theme.colors.main.secondary};
  }
  .ant-slider-handle {
    border: 2px solid ${props => props.theme.colors.main.secondary};
  }
  .ant-slider-handle .ant-slider-handle-2 ant-tooltip-open {
    border-color: ${props => props.theme.colors.main.secondary};
  }
  .ant-slider-handle-dragging.ant-slider-handle-dragging.ant-slider-handle-dragging,
  .ant-slider-handle:focus {
    border-color: ${props => props.theme.colors.main.secondary};
  }
  .ant-slider:hover,
  .ant-slider-handle:not(.ant-tooltip-open) {
    border-color: ${props => props.theme.colors.main.secondary} !important;
  }
  .ant-slider-handle-dragging.ant-slider-handle-dragging.ant-slider-handle-dragging,
  .ant-slider-handle:focus {
    box-shadow: none;
  }
`;

const AmountOfPaymentStyle = styled.div`
  ${props => props.theme.typography.subtitle2};
  color: ${props => props.theme.colors.utils.background.mid.color};
  margin-bottom: 8px;
`;

const MinMaxPayment = styled.div`
  ${props => props.theme.typography.subtitle2};
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const QuestionsStyle = styled.div`
  ${props => props.theme.typography.h6};
  color: ${props => props.theme.colors.utils.background.mid.color};
`;

const RequiredError = styled.div`
  ${props => props.theme.typography.subtitle1};
  color: ${props => props.theme.colors.functional.error};
`;

type CustomInputComponentProps = FieldProps & InputProps & TextAreaProps & FieldMetaProps<any>;

export const SliderComponent = (props: CustomInputComponentProps): ReactElement<CustomInputComponentProps> => {
  const [minValue, setMinValue] = useState([]);
  const { field, form } = props;

  const onChange = (value: any) => {
    setMinValue(value);
    form.setFieldValue(field.name, minValue);
  };

  const MinAndMaxValue = () => {
    if (minValue.length === 0)
      return (
        <AmountOfPaymentStyle>
          <br />0 - 50000 (PLN){' '}
        </AmountOfPaymentStyle>
      );
    else
      return (
        <AmountOfPaymentStyle>
          <br />
          {minValue[0]} - {minValue[1]} (PLN)
        </AmountOfPaymentStyle>
      );
  };

  return (
    <div>
      <div style={{ marginTop: '40px' }}>
        <QuestionsStyle>
          <text>What are your expectations for your monthly salary?</text>
        </QuestionsStyle>
      </div>
      <MinAndMaxValue />
      <SliderBoxStyle>
        <MinMaxPayment>
          <text>0 PLN</text>
        </MinMaxPayment>
        <SliderStyle range defaultValue={[0, 50000]} onChange={onChange} max={50000} min={0} />
        <MinMaxPayment>
          <text>50 000 PLN</text>
        </MinMaxPayment>
      </SliderBoxStyle>
      {form.errors.slider && form.touched.slider ? <RequiredError>Required</RequiredError> : null}
    </div>
  );
};
