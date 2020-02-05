import React, { FunctionComponent } from 'react';
import { Header } from '../Home/Header/Header';
import { Footer } from '../Home/Footer/Footer';
import { TermOfService } from './TermOfServiceStyle/TermOfService';

export const TermOfServiceHome: FunctionComponent = () => (
  <>
    <Header />
    <TermOfService />
    <Footer />
  </>
);
