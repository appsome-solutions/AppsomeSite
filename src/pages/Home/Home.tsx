import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Banner } from './Banner/Banner';
import { ContactStyled } from './Contact/Contact';
export const Home: FunctionComponent = () => (
  <>
    <Header />
    <Banner />
    <ContactStyled />
  </>
);
