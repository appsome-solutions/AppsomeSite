import React, { FunctionComponent } from 'react';
import { PrivacyPolicy } from './PrivatePolicy/PrivatePolicy';
import { Header } from '../../global/Layouts/FooterAndHeader/Header/Header';
import { Footer } from '../../global/Layouts/FooterAndHeader/Footer/Footer';

export const PrivacyPolicyHome: FunctionComponent = () => (
  <>
    <Header />
    <PrivacyPolicy />
    <Footer />
  </>
);
