import { FormikProps } from 'formik/dist/types';

export const setFieldValueAndTouched = (fieldName: string, value: any, form: FormikProps<any>) => {
  form.setFieldTouched(fieldName, true);
  form.setFieldValue(fieldName, value);
};
