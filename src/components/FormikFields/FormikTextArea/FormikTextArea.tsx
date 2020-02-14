import React, { ChangeEvent } from 'react';
import { Field } from 'formik';
import get from 'lodash/get';
import { setFieldValueAndTouched } from '../helpers';
import { withErrorMessage } from '../withErrorMessage';
import { InterfaceInputComponent } from '../types';
import { InputProps } from 'antd/lib/input';
import { Input as AntdInput } from 'antd';

type MemoFormikInputProps = InputProps & {
  InputComponent?: React.ReactNode;
};

type FormikTextAreaProps = InterfaceInputComponent & MemoFormikInputProps;

const CustomInputComponent = (props: FormikTextAreaProps) => {
  const { field, form, value, isValid = true, InputComponent, ...fieldProps } = props;
  const inputValue = value || get(form.values, field.name);

  const StyledTextArea = InputComponent || AntdInput;

  return (
    // @ts-ignore
    <StyledTextArea
      name={field.name}
      hasError={!isValid}
      value={inputValue}
      onChange={(event: ChangeEvent<HTMLInputElement>) => {
        setFieldValueAndTouched(field.name, event.target.value, form);
      }}
      {...fieldProps}
    />
  );
};

// eslint-disable-next-line react/display-name
export default React.memo<MemoFormikInputProps>((props: MemoFormikInputProps) => (
  <Field {...props}>{(fieldProps: any) => withErrorMessage(CustomInputComponent)({ ...props, ...fieldProps })}</Field>
));
