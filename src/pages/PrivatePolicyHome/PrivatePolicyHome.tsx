import React, { FunctionComponent } from 'react';
import { PrivacyPolicy } from './PrivatePolicy/PrivatePolicy';
import { Header } from '../Home/Header/Header';
import { Footer } from '../Home/Footer/Footer';

export const PrivacyPolicyHome: FunctionComponent = () => (
  <>
    <Header />
    <PrivacyPolicy />
    <Footer />
  </>
);
