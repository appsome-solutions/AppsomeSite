import React, { FunctionComponent } from 'react';
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import { CookieBar } from 'pages/Home/CookieBar/CookiesBar';

export const HeaderPageFooter: FunctionComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <CookieBar />
    </>
  );
};
