import React, { FunctionComponent } from 'react';
import { Banner } from './Banner/Banner';
import { OurServices } from './OurService/OurService';
import { Newsletter } from './Newsleter/Newsleter';
import { TheProcess } from './TheProcess/TheProcess';
import { ContactStyled } from './Contact/Contact';
import { PortfolioStyled } from './Portfolio/Portfolio';
import { CookieBar } from './CookieBar/CookiesBar';

export const Home: FunctionComponent = () => (
  <>
    <Banner />
    <TheProcess />
    <OurServices />
    <PortfolioStyled />
    <ContactStyled />
    <Newsletter />
    <CookieBar />
  </>
);
