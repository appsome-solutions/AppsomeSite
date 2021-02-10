import ReCAPTCHA from 'react-google-recaptcha';
import React, { FC } from 'react';
import { useField } from 'formik';

type CaptchaType = {
  name: string;
  className?: string;
};

export const FormikCaptcha: FC<CaptchaType> = ({ name, className }) => {
  const [, , helpers] = useField(name);

  const { setValue } = helpers;

  return (
    <div className={className}>
      <ReCAPTCHA sitekey={process.env.REACT_APP_CAPCHA_SITE_KEY as string} onChange={() => setValue(true)} />
    </div>
  );
};
